import { Queries, QueriesMap } from "./queries";
import { Mutations, MutationsMap } from "./mutations";
import * as GQLTypes from "./types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

interface QueryObject {
  [key: string]: any;
}

interface BuildQueryParams<Params, Fields> {
  name: string;
  params?: Params;
  fields?: Fields;
}

export type FetchingFunction = <Data = any>(
  queryString: string
) => Promise<Data>;

// Some conditionals in this type might seem weird but please note that typescript doesn't do hard conditionals
// True and false are never strict and if a type partially agrees with a condition then a transformation can be applied
// In the following type if QueryMapValue extends null we would like to just return QueryMapValue | null
// however QueryMapValue also isn't null so the following conditional will still be applied
// Also if we get a value that is an array and extends null then both extends null and extends any[] true conditions will be applied
//prettier-ignore
type ExtractReturnType<T extends Queries | Mutations> = {
  [Key in keyof T]: Key extends keyof (T extends Queries ? QueriesMap : MutationsMap)
    ? T[Key] extends infer Value
      ? (T extends Queries ? QueriesMap : MutationsMap)[Key] extends infer MapValue
        ? Value extends { returns: infer Returns }
          ? Returns extends boolean
            ? MapValue
            : MapValue extends any[]
            ? {
                [ReturnsKey in keyof Returns]: ReturnsKey extends keyof MapValue[number]
                  ? MapValue[number][ReturnsKey]
                  : Returns[ReturnsKey];
              }[]
            : MapValue extends null // can also be written as null extends MapValue
            ? MapValue // will be QueryMapValue | null
            : {
                [ReturnsKey in keyof Returns]: ReturnsKey extends keyof MapValue
                  ? MapValue[ReturnsKey]
                  : Returns[ReturnsKey];
              }// This will still run as a transformation
          : never
        : never
      : never
    : never;
};

export default class GQLAPI {
  private fetcher: FetchingFunction;
  constructor(
    init:
      | { fetcher: FetchingFunction; gqlEndpoint?: undefined }
      | {
          fetcher?: undefined;
          gqlEndpoint: string;
          options?: AxiosRequestConfig;
        }
  ) {
    if (init.fetcher) {
      this.fetcher = init.fetcher;
    } else {
      this.fetcher = async (query: string) => {
        try {
          const { data } = await axios.post(
            init.gqlEndpoint,
            {
              query,
            },
            init.options
          );
          if (data.errors && data.errors.length > 0) {
            throw new Error(data.errors[0].message);
          }
          return data.data;
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response) {
              if (
                error.response.data.errors &&
                error.response.data.errors.length > 0
              )
                throw new Error(error.response.data.errors[0].message);
              else if (error.response.data)
                throw new Error(error.response.data);
              else throw new Error(error.message);
            } else {
              throw new Error(error.message);
            }
          } else if (error instanceof Error) {
            throw new Error(error.message);
          }
        }
      };
    }
  }
  async query<Query extends Queries>(query: Query, fetcher?: FetchingFunction) {
    type ReturnType = ExtractReturnType<Query>;
    if (!fetcher && !this.fetcher) {
      throw new Error("Provide a fetching function");
    }
    const queryString = this.getQueryString(query);
    let data = this.fetcher
      ? await this.fetcher<ReturnType>(queryString)
      : await fetcher!<ReturnType>(queryString);
    return data;
  }
  async mutation<Mutation extends Mutations>(
    mutation: Mutation,
    fetcher?: FetchingFunction
  ) {
    type ReturnType = ExtractReturnType<Mutation>;
    if (!fetcher && !this.fetcher) {
      throw new Error("Provide a fetching function");
    }
    const mutationString = this.getMutationString(mutation);
    let data = this.fetcher
      ? await this.fetcher<ReturnType>(mutationString)
      : await fetcher!<ReturnType>(mutationString);
    return data;
  }

  getQueryString(query: Queries) {
    let graphQuery = "query { ";
    for (let q in query) {
      const name = q as keyof Queries;
      graphQuery += this.buildQuery({
        name,
        params: query[name]!.args,
        fields: query[name]!.returns,
      });
    }
    graphQuery += " }";
    return graphQuery;
  }
  getMutationString(mutation: Mutations) {
    let graphMutation: string = "mutation { ";
    for (let m in mutation) {
      const name = m as keyof Mutations;
      graphMutation += this.buildQuery({
        name,
        params: mutation[name]!.input,
        fields: mutation[name]!.returns,
      });
    }
    graphMutation += " }";
    return graphMutation;
  }

  private buildQuery<Params, Fields>({
    name,
    params,
    fields,
  }: BuildQueryParams<Params, Fields>): string {
    const queryParams =
      typeof params === "object"
        ? this.parseQueryParams(params as QueryObject)
        : "";
    const requestFields =
      typeof fields === "object"
        ? this.objectToQueryFields<Fields>(fields)
        : "";
    return ` ${name} ${queryParams} ${requestFields} `;
  }

  private objectToQueryParam(object: QueryObject): string {
    let queryString = "{ ";
    for (let key in object) {
      const val = object[key];
      if (val === undefined || val === null) {
      } else if (val instanceof Array) {
        queryString += `${key}: ` + this.arrayToQueryParam(val);
      } else if (typeof val === "string") {
        if (GQLTypes.EnumMap[val as keyof typeof GQLTypes.EnumMap])
          queryString += `${key}: ${val} `;
        else queryString += `${key}: \"${val}\" `;
      } else if (typeof val === "object") {
        queryString += `${key}: ` + this.objectToQueryParam(val);
      } else {
        queryString += `${key}: ` + val + " ";
      }
    }
    queryString += "} ";
    return queryString;
  }

  private arrayToQueryParam(array: any[]): string {
    let queryString = " [ ";
    for (let item of array) {
      if (item === undefined || item === null) {
      } else if (item instanceof Array) {
        queryString += this.arrayToQueryParam(item);
      } else if (typeof item === "string") {
        if (GQLTypes.EnumMap[item as keyof typeof GQLTypes.EnumMap])
          queryString += `${item} `;
        else queryString += `\"${item}\" `;
      } else if (typeof item === "object") {
        queryString += this.objectToQueryParam(item);
      } else {
        queryString += `${item} `;
      }
    }
    queryString += "] ";
    return queryString;
  }

  private parseQueryParams(params: QueryObject): string {
    if (Object.keys(params).length === 0) return "";
    let queryParams = " ( ";
    for (let key in params) {
      const val = params[key];
      if (val === undefined || val === null) {
      } else if (typeof val === "string") {
        if (GQLTypes.EnumMap[val as keyof typeof GQLTypes.EnumMap])
          queryParams += `${key}: ${val} `;
        else queryParams += `${key}: \"${val}\" `;
      } else if (typeof val === "object") {
        if (val instanceof Array) {
          queryParams += `${key}: ` + JSON.stringify(val);
        } else queryParams += `${key}: ` + this.objectToQueryParam(val);
      } else {
        queryParams += `${key}: ` + val + " ";
      }
    }
    queryParams += " ) ";
    return queryParams;
  }

  private objectToQueryFields<Fields>(
    object: Fields,
    fieldString = ""
  ): string {
    let isEmpty = true;
    fieldString = "{ ";
    for (let key in object) {
      const val = object[key];
      if (!val) {
      } else if (typeof val === "object") {
        isEmpty && (isEmpty = false);
        fieldString += `${key} ` + this.objectToQueryFields(val, fieldString);
      } else {
        isEmpty && (isEmpty = false);
        fieldString += `${key} `;
      }
    }
    fieldString += "} ";
    return isEmpty ? "" : fieldString;
  }
}

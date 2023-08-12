import { Queries, QueriesMap } from "./queries";
import { Mutations, MutationsMap } from "./mutations";
import * as GQLTypes from "./types";
interface QueryObject {
  [key: string]: any;
}

interface BuildQueryParams<Params, Fields> {
  name: string;
  params?: Params;
  fields?: Fields;
}

type FetchingFunction = <Data = any>(queryString: string) => Promise<Data>;

type ExtractQueryReturnType<Query extends Queries> = {
  [K in keyof Query]: K extends keyof QueriesMap
    ? Query[K] extends { returns: infer R }
      ? R extends boolean
        ? QueriesMap[K]
        : {
            [K3 in keyof R]: K3 extends keyof QueriesMap[K]
              ? QueriesMap[K][K3]
              : R[K3];
          }
      : never
    : never;
};

type ExtractMutationReturnType<Mutation extends Mutations> = {
  [K in keyof Mutation]: K extends keyof MutationsMap
    ? Mutation[K] extends { returns: infer R }
      ? R extends boolean
        ? MutationsMap[K]
        : {
            [K3 in keyof R]: K3 extends keyof MutationsMap[K]
              ? MutationsMap[K][K3]
              : R[K3];
          }
      : never
    : never;
};

export default class GQLAPI {
  private fetcher?: FetchingFunction;
  constructor(fetcher?: FetchingFunction) {
    this.fetcher = fetcher;
  }
  async query<Query extends Queries>(query: Query, fetcher?: FetchingFunction) {
    type ReturnType = ExtractQueryReturnType<Query>;
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
    type ReturnType = ExtractMutationReturnType<Mutation>;
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

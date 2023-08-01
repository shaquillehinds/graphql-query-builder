interface QueryObject {
  [key: string]: any;
}
interface FieldsObject {
  [key: string]: boolean | FieldsObject;
}
type QueryType = "query" | "mutation";
interface BuildQueryParams<Params, Fields> {
  type: QueryType;
  name: string;
  params?: Params;
  fields?: Fields;
}

export default function queryBuilder<Params, Fields>() {
  return (data: BuildQueryParams<Params, Fields>) =>
    buildQuery<Params, Fields>(data);
}

export function buildQuery<Params, Fields>({
  type,
  name,
  params,
  fields,
}: BuildQueryParams<Params, Fields>): string {
  const queryParams =
    typeof params === "object" ? parseQueryParams(params as QueryObject) : "";
  const requestFields =
    typeof fields === "object" ? objectToQueryFields<Fields>(fields) : "";
  return `${type} { ${name} ${queryParams} ${requestFields} }`;
}

function objectToQueryParam(object: QueryObject): string {
  let queryString = "{ ";
  for (let key in object) {
    const val = object[key];
    if (val === undefined || val === null) {
    } else if (val instanceof Array) {
      queryString += `${key}: ` + arrayToQueryParam(val);
    } else if (typeof val === "string") {
      queryString += `${key}: \"${val}\" `;
    } else if (typeof val === "object") {
      queryString += `${key}: ` + objectToQueryParam(val);
    } else {
      queryString += `${key}: ` + val + " ";
    }
  }
  queryString += "} ";
  return queryString;
}

function arrayToQueryParam(array: any[]): string {
  let queryString = " [ ";
  for (let item of array) {
    if (item === undefined || item === null) {
    } else if (item instanceof Array) {
      queryString += arrayToQueryParam(item);
    } else if (typeof item === "string") {
      queryString += `\"${item}\" `;
    } else if (typeof item === "object") {
      queryString += objectToQueryParam(item);
    } else {
      queryString += `${item} `;
    }
  }
  queryString += "] ";
  return queryString;
}

function parseQueryParams(params: QueryObject): string {
  if (Object.keys(params).length === 0) return "";
  let queryParams = " ( ";
  for (let key in params) {
    const val = params[key];
    if (val === undefined || val === null) {
    } else if (typeof val === "string") {
      queryParams += `${key}: \"${val}\" `;
    } else if (typeof val === "object") {
      if (val instanceof Array) {
        queryParams += `${key}: ` + JSON.stringify(val);
      } else queryParams += `${key}: ` + objectToQueryParam(val);
    } else {
      queryParams += `${key}: ` + val + " ";
    }
  }
  queryParams += " ) ";
  return queryParams;
}

function objectToQueryFields<Fields>(object: Fields, fieldString = ""): string {
  let isEmpty = true;
  fieldString = "{ ";
  for (let key in object) {
    const val = object[key];
    if (!val) {
    } else if (typeof val === "object") {
      isEmpty && (isEmpty = false);
      fieldString += `${key} ` + objectToQueryFields(val, fieldString);
    } else {
      isEmpty && (isEmpty = false);
      fieldString += `${key} `;
    }
  }
  fieldString += "} ";
  return isEmpty ? "" : fieldString;
}

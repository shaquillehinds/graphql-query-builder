import { buildMutations, buildQueries } from "./builders";
import { convertFields } from "./converters";
import fieldsMap from "../utils/cache/fieldsMap";

export default function convertGraphQLSchemaToTS(graphQLSchema: string) {
  let types = "";
  let query = "";
  let mutation = "";
  let enumMap = "export enum EnumMap {";

  let enumMatch: RegExpExecArray | null;
  const enumRegex: RegExp = /enum\s+(\w+)\s*{([\s\w]+)}/g;
  // The RegExp object saves the last position everytime the .exec method is called
  while ((enumMatch = enumRegex.exec(graphQLSchema))) {
    const enumName = enumMatch[1]; // Capture group 1 (\w+)
    const gqlEnum = enumMatch[2]; // Capture group 2 ([\s\w]+)
    const enumValueRegex = /[^enum\s{}]\w+/g;
    let enumValueMatch: RegExpExecArray | null;
    let enumValues = "";
    while ((enumValueMatch = enumValueRegex.exec(gqlEnum))) {
      const enumValue = enumValueMatch[0];
      enumValues += `\n  ${enumValue} = "${enumValue}",`;
    }
    const tsEnum = `export enum ${enumName} {${enumValues}\n}\n\n`;
    enumMap += `\n${enumValues}`;
    types += tsEnum;
  }
  enumMap += "\n}\n";
  types += enumMap;

  const typeRegex = /(type|input)\s+(\w+)\s*{([^}]+)}/g;
  let typeMatch: RegExpExecArray | null;
  while ((typeMatch = typeRegex.exec(graphQLSchema))) {
    const typeName = typeMatch[2];
    if (typeName === "Query") {
      query = typeMatch[0];
      continue;
    }
    if (typeName === "Mutation") {
      mutation = typeMatch[0];
      continue;
    }
    const fields = convertFields(typeMatch[0]);
    types += `export type ${typeName} = {${fields}\n}\n\n`;
  }
  const mutations = buildMutations(mutation, types);
  const queries = buildQueries(query, types);
  let returnFields = "";
  for (let f in fieldsMap) {
    returnFields += fieldsMap[f];
  }
  return {
    types,
    returnFields,
    queries,
    mutations,
  };
}

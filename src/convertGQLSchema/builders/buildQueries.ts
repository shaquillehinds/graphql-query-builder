import addImportsForSaved from "../../utils/addImportsForSaved";
import { savedFields, savedTypes } from "../../utils/cache/savedImports";
import { convertFields, convertType } from "../converters";
import buildReturnFields from "./buildReturnFields";

export default function buildQueries(queryMatch: string, tsAliases: string) {
  const queriesRegex = /(\w+)\s*\(?(.*)\)?:\s*(\[?\s?\w+\s?!?\s?\]?!?)/g;
  let queriesMatch: RegExpExecArray | null;
  let queries = "export type Queries = {";
  let queriesMap = "export type QueriesMap = {";

  while ((queriesMatch = queriesRegex.exec(queryMatch))) {
    const queryName = queriesMatch[1];
    const queryArgs = convertFields(queriesMatch[2], savedTypes);
    const queryReturn = queriesMatch[3];
    const query = `${queryName}?: {\nargs: {${queryArgs}\n};\nreturns: ${buildReturnFields(
      tsAliases,
      queryReturn,
      savedFields
    )} \n}`;
    const queryMap = `${queryName}: ${convertType(
      queryReturn.replace(/[\[\]!\s]/g, ""),
      savedTypes
    )}${queryReturn.includes("[") ? "[]" : ""}${
      !queryReturn.includes("!") ? " | null" : ""
    };`;
    queriesMap += `\n${queryMap}`;
    queries += `\n${query}`;
  }
  queries += "\n}";
  queriesMap += "\n}";
  queries += `\n${queriesMap}`;

  const imports = addImportsForSaved(
    { name: "types", saved: savedTypes },
    { name: "returnFields", saved: savedFields }
  );

  queries = imports + queries;

  return queries;
}

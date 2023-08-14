import addImportsForSaved from "../../utils/addImportsForSaved";
import { savedFields, savedTypes } from "../../utils/cache/savedImports";
import { convertType } from "../converters";
import buildReturnFields from "./buildReturnFields";

export default function buildMutations(match: string, tsAliases: string) {
  const mutationsRegex = /(\w+)\s*\(?(.*)\)?:\s*(\[?\s?\w+\s?!?\s?\]?!?)/g;
  let mutationsMatch: RegExpExecArray | null;
  let mutations = "export type Mutations = {";
  let mutationsMap = "export type MutationsMap = {";

  while ((mutationsMatch = mutationsRegex.exec(match))) {
    const mutationName = mutationsMatch[1];
    const mutationInput = mutationsMatch[2].split(")")[0].split("!")[0];
    const savedTypeKey = mutationInput.split(":")[1];
    if (savedTypeKey)
      !savedTypes[savedTypeKey] && (savedTypes[savedTypeKey] = savedTypeKey);
    const mutationReturn = mutationsMatch[3];
    let mutation = `${mutationName}?: {\ninput: {${mutationInput}\n};\nreturns: ${buildReturnFields(
      tsAliases,
      mutationReturn,
      savedFields
    )} \n}`;
    const mutationMap = `${mutationName}: ${convertType(
      mutationReturn.replace(/[\[\]!\s]/g, ""),
      savedTypes
    )}${mutationReturn.includes("[") ? "[]" : ""}${
      !mutationReturn.includes("!") ? " | null" : ""
    };`;
    mutationsMap += `\n${mutationMap}`;
    mutations += `\n${mutation}`;
  }
  mutations += "\n}";
  mutationsMap += "\n}";
  mutations += `\n${mutationsMap}`;

  const imports = addImportsForSaved(
    { name: "types", saved: savedTypes },
    { name: "returnFields", saved: savedFields }
  );

  mutations = imports + mutations;

  return mutations;
}

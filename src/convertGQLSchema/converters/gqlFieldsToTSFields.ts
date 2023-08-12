import convertType from "./gqlTypeToTS";

// Helper function to convert GraphQL fields to TypeScript fields
export default function convertFields(
  graphQLFields: string,
  savedTypes?: { [key: string]: string }
) {
  const fieldsRegex = /\w+:\s*[\w\[\]!]+!?/g;
  let fieldMatch: RegExpExecArray | null;
  let fields = "";
  while ((fieldMatch = fieldsRegex.exec(graphQLFields))) {
    const [key, value] = fieldMatch[0].split(":");
    const v = value.split("!");
    const typescriptField = `${key}${v[1] === "" ? "" : "?"}: ${convertType(
      v[1] === "]" ? v[0].trim() + "]" : v[0].trim(),
      savedTypes
    )}`;
    fields += `\n  ${typescriptField}`;
  }
  return fields;
}

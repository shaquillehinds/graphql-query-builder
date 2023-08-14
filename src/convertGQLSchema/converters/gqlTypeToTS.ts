// Helper function to convert GraphQL types to TypeScript types
export default function convertType(
  graphQLType: string,
  savedTypes?: { [key: string]: string }
): string {
  let array = false;
  if (graphQLType.includes("[")) array = true;
  let gqlType = array
    ? graphQLType.slice(1, graphQLType.length - 1)
    : graphQLType;
  let type = (() => {
    switch (gqlType) {
      case "String":
        return "string";
      case "Boolean":
        return "boolean";
      case "Int":
      case "Float":
        return "number";
      case "DateTime":
        return "Date";
      default:
        if (savedTypes && !savedTypes[gqlType]) savedTypes[gqlType] = gqlType;
        return gqlType;
    }
  })();
  if (array) type += "[]";
  return type;
}

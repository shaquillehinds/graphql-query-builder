// Helper function to convert type to boolean fields
export default function convertTypeToBoolean(type: string): string {
  switch (type) {
    case "string":
    case "number":
    case "Date":
      return "boolean";
    default:
      return type;
  }
}

export default function addImportsForSaved(
  ...args: { name: string; saved: { [key: string]: string } | string[] }[]
): string {
  let allImports = "";
  for (let saved of args) {
    let imports = "import {";
    if (saved.saved instanceof Array) {
      for (let field of saved.saved) {
        imports += `\n${field},`;
      }
    } else {
      for (let field in saved.saved) {
        imports += `\n${field},`;
      }
    }
    imports += `\n} from "./${saved.name}"\n\n`;
    allImports += imports;
  }
  return allImports;
}

import { convertType, convertTypeToBoolean } from "../converters";
import fieldsMap from "../../utils/cache/fieldsMap";

export default function buildReturnFields(
  tsAliases: string,
  aliasName: string,
  savedFields?: string[]
): string {
  let returnFields = "";
  const name = aliasName.trim().replace(/[\[\]!]/g, "");
  if (fieldsMap[name]) return ` ${name}Fields`;
  const aliasRegex = new RegExp(
    `(type|enum)\\s*${name.trim()}\\s*=?\\s*{([\\w\\s,=;"?:\\[\\]]+)}`,
    "g"
  );
  const aliasMatch = aliasRegex.exec(tsAliases);
  let self = "";
  if (aliasMatch) {
    if (aliasMatch[1] === "enum") return "boolean";
    returnFields += "{";
    const fieldsRegex = /(\w+)\??:\s*(\w+)\[?\]?;?/g;
    let fieldsMatch: RegExpExecArray | null;
    while ((fieldsMatch = fieldsRegex.exec(aliasMatch[2]))) {
      let fieldValue = convertTypeToBoolean(fieldsMatch[2]);
      if (fieldValue !== "boolean") {
        if (fieldValue === name) {
          self = fieldsMatch[1];
          continue;
        } else
          fieldValue = buildReturnFields(tsAliases, fieldValue, savedFields);
      }
      returnFields += `\n${fieldsMatch[1]}?: ${fieldValue}`;
    }
    if (self) returnFields += `\n${self}?: ${returnFields}\n}`;
    returnFields += "\n}";
    const fieldsTypeName = name + "Fields";
    savedFields?.push(fieldsTypeName);
    fieldsMap[name] = `\nexport type ${fieldsTypeName} = ${returnFields}\n`;
    return fieldsTypeName;
  } else return convertType(name);
}

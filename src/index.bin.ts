import { program } from "commander";
import fs from "fs";
import { join } from "path";
import convertGraphQLSchemaToTS from "./convertGQLSchema";

program.version("1.0.0").description("Graphql api query class builder.");

program
  .command("build <gqlSchemaPath>")
  .description("Creates a new GQLAPI class")
  // dash syntax resolves to camel case --first-name=firstName
  .option(
    "-o --out-dir <string>",
    "Directory to place the new class and types in."
  )
  .action(async (path, { outDir }) => {
    if (outDir && !fs.existsSync(outDir)) fs.mkdirSync(outDir);
    const schema = fs.readFileSync(path, "utf-8");
    const tsFiles = convertGraphQLSchemaToTS(schema);
    for (let file in tsFiles) {
      const f = file as keyof typeof tsFiles;
      if (outDir) {
        fs.writeFileSync(join(outDir, `${f}.ts`), tsFiles[f]);
        fs.copyFileSync(
          join(__dirname, "./GQLAPI.template"),
          join(outDir, "GQLAPI.ts")
        );
      } else {
        fs.writeFileSync(`./${f}.ts`, tsFiles[f]);
        fs.copyFileSync(join(__dirname, "./GQLAPI.template"), "GQLAPI.ts");
      }
    }
    process.exit(0);
  });

program.parse(process.argv);

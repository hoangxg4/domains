import { domainTree } from "@domains/zones";
import { CodeOwners } from "@/core";
import { join } from "node:path";
import { argv } from "node:process";

const DATA_ROOT = "/packages/zones/data/";
const OUTPUT_FILE = argv[2] ?? "CODEOWNERS";

const codeOwners = new CodeOwners();

for (const [domain, mapping] of Object.entries(domainTree)) {
  for (const [name, zone] of Object.entries(mapping)) {
    codeOwners.addRule({
      pattern: join(DATA_ROOT, domain, `${name}.yaml`),
      owners: zone.owners,
    });
  }
}

codeOwners.writeFile(OUTPUT_FILE);

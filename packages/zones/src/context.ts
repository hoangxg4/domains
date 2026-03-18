import type { Zone, DomainTree, ApexZone } from "@/types";

export const context = import.meta.webpackContext("../data/", {
  regExp: /\.yaml$/,
  recursive: true,
});

function parsePath(path: string): [string, string] {
  const cleaned = path.replace(/^\.\/|\.yaml$/g, "");
  const parts = cleaned.split("/");
  if (parts.length !== 2) throw new Error(`Invalid path length: ${path}`);
  return parts as [string, string];
}

export const domainTree: DomainTree = context.keys().reduce((tree, path) => {
  const [zone, sub] = parsePath(path);
  const module = context(path) as { default: Zone | ApexZone };

  if (sub == "@") {
    tree[zone] = {
      ...module.default,
      children: {
        [sub]: module.default,
      },
    } as ApexZone;
  } else if (tree[zone] != null) {
    tree[zone].children[sub] = module.default;
  } else {
    throw new Error(`Apex is missing for ${sub}.${zone}`);
  }

  return tree;
}, {} as DomainTree);

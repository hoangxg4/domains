import type { Rule } from "@/types";

function firstLine(str: string): string {
  return str.split("\n")[0] ?? "";
}

export function formatRule(rule: Rule): string {
  return [rule.pattern, rule.owners.join(" ")].map(firstLine).join(" ");
}

export function formatRules(rules: Rule[]): string {
  return rules.map(formatRule).join("\n");
}

import type { Rule } from "@/types";
import { formatRules } from "@/utils";
import { writeFileSync } from "node:fs";

export class CodeOwners {
  private readonly rules: Rule[];

  public constructor(rules: Rule[] = []) {
    this.rules = rules;
  }

  public addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  public render(): string {
    return formatRules(this.rules);
  }

  public writeFile(file: string): void {
    return writeFileSync(file, this.render());
  }
}

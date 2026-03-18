import type { RecordMap } from "@/types/record.ts";

export type ZoneRecords = {
  [K in keyof RecordMap]?: RecordMap[K][];
};

export interface Zone {
  owners: string[];
  records: ZoneRecords;
}

export interface ApexZone extends Zone {
  provider: string;
  children: Record<string, Zone>;
}

export type DomainTree = Record<string, ApexZone>;

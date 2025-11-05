import "@domains/polyfill";

import { domainTree, recordToDomainModifier, RecordType } from "@domains/zones";

const dns = NewDnsProvider("dns");
const registrar = NewRegistrar("none");

for (const [domain, mapping] of Object.entries(domainTree)) {
  D(domain, registrar, DnsProvider(dns));

  for (const name of Object.keys(mapping)) {
    const zone = mapping[name]!;

    for (const recordType of Object.values(RecordType)) {
      const records = zone.records[recordType];
      if (records?.length) {
        D_EXTEND(
          name === "@" ? domain : `${name}.${domain}`,
          records.map((record) => recordToDomainModifier(recordType, record)),
        );
      }
    }
  }
}

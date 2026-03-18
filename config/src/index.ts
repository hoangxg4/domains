import "@domains/polyfill";

import { domainTree, recordToDomainModifier, RecordType } from "@domains/zones";

const registrar = NewRegistrar("none");

for (const [domain, apex] of Object.entries(domainTree)) {
  const provider = NewDnsProvider(apex.provider);

  D(domain, registrar, DnsProvider(provider), IGNORE_EXTERNAL_DNS());

  for (const [name, zone] of Object.entries(apex.children)) {
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

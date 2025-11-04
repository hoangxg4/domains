import { domainTree, recordToDomainModifier, RecordType } from "@domains/zones";

const dns = NewDnsProvider("dns");
const registrar = NewRegistrar("none");

Object.keys(domainTree).forEach((domain) => {
  D(domain, registrar, DnsProvider(dns));

  const mapping = domainTree[domain]!;
  Object.keys(mapping).forEach((name) => {
    const zone = mapping[name]!;

    Object.values(RecordType).forEach((recordType) => {
      const records = zone.records[recordType];
      if (records?.length) {
        D_EXTEND(
          name === "@" ? domain : `${name}.${domain}`,
          records.map((record) => recordToDomainModifier(recordType, record)),
        );
      }
    });
  });
});

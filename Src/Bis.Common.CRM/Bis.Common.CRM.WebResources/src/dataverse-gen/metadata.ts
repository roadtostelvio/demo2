/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { bis_addressMetadata } from "./entities/bis_address";
import { bis_addressbookMetadata } from "./entities/bis_addressbook";
import { bis_cityMetadata } from "./entities/bis_city";
import { bis_systemsettingsMetadata } from "./entities/bis_systemsettings";
import { bis_validationMetadata } from "./entities/bis_validation";
import { contactMetadata } from "./entities/Contact";

export const Entities = {
  Account: "account",
  bis_address: "bis_address",
  bis_addressbook: "bis_addressbook",
  bis_city: "bis_city",
  bis_systemsettings: "bis_systemsettings",
  bis_validation: "bis_validation",
  Contact: "contact",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    bis_address: bis_addressMetadata,
    bis_addressbook: bis_addressbookMetadata,
    bis_city: bis_cityMetadata,
    bis_systemsettings: bis_systemsettingsMetadata,
    bis_validation: bis_validationMetadata,
    contact: contactMetadata,
  },
  actions: {
  }
};
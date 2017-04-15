import { Address } from './address';
import { ContactPerson } from './contact-person';

export interface Contact {
    contact_id:string,
    contact_name?:string,
    company_name?:string,
    website?:string,
    has_transaction?:string,
    owner_id?:string,
    owner_name?:string,
    primary_contact_id?:string,
    currency_code?:string,
    status?:string,
    first_name?:string,
    last_name?:string,
    email?:string,
    phone?:string,
    mobile?:string,
    cf_tin?:string,
    cf_dln?:string,
    cf_did?:string,
    cf_gdid?:string,
    // billing_address?:Address,
    // contact_person?:ContactPerson[]
}
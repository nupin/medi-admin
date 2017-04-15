import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Contact } from './contact';
import { Address } from './address';
import { ContactPerson } from './contact-person';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {
    private contactList:string = 'https://books.zoho.com/api/v3/contacts?authtoken=3e1fe24bcaa7c3d1b19d402551565ab3';
    private contactDetails:string = 'https://books.zoho.com/api/v3/contacts';

    constructor(private http : Http){}

    getAll(): Observable<Contact[]>{
    let contacts$ = this.http
      .get(`${this.contactList}`, {headers: this.getHeaders()})
      .map(mapContacts)
      .catch(handleError);
      return contacts$;
  }

  get(id: number): Observable<Contact> {
    let contact$ = this.http
      .get(`${this.contactDetails}/${id}?authtoken=82cb92f77ad9c8a149f64e233add1e84`, {headers: this.getHeaders()})
      .map(mapContact);
      return contact$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapContacts(response:Response): Contact[]{
   return response.json().contacts.map(toContacts)
}

function mapContact(response:Response): Contact{
  return toContact(response.json().contact);
}

function toContacts(r:any): Contact{
  
  let contact = <Contact>({
    contact_id: r.contact_id,
    contact_name: r.contact_name,
    company_name: r.company_name,
    website: r.website,
    has_transaction: r.has_transaction,
    owner_id: r.owner_id,
    owner_name: r.owner_name,
    primary_contact_id: r.primary_contact_id,
    currency_code: r.currency_code,
    status: r.status,
    first_name: r.first_name,
    last_name: r.last_name,
    email: r.email,
    phone: r.phone,
    mobile: r.mobile,
    cf_tin: r.cf_tin,
    cf_dln: r.cf_dln,
    cf_did: r.cf_did,
    cf_gdid: r.cf_gdid
  });
  // console.log('Parsed item:', item);
  console.log(contact);
  return contact;
}


function toContact(r:any): Contact{
  
  let contact = <Contact>({
    contact_id: r.contact_id,
    contact_name: r.contact_name,
    company_name: r.company_name,
    website: r.website,
    has_transaction: r.has_transaction,
    owner_id: r.owner_id,
    owner_name: r.owner_name,
    primary_contact_id: r.primary_contact_id,
    currency_code: r.currency_code,
    status: r.status,
    first_name: r.first_name,
    last_name: r.last_name,
    email: r.email,
    phone: r.phone,
    mobile: r.mobile,
    cf_tin: r.cf_tin,
    cf_dln: r.cf_dln,
    cf_did: r.cf_did,
    cf_gdid: r.cf_gdid,
    billing_address:<Address>({
        address_id: r.billing_address.address_id,
      address: r.billing_address.address,
      city: r.billing_address.city,
      state: r.billing_address.state,
      zip: r.billing_address.zip,
      country: r.billing_address.country,
      phone: r.billing_address.phone
    }),
    contact_person:<ContactPerson[]>({

       
    })
    
    
  });
  // console.log('Parsed item:', item);
  console.log(contact);
  return contact;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Internal Error couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
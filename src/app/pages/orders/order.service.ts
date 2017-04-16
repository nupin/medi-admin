import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Order } from './order';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {
    private orderList:string = 'https://books.zoho.com/api/v3/salesorders?authtoken=3e1fe24bcaa7c3d1b19d402551565ab3';
    private orderDetails:string = 'https://books.zoho.com/api/v3/salesorders';

    constructor(private http : Http){}

    getAll(): Observable<Order[]>{
    let orders$ = this.http
      .get(`${this.orderList}`, {headers: this.getHeaders()})
      .map(mapOrders)
      .catch(handleError);
      return orders$;
  }

  get(id: number): Observable<Order> {
    let order$ = this.http
      .get(`${this.orderDetails}/${id}?authtoken=82cb92f77ad9c8a149f64e233add1e84`, {headers: this.getHeaders()})
      .map(mapOrder);
      return order$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapOrders(response:Response): Order[]{
   return response.json().salesorders.map(toOrders)
}

function mapOrder(response:Response): Order{
  return toOrder(response.json().salesorder);
}

function toOrders(r:any): Order{
  
  let order = <Order>({

    salesorder_id: r.salesorder_id,
    customer_name: r.customer_name,
    status: r.status,
    salesorder_number: r.salesorder_number,
    date: r.date,
    total: r.total,
    cf_scheme: r.cf_scheme,
    cf_total_mrp: r.cf_total_mrp
  });
  // console.log('Parsed item:', item);
  console.log(order);
  return order;
}


function toOrder(r:any): Order{
  
  let order = <Order>({
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
    // billing_address:<Address>({
    //     address_id: r.billing_address.address_id,
    //   address: r.billing_address.address,
    //   city: r.billing_address.city,
    //   state: r.billing_address.state,
    //   zip: r.billing_address.zip,
    //   country: r.billing_address.country,
    //   phone: r.billing_address.phone
    // }),
    // contact_person:<ContactPerson[]>({

       
    // })
    
    
  });
  // console.log('Parsed item:', item);
  console.log(order);
  return order;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Internal Error couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
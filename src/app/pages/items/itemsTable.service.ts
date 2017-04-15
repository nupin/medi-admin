import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Item } from './item';
import { ItemCustom } from './item-custom';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsTableService {

  private itemList:string = 'https://books.zoho.com/api/v3/items?authtoken=82cb92f77ad9c8a149f64e233add1e84';
  private itemDetails:string = 'https://books.zoho.com/api/v3/items';
    
  constructor(private http : Http){
  }

  getAll(): Observable<Item[]>{
    let items$ = this.http
      .get(`${this.itemList}`, {headers: this.getHeaders()})
      .map(mapItems)
      .catch(handleError);
      return items$;
  }

  get(id: number): Observable<Item> {
    let item$ = this.http
      .get(`${this.itemDetails}/${id}?authtoken=82cb92f77ad9c8a149f64e233add1e84`, {headers: this.getHeaders()})
      .map(mapItem);
      return item$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

}

function mapItems(response:Response): Item[]{
   return response.json().items.map(toItems)
}

function mapItem(response:Response): Item{
  return toItem(response.json());
}

function toItem(r:any): Item{
  
  let item = <Item>({
    item_id: r.item.item_id,
    name: r.item.name,
    description: r.item.description,
    sku: r.item.sku,
    cf_form: r.item.cf_form,
    cf_pack: r.item.cf_pack,
    cf_composition: r.item.cf_composition,
    cf_mrp: r.item.cf_mrp,
    custom_fields: <ItemCustom>({
      cf_form:            r.item.custom_field_hash.cf_form,
      cf_pack:            r.item.custom_field_hash.cf_pack,
      cf_pack_description:r.item.custom_field_hash.cf_pack_description,
      cf_category:        r.item.custom_field_hash.cf_category,
      cf_composition:     r.item.custom_field_hash.cf_composition,
      cf_scheme:          r.item.custom_field_hash.cf_scheme,
      cf_mrp:             r.item.custom_field_hash.cf_mrp,
      cf_scheme_description:r.item.custom_field_hash.cf_scheme_description,
      cf_scheme_quantity:   r.item.custom_field_hash.cf_scheme_quantity,
      cf_scheme_value:      r.item.custom_field_hash.cf_scheme_value,
      cf_scheme_expiry:     r.item.custom_field_hash.cf_scheme_expiry
    })
    
  });
  // console.log('Parsed item:', item);
  console.log(item);
  return item;
}


function toItems(r:any): Item{
  let item = <Item>({
    item_id: r.item_id,
    name: r.name,
    description: r.description,
    sku: r.sku,
    cf_form: r.cf_form,
    cf_pack: r.cf_pack,
    cf_composition: r.cf_composition,
    cf_mrp: r.cf_mrp,
  });
  // console.log('Parsed item:', item);
  console.log(item);
  return item;
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Internal Error couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
import { ItemCustom } from './item-custom';
export interface Item {
      item_id:string,
      name:string,
      item_name:string,
      sku:string,
      image_name?:string,
      status?:string,
      description?:string,
      rate?:string,
      cf_form?:string,
      cf_pack?:string,
      cf_pack_description?:string,
      cf_category?:string,
      cf_composition?:string,
      cf_scheme?:string,
      cf_mrp?:string
      cf_scheme_description?:string,
      cf_scheme_quantity?:string,
      cf_scheme_value?:string,
      cf_scheme_expiry?:string,
      custom_fields?: ItemCustom
}
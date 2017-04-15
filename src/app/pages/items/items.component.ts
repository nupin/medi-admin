import {Component, OnInit} from '@angular/core';
import {ItemsTableService} from './itemsTable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from './item';

@Component({
    selector: 'items',
    templateUrl: './itemsTable.html',
    providers: [ItemsTableService]
})
export class ItemsComponent implements OnInit {

    items:Item[] = [];
    selectedItem: Item;
    sub: any;

    constructor(private itemsTableService:ItemsTableService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(){
        this.itemsTableService.getAll().subscribe(i => this.items = i);
    }

    selectItem(item: Item){
        this.selectedItem = item;
        
        // for (var i = 0; i < this.router.config.length; i++) {
        // var routePath:string = this.router.config[i].loadChildren.path;
        // console.log(routePath);
    // }

        let link = [item.item_id];
        console.log(link); 
        // console.log(this.route.);
        this.router.navigate(link);
        // this.router.navigateByUrl(`/items/${item.item_id}`)
    
  }
}
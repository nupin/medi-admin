import {Component, OnInit, OnDestroy} from '@angular/core';
import {ItemsTableService} from './itemsTable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from './item';

@Component({
    selector: 'item',
    templateUrl: './item-detail.html',
    providers: [ItemsTableService]
})
export class ItemDetailComponent implements OnInit{
    // , OnDestroy {

    item: Item;
    sub: any;
    
    constructor(private itemsTableService:ItemsTableService,
            private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
        this.route.params.subscribe(params => {
          let item_id = (params['id']);
          console.log('=>'+item_id);
          this.itemsTableService.get(item_id).subscribe(i => this.item = i);
        });
    }

    // ngOnDestroy(){
    //     this.sub.unsubscribe();
    // }

    gotoItemsList(){
        let link = ['/items'];
        this.router.navigate(link);
    }
}

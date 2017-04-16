import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from './order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from './order';

@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.html',
    providers: [OrderService]
})
export class OrderDetailComponent implements OnInit{
    // , OnDestroy {

    order: Order;
    sub: any;
    
    constructor(private orderService: OrderService,
            private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
        this.route.params.subscribe(params => {
          let sales_order_id = (params['id']);
          console.log('=>'+sales_order_id);
          this.orderService.get(sales_order_id).subscribe(i => this.order = i);
        });
    }

    // ngOnDestroy(){
    //     this.sub.unsubscribe();
    // }

    gotoOrderList(){
        let link = ['/orders'];
        this.router.navigate(link);
    }
}

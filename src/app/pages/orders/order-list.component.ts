import {Component, OnInit} from '@angular/core';
import {OrderService} from './order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from './order';

@Component({
    selector: 'orders',
    templateUrl: './order-list.html',
    providers: [OrderService]
})
export class OrderListComponent implements OnInit {

    orders:Order[] = [];
    selectedOrder: Order;
    sub: any;

    constructor(private orderService:OrderService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(){
        this.orderService.getAll().subscribe(c => this.orders = c);
    }

    selectOrder(order: Order){
        this.selectedOrder = order;
        let link = [order.salesorder_id];
        console.log(link); 
        this.router.navigate(link);
    
  }
}
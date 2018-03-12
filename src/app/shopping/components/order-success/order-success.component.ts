import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    let productKey = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(productKey).subscribe(order => {
      this.order = order;
    });
   }

  ngOnInit() {
  }

}

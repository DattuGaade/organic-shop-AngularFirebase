import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$: any;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.order$ = this.authService.user$.switchMap(user => this.orderService.getOrdersByUser(user.uid));
  }

}

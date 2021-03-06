import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:  Observable<ShoppingCart>;

  constructor(
    private cartService:ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
  
  clearCart(){
    this.cartService.clearCart();
  }
}

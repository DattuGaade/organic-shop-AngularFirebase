import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class ShoppingCart {
    dateCreate: Date;
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {

            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({...item, $key: productId}));
            // {title:item.title,imageUrl: item.imageUrl, price: item.price} === {...item}
        }
    }

    get totalPrice(){
        let sum = 0;
        for(let item of this.items)
            sum += item.totalPrice;
        return sum;
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return (item) ? item.quantity : 0;
      }

    get totalItemsCount() {
        let count = 0;
        for (let item of this.items) {
            count += item.quantity;
        }
        return count;
    }
}
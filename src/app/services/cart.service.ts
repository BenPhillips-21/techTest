import { Injectable } from '@angular/core';
import { Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = []
  constructor() { }

  addToCart(product: Product) {
    let item = this.items.find((i) => i.sku === product.sku)
    if (item && item.quantity) {
      item.quantity++
    } else {
      this.items.push({...product, quantity: 1});
    }
  }

  getItems() {
    return this.items;
  }

  delete(item: Product) {
    this.items = this.items.filter((i) => i.sku !== item.sku)
  }

  plusQuantity(sku: string) {
    let item = this.items.find((i) => i.sku === sku)
      if (item && item.quantity) {
        item.quantity++
      }
  }

  minusQuantity(sku: string) {
    let item = this.items.find((i) => i.sku === sku)
      if (item && item.quantity &&  item.quantity > 1) {
        item.quantity--
      }
  }

  getTotal() {
    const total = this.items.reduce((acc, item) => {
      if (item.quantity) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);
  
    return total === 0 ? "Your cart is empty" : total;
  }  
}

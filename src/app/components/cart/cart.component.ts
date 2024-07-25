import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService)

  deleteFromCart(item: Product) {
    this.cartService.delete(item)
  }

  plusQuantity(itemSKU: string) {
    this.cartService.plusQuantity(itemSKU)
  }

  minusQuantity(itemSKU: string) {
    this.cartService.minusQuantity(itemSKU)
  }
}

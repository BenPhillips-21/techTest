import { Component, inject, Input } from '@angular/core';
import { Product } from '../../types';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  cartService = inject(CartService)
  @Input() product!: Product;

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}

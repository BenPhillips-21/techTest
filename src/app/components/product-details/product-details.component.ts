import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';
import { MOCK_DATA } from '../../../assets/MOCK_DATA';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = MOCK_DATA;
  product: Product | undefined;

  cartService = inject(CartService)

  addToCart(product: Product | undefined) {
    if (product) {
      this.cartService.addToCart(product)
    }  
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const productSKU = this.activatedRoute.snapshot.params['productSKU'];
    if (productSKU) {
      this.product = this.products.find(p => p.sku === productSKU);
    }
  }
}


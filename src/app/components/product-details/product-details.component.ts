import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types';
import { MOCK_DATA } from '../../../assets/MOCK_DATA';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'] // Correct plural naming
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = MOCK_DATA;
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const productSKU = this.activatedRoute.snapshot.params['productSKU'];
    if (productSKU) {
      this.product = this.products.find(p => p.sku === productSKU);
    }
  }
}


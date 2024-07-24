import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../types';
import { MOCK_DATA } from '../../assets/MOCK_DATA';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent implements OnInit {
  products: Product[] = MOCK_DATA;

  constructor() {}
  ngOnInit(): void {
    console.log(this.products)
  }
}

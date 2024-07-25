import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '../../types';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const sampleProduct: Product = {
    sku: '123456',
    name: 'Test Product',
    quantity: 1,
    price: 100,
    rrp: 150,
    image: 'http://example.com/image.jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, ProductComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = sampleProduct;
    fixture.detectChanges(); 
  });

  it('should display the product details correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.title')?.textContent).toContain(sampleProduct.name);

    expect(compiled.querySelector('.price')?.textContent).toContain(`$${sampleProduct.price}`);

    expect(compiled.querySelector('.rrp')?.textContent).toContain(`$${sampleProduct.rrp - sampleProduct.price} off RRP of $${sampleProduct.rrp}`);

    expect(compiled.querySelector('img')?.getAttribute('src')).toBe(sampleProduct.image);
  });
});


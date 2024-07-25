import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListingComponent } from './product-listing.component';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { MOCK_DATA } from '../../assets/MOCK_DATA';
import { ActivatedRoute } from '@angular/router';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ProductComponent, ProductListingComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should correctly retrieve MOCK_DATA', () => {
    expect(component.products).toEqual(MOCK_DATA);
  });
});

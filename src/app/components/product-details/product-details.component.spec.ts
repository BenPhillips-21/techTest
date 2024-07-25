import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MOCK_DATA } from '../../../assets/MOCK_DATA';

class MockCartService {
  addToCart = jasmine.createSpy('addToCart');
}

class MockActivatedRoute {
  snapshot = { params: { productSKU: '123' } };
}

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let cartService: CartService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        { provide: CartService, useClass: MockCartService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addToCart on CartService when addToCart is called', () => {
    const product = MOCK_DATA[0];
    component.addToCart(product);
    expect(cartService.addToCart).toHaveBeenCalledWith(product);
  });

  it('should not call addToCart on CartService if product is undefined', () => {
    component.addToCart(undefined);
    expect(cartService.addToCart).not.toHaveBeenCalled();
  });
});

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types';

class MockCartService {
  delete = jasmine.createSpy('delete');
  plusQuantity = jasmine.createSpy('plusQuantity');
  minusQuantity = jasmine.createSpy('minusQuantity');
}

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        { provide: CartService, useClass: MockCartService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteFromCart on CartService.delete', () => {
    const item: Product = { sku: '123', name: 'Test Product', rrp: 200, price: 100, quantity: 1, image: '' };
    component.deleteFromCart(item);
    expect(cartService.delete).toHaveBeenCalledWith(item);
  });

  it('should call plusQuantity on CartService.plusQuantity', () => {
    const itemSKU = '123';
    component.plusQuantity(itemSKU);
    expect(cartService.plusQuantity).toHaveBeenCalledWith(itemSKU);
  });

  it('should call minusQuantity on CartService.minusQuantity', () => {
    const itemSKU = '123';
    component.minusQuantity(itemSKU);
    expect(cartService.minusQuantity).toHaveBeenCalledWith(itemSKU);
  });
});

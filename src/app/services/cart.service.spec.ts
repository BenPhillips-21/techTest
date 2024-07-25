import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../types';

class MockCartService {
  private items: Product[] = [];

  getTotal() {
    const total = this.items.reduce((acc, item) => {
      if (item.quantity) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);

    return total === 0 ? "Your cart is empty" : total;
  }

  setItems(items: Product[]) {
    this.items = items;
  }
}

describe('CartService', () => {
  let service: MockCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CartService, useClass: MockCartService }
      ]
    });
    service = TestBed.inject(CartService) as unknown as MockCartService;
  });

  it('correctly calculates the total price of items in the cart', () => {
    const items = [
      { "sku": "671695659-X", "name": "Veal Inside - Provimi", "quantity": 2, "price": 166, "rrp": 223, "image": "http://dummyimage.com/300x300.png/ff4444/ffffff" },
      { "sku": "740799661-X", "name": "Milk - Condensed", "quantity": 2, "price": 165, "rrp": 220, "image": "http://dummyimage.com/300x300.png/cc0000/ffffff" },
      { "sku": "296764728-4", "name": "Juice - Ocean Spray Kiwi", "quantity": 2, "price": 131, "rrp": 222, "image": "http://dummyimage.com/300x300.png/dddddd/000000" }
    ];

    service.setItems(items);

    const expectedTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    expect(service.getTotal()).toBe(expectedTotal);
  });

  it('returns "Your cart is empty" if there are no items in the cart', () => {
    service.setItems([]); 

    expect(service.getTotal()).toBe("Your cart is empty");
  });
});

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'productlist',
        component: ProductListingComponent
    },
    { 
        path: 'product/:productSKU',
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];

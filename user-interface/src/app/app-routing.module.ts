import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/Home/Components/home/home.component';
import { ProductComponent } from './Modules/Product/Components/product/product.component';
import { ProductDetailsComponent } from './Modules/Product-Details/Components/product-details/product-details.component';
import { ShoppingCartComponent } from './Modules/Shopping-Cart/Components/shopping-cart/shopping-cart.component';
import { BlogComponent } from './Modules/Blog/Components/blog/blog.component';
import { BlogDetailsComponent } from './Modules/Blog-Details/Components/blog-details/blog-details.component';
import { ContactComponent } from './Modules/Contact/Components/contact/contact.component';
import { LoginComponent } from './Modules/Login/Components/login/login.component';
import { RegisterComponent } from './Modules/Register/Components/register/register.component';
import { CheckOutComponent } from './Modules/Check-Out/Components/check-out/check-out.component';
import { AboutComponent } from './Modules/About/Components/about/about.component';
import { FarouritComponent } from './Modules/Favourite/Components/farourit/farourit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',component: HomeComponent},
  {path: 'product', pathMatch: 'full',component: ProductComponent},
  {path: 'product-details', pathMatch: 'full',component: ProductDetailsComponent},
  {path: 'shopping-cart', pathMatch: 'full',component: ShoppingCartComponent},
  {path: 'blog', pathMatch: 'full',component: BlogComponent},
  {path: 'blog-details', pathMatch: 'full',component: BlogDetailsComponent},
  {path: 'contact', pathMatch: 'full',component: ContactComponent},
  {path: 'login', pathMatch: 'full',component: LoginComponent},
  {path: 'register', pathMatch: 'full',component: RegisterComponent},
  {path: 'check-out', pathMatch: 'full',component: CheckOutComponent},
  {path: 'about', pathMatch: 'full',component: AboutComponent},
  {path: 'farourit', pathMatch: 'full', component: FarouritComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

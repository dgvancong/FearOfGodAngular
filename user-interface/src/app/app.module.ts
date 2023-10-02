import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/Home/Components/home/home.component';
import { HomeImportComponent } from './Modules/Home/Components/home-import/home-import.component';
import { ContactComponent } from './Modules/Contact/Components/contact/contact.component';
import { HeaderComponent } from './Layout/Components/header/header.component';
import { FooterComponent } from './Layout/Components/footer/footer.component';
import { ProductComponent } from './Modules/Product/Components/product/product.component';
import { ProductDetailsImportComponent } from './Modules/Product-Details/Components/product-details-import/product-details-import.component';
import { LoginComponent } from './Modules/Login/Components/login/login.component';
import { ProductDetailsComponent } from './Modules/Product-Details/Components/product-details/product-details.component';
import { RegisterComponent } from './Modules/Register/Components/register/register.component';
import { ShoppingCartComponent } from './Modules/Shopping-Cart/Components/shopping-cart/shopping-cart.component';
import { AboutComponent } from './Modules/About/Components/about/about.component';
import { BlogComponent } from './Modules/Blog/Components/blog/blog.component';
import { BlogDetailsComponent } from './Modules/Blog-Details/Components/blog-details/blog-details.component';
import { CheckOutComponent } from './Modules/Check-Out/Components/check-out/check-out.component';
import { HomeSildeComponent } from './Modules/Home/Components/home-silde/home-silde.component';
import {ProductsImportComponent} from'./Modules/Product/Components/product-import/product-import.component';
import { FarouritComponent } from './Modules/Favourite/Components/farourit/farourit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeImportComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsImportComponent,
    LoginComponent,
    ProductDetailsComponent,
    RegisterComponent,
    ShoppingCartComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    CheckOutComponent,
    HomeSildeComponent,
    ProductsImportComponent,
    FarouritComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
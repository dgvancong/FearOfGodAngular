import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-products-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.scss']
})
export class ProductsImportComponent implements OnInit {

  product: any = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.productService.getAllItems().subscribe((data: any) => {
      this.product = data;
    });
  }
}

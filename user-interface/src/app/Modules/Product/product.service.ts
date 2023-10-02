import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  contextPath = 'api/SanPham';

  getAllItems() {
    return this.http.get(this.baseUrl + this.contextPath + '/DVC_GetAllSanPham');
  }
}

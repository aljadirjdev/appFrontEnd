import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const base_url = environment.baseURL;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private HttpClient: HttpClient) {}
  // Get all products
  getAllProducts() {
    return this.HttpClient.get(`${base_url}/products`);
  }
}

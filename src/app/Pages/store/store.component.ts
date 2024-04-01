import { Component, OnInit } from '@angular/core';
import ProductInterface from '../../Core/Interfaces/Products/ProductInterface';
import { ProductService } from '../../Services/product.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  productsData: ProductInterface[] = [];
  constructor(public productServices: ProductService) {}
  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe((data: any) => {
      this.productsData = data.products;
      console.log(this.productsData);
    });
  }
}

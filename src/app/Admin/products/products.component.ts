import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import ProductInterface from '../../Core/Interfaces/Products/ProductInterface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsData: ProductInterface[] = [];
  constructor(public productsService: ProductService) {}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.productsData = data.products;
      console.log(this.productsData);
    });
  }
}

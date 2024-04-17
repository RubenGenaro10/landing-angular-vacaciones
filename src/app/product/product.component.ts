import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
//import { productsList } from './products.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsList : IProduct[] = [];

  constructor(private _apiService: ApiService) { 
  }

  ngOnInit(): void {
    this._apiService.getProducts('asc').subscribe(
      (data:IProduct[]) => {
        console.log(data);
        this.productsList = data;
      }
    );
  }

}

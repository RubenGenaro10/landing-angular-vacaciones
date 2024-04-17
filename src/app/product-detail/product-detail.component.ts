import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
//import { products,productsList } from '../product/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?:IProduct
  productList:IProduct[] = []

  color:string='';
  loading:boolean=true;

  constructor(private _route:ActivatedRoute, private _apiService: ApiService){

  }

  ngOnInit(){
    this._route.params.subscribe(
      {
        next:(params)=>{
          this._apiService.getProduct(params['productId']).subscribe({
            next:(data:IProduct)=>{
              this.product=data;
              this.loading=false;
              this.color=this.product?.price as number < 100 ? 'red' : 'green';
            },
            error:(error)=>{
              console.log(error);
            }
          });
          }
      }
      );   
    };

  }


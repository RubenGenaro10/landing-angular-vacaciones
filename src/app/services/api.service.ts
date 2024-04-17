import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://fakestoreapi.com/products';
  constructor(private _httpClient:HttpClient) { }


  public getProducts(sort:string): Observable<IProduct[]>{
    const params= sort ? `?sort=${sort}` : '';
    return this._httpClient.get<IProduct[]>(`${this.url}${params}`);
  }

  public getProduct(id: number | string): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.url}/${id}`);
  }

  public getCategories(): Observable<string[]>{
    return this._httpClient.get<string[]>(`${this.url}/categories`);
  }

  public getProductsByCategory(category: string): Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(`${this.url}/category/${category}`);
  }

  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(this.url, product);
  }

  public updateProduct(id: number | string, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.url}/${id}`, product);
  }

  public deleteProduct(id: number | string): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.url}/${id}`);
  }
}

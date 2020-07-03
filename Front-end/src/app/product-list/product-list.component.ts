import { Component, OnInit, Input, Injectable } from "@angular/core";
import {Jsonp} from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import {Cart_Item} from '../cart/model';
import { isNgTemplate } from '@angular/compiler';
import {Product} from './model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
@Injectable()
export class ProductListComponent implements OnInit {

  products: Product[];
  private urlAPI = "http://localhost:8080/RESTful-API-using-Spring-Boot/api/v1/product/list";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get(this.urlAPI).subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  
  }
  addToCart = (product: Product) => {
    let carts = [];
    let item: Cart_Item;
    let updated: boolean = false;
    item = {
      product_id: product.id,
      name: product.name,
      unit_price: product.price,
      quantity: 1,
      price: product.price
    }
    if (sessionStorage.getItem("Cart") == null)
    {
      carts.push(item);      
    }
    else
    {
      carts = JSON.parse(sessionStorage.getItem("Cart"));
      carts.forEach(element => {
        if (element.product_id == product.id)
        {
          element.quantity = parseInt(element.quantity) + item.quantity;
          element.price = parseInt(element.unit_price) * parseInt(element.quantity);
          updated = true;
        }
      });
      if (!updated) carts.push(item);
    }
    sessionStorage.setItem('Cart', JSON.stringify(carts));
  }
}
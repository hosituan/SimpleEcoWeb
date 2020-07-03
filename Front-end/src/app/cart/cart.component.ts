import { Component, OnInit } from '@angular/core';
import {Cart_Item} from './model'
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private location: Location) { }
  carts = [];
  total = 0;
  ngOnInit(): void {
    this.carts = JSON.parse(sessionStorage.getItem("Cart"));
    if (this.carts != null) this.carts.forEach(element => {
      this.total += parseInt(element.price);
    });
  }
  removeItem = (productId: Int32Array) => {
    let item = Cart_Item;
    this.carts.forEach(element => {
      if (element.product_id == productId)
      {
        let index: number = this.carts.indexOf(element)
        this.carts.splice(index, 1);     
        this.total -= parseInt(element.price);
      }
      sessionStorage.setItem('Cart', JSON.stringify(this.carts));
    });
  }
  back = () =>
  {
    this.location.back();
  }
  clearCart = () => {
    sessionStorage.removeItem("Cart");
    this.carts = [];
    this.total = 0;
  }
}

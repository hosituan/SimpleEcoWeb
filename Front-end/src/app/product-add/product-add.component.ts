import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  name = '';
  data =   { 
     "name": null,
    "price": null,
    "des": null,
    "detail": null,
    "image": null,
    "instock": null,
    "manufactor": null,
    "code": null,
    "category": null }

  
  playerName: string;
  constructor(private httpClient: HttpClient) { }
    
  private urlAPI = "http://localhost:8080/RESTful-API-using-Spring-Boot/api/v1/product/add/";


  onSubmit(event: any) {
    console.log(event.target.name.value);
  } 
  add(event: any){
      this.data.name = event.target.name.value;
      this.data.price = event.target.price.value;
      this.data.price = event.target.price.value;
      this.data.des = event.target.des.value;
      this.data.detail = event.target.detail.value;
      this.data.instock = event.target.instock.value;
      this.data.manufactor = event.target.manufactor.value;
      this.data.code = event.target.code.value;
      this.data.category = event.target.category.value;
      //this.data.image = event.target.image.value;
      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      console.log(headers);
      return this.httpClient.post(this.urlAPI, this.data, {headers: headers})
      .subscribe(
          res =>{
              console.log(res);
          },
          err => {
              console.log(err.message);
          }
      )
  }
  ngOnInit(): void {
  }
}

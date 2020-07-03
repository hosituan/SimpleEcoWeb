import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product;
  id;

  private urlAPI = "http://localhost:8080/RESTful-API-using-Spring-Boot/api/v1/product/get/";
  constructor(private httpClient: HttpClient, private router: Router) { }


  ngOnInit() {
    var splitted = this.router.url.split("/", 4);
    console.log(splitted[3]);
    const productUrl = this.urlAPI + splitted[3]
    console.log(productUrl);
    this.httpClient.get(productUrl).subscribe((data: any[])=>{
      console.log(data);
      this.product = data;
    })  
  }

}

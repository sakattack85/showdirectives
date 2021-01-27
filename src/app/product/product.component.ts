import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
myproducts:Product[]=[];

  constructor() {
let pr1=new Product("tomato", "Very nice tomatos", "assets/tomato.jpeg")
let pr2=new Product("tomato1", "Very nice tomatos 2", "assets/tomato.jpeg")
let pr3=new Product("tomato2", "Very nice tomatos 3", "assets/tomato.jpeg")
this.myproducts.push(pr1,pr2,pr3)
   }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { ICategory } from '../shared/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedCatID:number=0;
  cartCount = 0
  userName = "heba"
  Categories:Array<ICategory> =[
    {
      id: 0,
      name: "All",
      desciption: "This is description"
    },
    {
      id: 1,
      name: "Laptops",
      desciption: "This is description"
    },
    {
      id: 2,
      name: "Tablets",
      desciption: "This is description"
    },
    {
      id: 3,
      name: "Mobiles",
      desciption: "This is description"
    },
    {
      id: 4,
      name: "Accessories",
      desciption: "This is description"
    }
  ]
  getUpdatedCount(c:number){
    this.cartCount = c
  }
}


import { Injectable } from '@angular/core';
import { IProduct } from '../shared/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cartItem[]=[]
  constructor() { }
  count():number{
    return this.cart.length
  }
  addToCart(product:IProduct){
    this.cart.push({product:product,qty:1})
  }
  getAll():cartItem[]{
    return this.cart
  }
  //remove
  //update
  //get total

}
interface cartItem{
  product:IProduct;
  qty:number 
}

import { Injectable } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ICartItem } from '../shared/ICartItem';
import { BehaviorSubject ,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:ICartItem[]=[]

  constructor() { 
    this.cart =this.getcartfromStorage()
  }
  getcartfromStorage():ICartItem[]{
    let list= JSON.parse(localStorage.getItem('cart')??"[]") as ICartItem[]
    return list;
  }
  setcartinStorage(){
    localStorage.setItem('cart',JSON.stringify( this.cart))
  }
  count():number{
    return this.cart.length
  }
  addToCart(product:IProduct){
    console.log(`add ${product}`)

    if(this.cart.find(item=>item.product.id==product.id)==undefined){
      this.cart.push({product:product,qty:1})
      this.setcartinStorage();
    }
  }
  getAll():ICartItem[]{
    return this.cart
  }
  deleteFromCart(prdid :number):void{
    console.log(`delete ${prdid}`)
    this.cart =  this.cart.filter(item=>item.product.id!=prdid)
    this.setcartinStorage();
  }
  updateCart(prdid :number,qty:number):void{
    console.log(`update ${prdid}, ${qty}`)

    this.cart.forEach(item=>{
      if(item.product.id ==prdid){
        item.qty = qty
      }
    })
    this.setcartinStorage();
  }
  getCartTotal():number{
    let total = 0
    this.cart.forEach(item=>{
       total+=  item.qty * item.product.price
    })
    return total;
  }
}


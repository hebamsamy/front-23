import { Component } from '@angular/core';
import { ICartItem } from '../shared/ICartItem';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
currentCart:ICartItem[]=[]
constructor(private cartSrv:CartService){
 this.currentCart = this.cartSrv.getAll()
  
}
remove(id:number){
this.cartSrv.deleteFromCart(id)
}
increse(id:number,qty:number,originalQty:number){
  if(qty > originalQty){
    alert(`the available quantity of this product is ${originalQty} \n Can't add more !!!!`);
  }
  else{
    this.cartSrv.updateCart(id,++qty)
  }
}
decrese(id:number,qty:number){
  if(qty==1){
    if( confirm("you want to remove this item?")){
      this.cartSrv.deleteFromCart(id);
    }
  }
  else{
    this.cartSrv.updateCart(id,--qty)
  }
}
}

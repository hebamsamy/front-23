import { Component } from '@angular/core';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
cartCount =0
constructor(private cartsrv:CartService){
  //depend on serv
 this.cartCount= this.cartsrv.getAll().length
}
}

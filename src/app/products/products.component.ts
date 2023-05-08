import { Component, Input, OnInit, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../Services/product-service.service';
import { CartService } from '../Services/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() recivedCatID: number = 0
  @Output() handler: EventEmitter<number>
  count=0
  constructor(public prdSrv :ProductService,private cartsrv:CartService){
    this.handler = new EventEmitter<number>()
   
    //depand on serv
  }
 
  filteredList: Array<IProduct> = []
  // on init
  // on change
  // on destroy
  // on veiw init
  ngOnInit() {
    console.log("on init")
    this.filteredList = this.prdSrv.getAll()
  }
  ngOnChanges() {
    console.log("on Changes")
    this.filterbyCatID(this.recivedCatID)
  }
  ngOnDestroy() {
    console.log("on Destroy")
  }
  filterbyCatID(id: number) {
    this.filteredList = this.prdSrv.getByCategoryID(id)
  }
  add(prd:IProduct){
    // this.count  ++
    this.cartsrv.addToCart(prd)
    this.handler.emit(this.count)
    console.log("on Product component"+this.cartsrv.getAll())
    //send updated value
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Demo } from './demo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { USDTOEGPPipe } from './pipes/usdtoegp.pipe';
import { StringLengthPipe } from './pipes/string-length.pipe';
import { ProductService } from './Services/product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    Demo,
    TodoCardComponent,
    ProductsComponent,
    HomeComponent,
  USDTOEGPPipe,
  StringLengthPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

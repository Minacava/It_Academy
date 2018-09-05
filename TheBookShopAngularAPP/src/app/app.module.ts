import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { ContactComponent } from './contact/contact.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToBuyComponent,
    ContactComponent,
    ShopingCartComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

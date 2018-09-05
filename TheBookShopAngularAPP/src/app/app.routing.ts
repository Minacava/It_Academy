import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { HomeComponent } from './home/home.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { ContactComponent } from './contact/contact.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'Home/:nombre', component: HomeComponent},
    {path: 'ToBuy', component: ToBuyComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'ShopingCart', component: ShopingCartComponent},
    {path: '**', component: HomeComponent}
    // Siempre última ruta 404

]
// Exportar modulo del router

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
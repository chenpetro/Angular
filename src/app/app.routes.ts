// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MainLayout } from './shared/main-layout/main-layout';
// import { ProductPage } from './product-page/product-page';
// import { CartPage } from './cart-page/cart-page';

// export const routes: Routes = [
//    {
//     path: '', component: MainLayout, children: [
//        {path: '', redirectTo: '/', pathMatch: 'full'},
//        {path: '', component: MainLayout},
//        {path: 'product/:id', component: ProductPage},
//        {path: 'cart', component: CartPage},

//     ]
//    } 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { MainLayout } from './shared/main-layout/main-layout.component';
import { ProductPage } from './product-page/product-page.component';
import { CartPage } from './cart-page/cart-page.component';
import { MainPage } from './main-page/main-page.component';

export const routes: Routes = [
  {
    path: '', // root path
    component: MainLayout,
    children: [
      // { path: '', redirectTo: '/', pathMatch: 'full'},
      // { path: '', component: MainLayout }, // optional: you may remove this if MainLayout has router-outlet
      { path: '', component: MainPage },
      { path: 'product/:id', component: ProductPage },
      { path: 'cart', component: CartPage },
    ],
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) // lazy load admin module
  }
];

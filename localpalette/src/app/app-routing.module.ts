import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {InfocardsComponent} from "./components/infocards/infocards.component";
import {KategoriComponent} from "./pages/kategori/kategori.component";


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'gallery',
    component: InfocardsComponent
  },
  {
    path:'kategorier',
    component: KategoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

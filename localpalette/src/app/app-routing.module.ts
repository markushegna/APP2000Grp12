import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {InfocardsComponent} from "./components/infocards/infocards.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'infocards',
    component: InfocardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

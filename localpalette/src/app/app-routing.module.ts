import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {InfocardsComponent} from "./components/infocards/infocards.component";
import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
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
    path:'restaurantView',
    component: RestaurantViewComponent
  },
  {
    path:'kategori',
    component: KategoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}), FormsModule, RatingModule, MatCardModule, MatIconModule],
  declarations: [
    RestaurantViewComponent
  ],
  exports: [RouterModule, RestaurantViewComponent]
})
export class AppRoutingModule { }

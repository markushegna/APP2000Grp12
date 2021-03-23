import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./module/material/material.module";

import { KategoriComponent } from './pages/kategori/kategori.component';
import {FormsModule} from "@angular/forms";


import { AngularFireModule } from '@angular/fire';
import {environment} from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./pages/home/home.component";
import {InfocardsComponent} from "./components/infocards/infocards.component";
import { RestauranterComponent } from './pages/kategori/restauranter/restauranter.component';
import { RegistreringComponent } from './pages/kategori/registrering/registrering.component';


import { UserAuthComponent } from './components/user-auth/user-auth.component';
import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {RatingModule} from "primeng/rating";


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomeComponent,
    InfocardsComponent,
    KategoriComponent,
    RestauranterComponent,
    RegistreringComponent,
    RestaurantViewComponent,



  NavbarComponent,
  HomeComponent,
  UserAuthComponent
  //InfocardsComponent,
  //KategoriComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,

    MaterialModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    RatingModule,


    // AngularFireModule.initializeApp(environment),
    //AngularFirestoreModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

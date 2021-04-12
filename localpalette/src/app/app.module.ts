import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./module/material/material.module";

import { KategoriComponent } from './pages/kategori/kategori.component';


import { AngularFireModule } from '@angular/fire';
import {environment} from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {InfocardsComponent} from "./components/infocards/infocards.component";
import { RestauranterComponent } from './pages/kategori/restauranter/restauranter.component';
import { RegistreringComponent } from './pages/kategori/registrering/registrering.component';


import { UserAuthComponent } from './components/user-auth/user-auth.component';

import { FormsModule } from '@angular/forms';
import {NavbarComponent} from "./components/navbar/navbar.component"
import {HomeComponent} from  "./pages/home/home.component"

import {RatingModule} from "primeng/rating";


import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AuthService} from "../app/service/auth.service";
import {LoginComponent} from "./components/login/login.component"
import {SignupComponent} from "./components/signup/signup.component"
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BrukerDashComponent } from './components/bruker-dash/bruker-dash.component';
import { StyleComponent } from './components/style/style.component';


@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    HomeComponent,
    InfocardsComponent,
    KategoriComponent,
    RestauranterComponent,
    RegistreringComponent,

  NavbarComponent,
  HomeComponent
  HomeComponent,
  UserAuthComponent,

    RestaurantViewComponent,
    LoginComponent,
  NavbarComponent,
  HomeComponent,
  UserAuthComponent,
  ForgotPasswordComponent,
  SignupComponent,
  BrukerDashComponent,
  StyleComponent,

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RatingModule,



    // AngularFireModule.initializeApp(environment),
    //AngularFirestoreModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

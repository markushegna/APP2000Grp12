import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,requestComponent } from './app-routing.module';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfocardsComponent,
    KategoriComponent,
    RestauranterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

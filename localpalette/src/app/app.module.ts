import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfocardsComponent } from './components/infocards/infocards.component';

import {MaterialModule} from "./module/material/material.module";
import { KategoriComponent } from './pages/kategori/kategori.component';
import {FormsModule} from "@angular/forms";







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfocardsComponent,
    KategoriComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

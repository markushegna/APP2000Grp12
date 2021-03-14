import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./module/material/material.module";
import { AngularFireModule } from '@angular/fire';
import {environment} from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from "./components/navbar/navbar.component"
import {HomeComponent} from  "./pages/home/home.component"

@NgModule({
  declarations: [
    AppComponent,
  NavbarComponent,
  HomeComponent
  //InfocardsComponent,
  //KategoriComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  
   // AngularFireModule.initializeApp(environment),
    //AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

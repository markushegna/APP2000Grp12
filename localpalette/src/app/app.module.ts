import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

// Hovedkomponenter
import {NavbarComponent} from "./components/navbar/navbar.component"
import {HomeComponent} from  "./pages/home/home.component"
import { FooterComponent } from './components/footer/footer.component';

import { NgModule } from '@angular/core';
import {environment} from "../environments/environment";

import {MaterialModule} from "./module/material/material.module";
import { FormsModule } from '@angular/forms';
import {RatingModule} from "primeng/rating";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AuthService} from "./service/auth.service";

// Login, registrering og authentication
import {LoginComponent} from "./components/login/login.component"
import {SignupComponent} from "./components/signup/signup.component"
import { RegistreringComponent } from './pages/kategori/registrering/registrering.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BrukerDashComponent } from './components/bruker-dash/bruker-dash.component';

import { StyleComponent } from './components/style/style.component';

// Kategori og restaurantviews
import { KategoriComponent } from './pages/kategori/kategori.component';
import {InfocardsComponent} from "./components/infocards/infocards.component";
import { RestauranterComponent } from './pages/kategori/restauranter/restauranter.component';
import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";
import { FrisorsalongerComponent } from './pages/kategori/frisorsalonger/frisorsalonger.component';
import { KategoriviewComponent } from './components/kategoriview/kategoriview.component';

// Oversettelse
import { TranslateComponent } from './components/translate/translate.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrukerRatingComponent} from "./components/restaurant-view/bruker-rating/bruker-rating.component";




@NgModule({
  declarations: [
    AppComponent,
    BrukerRatingComponent,
    HomeComponent,

    // Hovedkompoenter (navbar/footer)
    NavbarComponent,
    FooterComponent,

    // Views av kategorier og bedrifter
    InfocardsComponent,
    KategoriComponent,
    RestauranterComponent,
    RestaurantViewComponent,
    FrisorsalongerComponent,
    KategoriviewComponent,

    //Login og registrering + styling
    LoginComponent,
    RegistreringComponent,
    ForgotPasswordComponent,
    SignupComponent,
    BrukerDashComponent,
    StyleComponent,

    // Oversettelse
    TranslateComponent,

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
    HttpClientModule,
    RatingModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [AuthService,TranslateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

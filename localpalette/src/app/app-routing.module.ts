/*
* @Author: Kim Andre
* Denne modulen tar seg av routinga i heile webapplikasjonen
* Man kan sette på id'er til pathen slik at man kan sende brukeren til et vist punkt.
* Som en bedrift som man vil sjekke ut.
* */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";

import {KategoriComponent} from "./pages/kategori/kategori.component";

import {RegistreringComponent} from "./pages/kategori/registrering/registrering.component";
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {BrukerDashComponent} from './components/bruker-dash/bruker-dash.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {InfocardsComponent} from "./components/infocards/infocards.component";
import {FormsComponent} from "./components/forms/forms.component"

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'kategori/:katid/bedrifter/:bedid',
    component: RestaurantViewComponent
  },
  {
    path: 'kategori',
    component: KategoriComponent
  },
  {
    path: 'kategori/:katid',
    component: InfocardsComponent
  },
  {
    path: 'registrering',
    component: RegistreringComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register-user',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },

  {
    path: "brukerDash", component: BrukerDashComponent, canActivate: [AuthGuard]
  },

  {
    path: "kontakt",
    component: FormsComponent
  },


  {
    path: 'restaurantView/:id',
    component: RestaurantViewComponent
  }


];




@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}

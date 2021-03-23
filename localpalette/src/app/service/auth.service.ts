import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import firebase from "firebase/app"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;
    constructor(
      public angularFireAUth : AngularFireAuth
  ) {  this.userData =angularFireAUth.authState}
​
  /* sign up form*/
  SignUp(email:string, password:string){
    this.angularFireAUth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      console.log('fullført sign up' ,res);
    })
    .catch(error=>{
      console.log("det er ikke tiktig",error.message);
    });
  }
  SignIn(email:string,password:string){
    this.angularFireAUth.signInWithEmailAndPassword(email,password).
    then(res=>{
      console.log("logged inn" ,res);
    })
    .catch(error =>{
      console.log("feil passwrod  try again " ,error.message);
    })
  }
  /* sign out */
  SignOut(){
    this.angularFireAUth.signOut();
  }
}

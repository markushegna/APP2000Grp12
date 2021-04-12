import { Injectable, NgZone } from '@angular/core';
import { User } from "../service/user";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import firebase from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // lagre logget inn bruker gjennom hele siden auth service liger som provider inn app.module.ts

  constructor(
    public afs: AngularFirestore,   // firestore service
    public afAuth: AngularFireAuth, // gir tilgang til  firestore authentication
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  async SignIn(email:string, password:string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['kategori']);
      });
      await this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async SignUp(email:string, password:string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      //this.SendVerificationMail();
      await this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }



  // Reset Forggot password
  async ForgotPassword(passwordResetEmail:string) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false);
  }

  // Sign in with Google
  GoogleAuth() {
    const provider1 = new firebase.auth.GoogleAuthProvider();
    return this.AuthLogin(provider1);
  }
  // log in med twitter

TwitterAuth(){
  const provider= new firebase.auth.TwitterAuthProvider();
  return this.AuthLogin(provider)
}

  // funcksjon som tar imot  andre providre som twiterr og google som ikke som må kalle andre api for bekreftelse
  async AuthLogin(provider:any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['kategori']);
      });
      await this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified


    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    await this.router.navigate(['sign-in']);
  }
}

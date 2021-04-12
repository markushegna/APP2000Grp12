import { Injectable, NgZone } from '@angular/core';
import { User } from "../service/user";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import firebase from "firebase/app";
import { KategoriService } from './kategori.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // lagre logget inn bruker gjennom hele siden auth service liger som provider inn app.module.ts

  constructor(
    public afs: AngularFirestore,   // firestore service 
    public afAuth: AngularFireAuth, // gir tilgang til  firestore authentication 
    public router: Router,  
    public ngZone: NgZone // fjerener outscope varsel
  ) {    
      // lagrer bruker info på localstorage og setter det til null etter person har logget ut
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
 
  // async funciton fodri den er basert på bruker sin input  loger inn med email og passord som er lagret på databasen 
  async SignIn(email:string, password:string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        // etter bruker har loget inn den skal vidre til bruker dash 
        this.router.navigate(['home']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      Swal.fire('noe gikk galt')
    }
  }

  // Regisrer bruker med email og pasord 
  async SignUp(email:string, password:string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      /* caller sendverifaction function som sender verfication til bruker */
     this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
     window.alert(error.message);
     
    }
  }


 

  // om bruker har glemt passord ofg vil reset det 
  async ForgotPassword(passwordResetEmail:string) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
       Swal.fire('Feil: Det er ingen bruker som tilsvarer denne identifikatoren. Brukeren kan ha blitt slettet. ')
    }
  }

  // returnere   true hvis brukekr er loget inn   den skjekker om bruker er loget vet å hente data fra localstorage 
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // eller du kan loge inn direkte med google 
  GoogleAuth() {
    const provider1 = new firebase.auth.GoogleAuthProvider();
  
    return this.AuthLogin(provider1);
  }

  // log in med twitter 

FacebookAuth(){
  const provider= new firebase.auth.FacebookAuthProvider();
  return this.AuthLogin(provider)
}

  // funcksjon som tar imot  andre providre som facebook og google som må bekrefte bruker er eksister fra sin api  
  async AuthLogin(provider:any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }
  
// sender bekreftelse etter bruker har registret seg 
  async SendVerificationMail() {
    (await this.afAuth.currentUser).sendEmailVerification().then(() => {
        console.log('email sent');
    });
}

/* bruker data når personsn har loget inn med  email og passord,
når en bruker regisrer seg så skal den info om den person og sende til 
 firestore collection user  ved hjelp av   AngularFirestore + AngularFirestoreDocument service  
*/
  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
        }
    return userRef.set(userData, {
      merge: true
    })
  }

  // setter local storage til null og navigere vidre til login siden 
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

  
}

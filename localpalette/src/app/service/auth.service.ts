import {Injectable, NgZone} from '@angular/core';
import {User} from "../service/user";

import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from "@angular/router";
//import { auth } from 'firebase/app';
import firebase from "firebase/app";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  /**
   *  Abiel
   *  se https://firebase.google.com/docs/auth/web/
   * er brukt for å se på hvordan den innebygde funksjoner fungerer
   */


  /**
   * brukes til å lagre brukerinfo, dette er mye lettere å hente data fra brukeren
   */
  userData: any;

  constructor(
    public readonly afs: AngularFirestore,   // firestore service
    public readonly afAuth: AngularFireAuth, // gir tilgang til  firestore authentication
    public readonly router: Router,
    public readonly ngZone: NgZone      // fjerener outscope varsel
  ) {
    // lagrer bruker info på localstorage og setter det til null etter person har logget ut
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user

        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  /**
   * async function fordi den er basert på bruker sin input
   * loger inn med email og passord som er lagret på databasen
   *  kaster untak hvis det  bruker med registert info ikke finnes
   * med byg inn function  signInWithEmailAndPassword
   * @param email
   * @param password
   */
  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        // etter bruker har loget inn den skal vidre til bruker dash
        this.router.navigate(['/brukerDash']);
      });
      this.SetUserData(result.user);
    } catch (error) {
      Swal.fire('noe gikk galt')
    }
  }

  /**
   * bruker kan registrere seg på nettstedet
   * etter at brukeren har registrert seg i brukerinfo,
   * og bekreftelsesmail blir sendt
   * @param email
   * @param password
   */
  async SignUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      /* caller sendverifaction function som sender verfication til bruker */
      this.SendVerificationMail();
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);

    }
  }


  /**
   * bruker kan resete sitt passord
   * @param passwordResetEmail
   */
  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      Swal.fire("Passord tilbakestilt e-post sendt, sjekk innboksen din.")
    } catch (error) {
      Swal.fire('Feil: Det er ingen bruker som tilsvarer denne identifikatoren. Brukeren kan ha blitt slettet. ')
    }
  }

  /**
   * get funksjon som sjekker om brukeren er bekreftet eller ikke
   * hvis ikke brukeren må verifisere for å fortsette til brukerens dashbord
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // log inn med google mail
  async GoogleAuth() {
    try {
      const googleprovider = new firebase.auth.GoogleAuthProvider();
      const provider = await this.afAuth.signInWithPopup(googleprovider);
      this.ngZone.run(() => {
        this.router.navigate(['/brukerDash']);
      });
      this.SetUserData(provider.user)
    } catch (error) {
      Swal.fire("noe gikk galt prøv igjen")
    }


  }


// sender bekreftelse etter bruker har registret seg
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      console.log('email sendt ');
    });
  }

  /* bruker data når personsn har loget inn med  email og passord,
  når en bruker regisrer seg så skal den info om den person og sende til
   firestore collection user  ved hjelp av   AngularFirestore + AngularFirestoreDocument service
  */
  SetUserData(user: any) {
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

  FacebookAuth() {

  }
}



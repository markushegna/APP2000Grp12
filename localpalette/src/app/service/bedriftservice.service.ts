import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {ActivatedRoute} from "@angular/router";
import{map } from 'rxjs/operators';
import firebase from "firebase/app";
@Injectable({
  providedIn: 'root'
})
export class BedriftService {
  //docRef: AngularFirestoreDocument;
  infoTabell: Array<object>
  docId: string = "";
  data: firebase.firestore.DocumentData;
  id: string;

  constructor(private db: AngularFirestore, private activatedRoute: ActivatedRoute) {
  }

  hentBedriftInfo(katID: string, docID: string) {

  }
}

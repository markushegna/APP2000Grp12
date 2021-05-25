import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {IBedriftRating} from "./IBedriftRating";

export interface Stjerne {
  bedriftId: string
  brukerId: string
  value: number
}
@Injectable({
  providedIn: 'root'
})
export class StjerneService {
  docId: string;

  constructor(private afs: AngularFirestore) {
  }

  getBrukerStjerner(brukerId){
    const stjerneRef = this.afs.collection('review', ref =>
      ref.where('brukerId', '==', brukerId));
    return stjerneRef.valueChanges();
  }

  getBedriftStjerner(bedriftId){
    const stjerneRef = this.afs.collection('review', ref =>
    ref.where('bedriftId', '==', bedriftId));
    return stjerneRef.valueChanges();
  }

  setStjerne(brukerId, bedriftId, value){
    const stjerne: Stjerne={bedriftId, brukerId, value};
    const stjernePath = `review/${stjerne.brukerId}_${stjerne.bedriftId}`;
    return this.afs.doc(stjernePath).set(stjerne);
    console.log(value)
  }

}

/*
* @Author: Kim Andre
* */

import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class KategoriService {

  constructor(private afsDB: AngularFirestore) {
  }

  hentKategorier() {
    return this.afsDB.collection('kategorier').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data =a.payload.doc.data();
        const id = a.payload.doc.id;
        return{data, id};
      })
    }));
  }
}

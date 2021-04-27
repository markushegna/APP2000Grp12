/*
* @Author: Kim Andre
* */

import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";


@Injectable({
  providedIn: 'root'
})
export class RestaurantInfoService {

  constructor(private afsDB: AngularFirestore) { }

  visAlleKategorier(id: string){
    return this.afsDB.collection('kategorier').doc(id).collection('yrke').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }


}

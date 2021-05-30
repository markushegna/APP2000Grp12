/*
* @Author: Kim Andre
* */

import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

/*
 * Dette er en klasse som kommuniserer mot databasen og henter ut alle
 * bedriftene basert på kategoriId'en som kommer inn
 */


@Injectable({
  providedIn: 'root'
})
export class RestaurantInfoService {

  /*
   * Konstruktøren til denne klassen bruker klassen AngularFirestore for å bruke innebygde CRUD-metoder laga av Google
   * for å hente ut informasjonen fra databasen
   */
  constructor(private afsDB: AngularFirestore) {
  }

  /*
   * Metoden tar inn ein Id som parameter for å finne riktig dokument som fører til riktig collection.
   * Etter å ha funnet riktig collection vil den returnere heile dokumentet og id'en.
   * Funksjonen returnerer informasjonen som et objekt.
   */
  visAlleBedrifter(id: string) {
    return this.afsDB.collection('kategorier').doc(id).collection('yrke').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }


}

import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

  constructor(private afsDB: AngularFirestore) { }

  nyKategori(data){
    this.afsDB.collection('kategori').add(data).then(ref =>{
      console.log('success');

    })
  }
}

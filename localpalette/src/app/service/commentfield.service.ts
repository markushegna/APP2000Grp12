import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentfieldService {

  constructor(private db: AngularFirestore) {
  }

  public getCat() {
    this.db.collection('kategori').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const kategori = a.payload.doc.id;
          return {kategori, data};
        })
      })
    )
  }
}

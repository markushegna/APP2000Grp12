import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentfieldService {

  constructor(private db: AngularFirestore) {
  }
}

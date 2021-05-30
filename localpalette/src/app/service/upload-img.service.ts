import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  // private  basePath : '/images'
  file : File;
  // ur = '';
  imageDetailList: AngularFireList<any>  ;
 constructor(private firebase: AngularFireDatabase) { }


  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }




}




import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRegistreringsform} from "../../../service/IRegistreringsform";
import {AngularFirestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-registrering',
  templateUrl: './registrering.component.html',
  styleUrls: ['./registrering.component.scss']
})
export class RegistreringComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  selectedValue: String;

  constructor(private _formBuilder: FormBuilder, public db :AngularFirestore) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
  /*getFormInfo(){
    console.log("getFormInfo kallet")
    console.log(this.firstFormGroup.value);
    const data = {
      forsteVerdi: this.firstFormGroup.value,
      andreVerdi: this.secondFormGroup.value,

    }
    this.lagreBedrift(data);
  }*/

  lagreBedrift(): void {
    console.log("bedrift lagret")

    const data: IRegistreringsform = {
      name: this.firstFormGroup.value.firstCtrl,
      location: this.secondFormGroup.value.secondCtrl,
      mobile: this.thirdFormGroup.value.thirdCtrl,
      åpningsTiderHverdag: this.fourthFormGroup.value.fourthCtrl,
      åpningsTiderHelg: this.fifthFormGroup.value.fifthCtrl,
      kategori: this.selectedValue.valueOf()
    }
    console.log(data);
    const dataer = this.db.collection('review').doc(this.db.createId()).set(data);
  }
}

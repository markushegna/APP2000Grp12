import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRegistreringsform} from "../../../service/IRegistreringsform";
import {AngularFirestore} from "@angular/fire/firestore";
import {KategoriService} from "../../../service/kategori.service";


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
  sixthFormGroup: FormGroup;
  selectedValue: string;
  kategoriTabell: Array<object>
  id: string = "";

  constructor(private katService: KategoriService, private _formBuilder: FormBuilder, public db: AngularFirestore) { }

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
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });

    this.katService.hentKategorier().subscribe(kategorier=>{
      this.kategoriTabell = kategorier;
    })
  }

  lagreBedrift(): void {
    console.log("bedrift lagret")

    const bedriftInfo: IRegistreringsform = {
      name: this.firstFormGroup.value.firstCtrl,
      location: this.secondFormGroup.value.secondCtrl,
      mobile: this.thirdFormGroup.value.thirdCtrl,
      åpningsTiderHverdag: this.fourthFormGroup.value.fourthCtrl,
      åpningsTiderHelg: this.fifthFormGroup.value.fifthCtrl,
      omOss: this.sixthFormGroup.value.sixthCtrl,
      bedriftId: this.db.createId()
    }
    this.id = this.selectedValue.valueOf();
    console.log(bedriftInfo);

    this.db.collection('kategorier').doc(this.selectedValue.valueOf()).collection('yrke').doc(bedriftInfo.bedriftId).set(bedriftInfo)
      .then(r => console.log(r));
  }

  selectChange(event: any) {
    this.id = event.target.value;
    console.log(event.target.value);
  }
}

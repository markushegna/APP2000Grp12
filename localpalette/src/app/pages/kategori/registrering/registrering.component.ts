import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IRegistreringsform} from "../../../service/IRegistreringsform";
import {AngularFirestore} from "@angular/fire/firestore";
import {KategoriService} from "../../../service/kategori.service";
import { TranslateComponent } from 'src/app/components/translate/translate.component';
import {UploadImgService} from "../../../service/upload-img.service";
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import * as Leaflet from "leaflet";
import {LeafletMap} from "../../../components/restaurant-view/leaflet-map";


@Component({
  selector: 'app-registrering',
  templateUrl: './registrering.component.html',
  styleUrls: ['./registrering.component.scss']
})
export class RegistreringComponent implements OnInit {

  isLinear = false;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  selectedValue: string;
  kategoriTabell: Array<object>
  id: string = "";
  imgsrc: string
  selectImage:  any=null;
  submit :boolean;

  @Input() maxNumberOfCharacters = 160;
  counter = true;
  numberOfCharacters2 = 0;
  interaction = {
    textValue: ''
  };

 lng: number;
  lat: number;
  coords: any;
  formTemplate = new FormGroup({
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })



  constructor(private katService: KategoriService,
    private _formBuilder: FormBuilder,
    public db: AngularFirestore,
    public translate: TranslateComponent,
    public  uploadService : UploadImgService,
    private fireSt :AngularFireStorage

    ) { }


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
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });

    navigator.geolocation.getCurrentPosition(location =>{

      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;
      const coords = location.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(this.lat , this.lng, coords);

    });



    this.katService.hentKategorier().subscribe(kategorier=>{
      this.kategoriTabell = kategorier;
    })
  }

  lagreBedrift(): void {
    console.log("bedrift lagret")

    const bedriftInfo: IRegistreringsform = {
      lat: this.lat,
      lng: this.lng,
      name: this.firstFormGroup.value.firstCtrl,
      location: this.secondFormGroup.value.secondCtrl,
      mobile: this.thirdFormGroup.value.thirdCtrl,
      åpningsTiderHverdag: this.fourthFormGroup.value.fourthCtrl,
      åpningsTiderHelg: this.fifthFormGroup.value.fifthCtrl,
      omOss: this.seventhFormGroup.value.seventhCtrl,
      bedriftId: this.db.createId(),
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
  showPreview(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgsrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectImage = event.target.files[0];
    }
    else {
      //this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectChange = null;
    }
  }
  onSubmit(formValue) {
    this.submit = true;
    if (this.formTemplate.valid) {

      const filePath = `${formValue.category}/${this.selectImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.fireSt.ref(filePath);
      this.fireSt.upload(filePath, this.selectImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.uploadService.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm(){

  }

  onModelChange(textValue: string): void{
    this.numberOfCharacters2 = textValue.length;
  }
}

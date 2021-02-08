import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  imports: [
    MatButtonModule,
    MatRippleModule,

  ],
  exports:[
    MatButtonModule,
    MatRippleModule,

  ]
})
export class MaterialModule { }

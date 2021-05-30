import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule, MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";

/*
 * Her ligger alle de importerede material
 * modulene som brukes i de forskjellige komponentene.
 */
@NgModule({
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class MaterialModule {
}

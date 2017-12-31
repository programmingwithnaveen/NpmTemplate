import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {sharedComponent} from './shared.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    sharedComponent
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule, ReactiveFormsModule
  ],
  exports: [
    sharedComponent
  ],
  providers: [],
  bootstrap: [sharedComponent]
})
export class SharedModule {
}

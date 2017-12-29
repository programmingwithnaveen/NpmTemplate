import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { sharedComponent } from './shared.component';


@NgModule({
  declarations: [
    sharedComponent
  ],
  imports: [
    //BrowserModule
  ],
  exports:[
    sharedComponent
  ],
  providers: [],
  bootstrap: [sharedComponent]
})
export class SharedModule { }

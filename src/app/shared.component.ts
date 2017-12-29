import { Component } from '@angular/core';

@Component({
  selector: 'shared-root',
  template: `Library Testing Page`
})
export class sharedComponent {

  constructor(){
    this.sayHello();
  }

 public sayHello(){
    console.log('Hello from library');
  }
}



import { Component } from '@angular/core';

/**
 * Generated class for the MyprojectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myproject',
  templateUrl: 'myproject.html'
})
export class MyprojectComponent {

  text: string;

  constructor() {
    console.log('Hello MyprojectComponent Component');
    this.text = 'Hello World';
  }

}

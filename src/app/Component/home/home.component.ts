import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentStyles:Record<string, string> = {}; // defined record type to store key value pair of string type

  //defined boolean type variables
  isCentered = true;
  isSuccess = true;
  isLarge = true;

  constructor() {
    this.currentStyles = {
      'text-align': this.isCentered ? 'center' : 'left',
      'color': this.isSuccess ? 'green' : 'red',
      'font-size': this.isLarge ? '30px' : '12px'
    }
  }

}

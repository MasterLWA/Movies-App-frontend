import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  
  //way one is create render html code in template property and css code in styles property in component folder and import it in app.module.ts file 
  //this option is the best practice to use it
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']

// way two is create render html code in template property and css code in styles property in the component decorator 
//this commment code is the best for understand concept of component decorator

//   template: `
//       <h1>Test Component</h1>
//       <p>Test Component</p>
//       <p>Test Component</p>
//       <p>Test Component</p>
//       <p>Test Component</p>
//   `,
//   styles: [`
//       h1{
//           color: red;
//       }

//       p{
//           color: blue;
//       }
//   `]

})


export class TestComponent {

}

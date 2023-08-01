import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date();
  imageUrl = 'https://www.gstatic.com/webp/gallery/1.jpg';
  price = 100;

  sellingprice = 15.6
}

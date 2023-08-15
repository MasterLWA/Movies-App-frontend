import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  isVisible = true;

  fanFavoriteMovies: any = [
    {
      id: 1,
      imageUrl: 'https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg',
      title:'Tom and Jerry',
      discription:'Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:'2017',
      rating: 4.5,
      time: 120,
    },
    {
      id: 2,
      imageUrl: 'https://i5.walmartimages.com/asr/a21f1e45-c9d1-4b48-8287-6fe2144193b2.3c90203e8c065d7284b30fb86af212e1.jpeg',
      title:'Spider Man',
      discription:'Spider Man is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:2021,
      rating: 4.5,
      time: 120,
    },
    //Thor
    {
      id: 3,
      imageUrl: 'https://i5.walmartimages.com/asr/a21f1e45-c9d1-4b48-8287-6fe2144193b2.3c90203e8c065d7284b30fb86af212e1.jpeg',
      title:'Thor',
      discription:'Thor is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:2021,
      rating: 4.5,
      time: 120,
    },
    //Avengers
    {
      id: 4,
      imageUrl: 'https://i5.walmartimages.com/asr/a21f1e45-c9d1-4b48-8287-6fe2144193b2.3c90203e8c065d7284b30fb86af212e1.jpeg',
      title:'Avengers',
      discription:'Avengers is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:2021,
      rating: 4.5,
      time: 120,
    },
    //Batman
    {
      id: 5,
      imageUrl: 'https://filmartgallery.com/cdn/shop/products/Batman-Vintage-Movie-Poster-Original-1-Sheet-27x41_b86ea5b0-8879-4a5c-8df8-1256d964651b.jpg?v=1678914222',
      title:'Batman',
      discription:'Batman is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:2021,
      rating: 4.5,
      time: 120,
    },
    //Superman
    {
      id: 6,
      imageUrl: 'https://i.pinimg.com/1200x/79/76/ec/7976ec0b8d93f8b341e9657b13480f3c.jpg',
      title:'Superman',
      discription:'Superman is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.',
      releaseDate:2021,
      rating: 4.5,
      time: 120,
    }

    ]


  // currentStyles:Record<string, string> = {}; // defined record type to store key value pair of string type

  // //defined boolean type variables
  // isCentered = true;
  // isSuccess = true;
  // isLarge = true;

  // constructor() {
  //   this.currentStyles = {
  //     'text-align': this.isCentered ? 'center' : 'left',
  //     'color': this.isSuccess ? 'green' : 'red',
  //     'font-size': this.isLarge ? '30px' : '12px'
  //   }
  // }

}

import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  //inject http client
  constructor(private httpClient: HttpClient) {

  }

  isVisible = true;

  fanFavoriteMovies: any = []

  intergerValue = 5;

  ngOnInit(): void {
    this.getFanFavorite();
  }

  //getFanFavorite movie function implementataion
  getFanFavorite() {
    this.httpClient.get<any[]>('../../assets/data/fanFavorite.json').subscribe((data:any[]) => {
      this.fanFavoriteMovies = data;
    })

  }


}

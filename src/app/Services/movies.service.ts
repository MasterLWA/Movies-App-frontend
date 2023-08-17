import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  //getFanFavorite movie function implementataion
  getFanFavorite() {
    return this.httpClient.get<any[]>('../../assets/data/fanFavorite.json');
  }
}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  searchText  : string = "";

  //create function to search for movie
searchMovie(){
  console.log("searchMovie() called");
  console.log("searchText: " + this.searchText);

  //navigate to search component
  //this.router.navigate(['/search', this.searchText])

}
  constructor() { }


}

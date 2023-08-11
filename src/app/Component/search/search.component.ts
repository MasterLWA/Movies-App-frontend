import { Component, Input } from '@angular/core';
import {NavComponent} from "../nav/nav.component";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    @Input() searchText  : string = "";


  constructor() { }

  ngOnInit(): void {
  }
}

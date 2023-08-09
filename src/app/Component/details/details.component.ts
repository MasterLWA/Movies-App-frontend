import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit  {

  movieTitle: string = '';

  constructor(private  _activatedRoute: ActivatedRoute){

    this._activatedRoute.params.subscribe((p) => {
        this.movieTitle = p['id'];

        console.log('this.movieTitle: ' + this.movieTitle);
    })
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }



}

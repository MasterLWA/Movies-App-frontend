import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TestComponent } from './Component/test/test.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailsComponent } from './component/details/details.component';
import { DetailsMoviesComponent } from './component/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './component/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './component/not-authorized/not-authorized.component';
import { SearchComponent } from './component/search/search.component';
import { ModalComponent } from './component/modal/modal.component';
import { LoaderComponent } from './component/loader/loader.component';
import { NavComponent } from './component/nav/nav.component';
import { ProfitPipe } from './pipes/profit.pipe';
import {FormsModule} from "@angular/forms";
import { ActorDetailsComponent } from './Component/actor-details/actor-details.component';
import {RouterModule} from "@angular/router";
import {AppRoutesModule} from "./modules/app.routes";
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeaderDirective } from './Directive/header.directive';
import { MyIfDirective } from './Directive/my-if.directive';

//import HttpClientModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    ModalComponent,
    LoaderComponent,
    NavComponent,
    ActorDetailsComponent,
    NotFoundComponent,

    //pipes
    ProfitPipe,

      //directives
      HeaderDirective,
        MyIfDirective,


  ],
  imports: [
    BrowserModule,
      AppRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

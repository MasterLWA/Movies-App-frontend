import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { DetailsComponent } from '../component/details/details.component';
import { DetailsMoviesComponent } from '../component/details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../component/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from '../component/not-authorized/not-authorized.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'details/movies', component: DetailsMoviesComponent },
    { path: 'details/reviews', component: DetailsReviewsComponent },
    { path: 'not-authorized', component: NotAuthorizedComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }





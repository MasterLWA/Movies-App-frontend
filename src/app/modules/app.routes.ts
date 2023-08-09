import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { DetailsComponent } from '../component/details/details.component';
import { DetailsMoviesComponent } from '../component/details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../component/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from '../component/not-authorized/not-authorized.component';
import { SearchComponent } from '../component/search/search.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'details/movies/:id', component: DetailsMoviesComponent },
    { path: 'details/reviews/:id', component: DetailsReviewsComponent },
    { path: 'not-authorized/:id', component: NotAuthorizedComponent },
    { path: 'search/:movieTitle', component:SearchComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutesModule { }





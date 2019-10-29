import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpcomingMoviesComponent } from './movie/upcoming-movies/upcoming-movies.component';
import { MyListComponent } from './movie/my-list/my-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { WatchlistComponent } from './movie/watchlist/watchlist.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AdultComponent } from './movie/adult/adult.component';
import { AuthGuard } from './_guards';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'upcoming-movies', component: UpcomingMoviesComponent, canActivate: [AuthGuard] },
    { path: 'my-list', component: MyListComponent },
    { path: 'movie-details/:name', component: MovieDetailsComponent, pathMatch: 'full' },
    { path: 'watchlist', component: WatchlistComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'adult', component: AdultComponent },
    { path: 'register', component: RegisterComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
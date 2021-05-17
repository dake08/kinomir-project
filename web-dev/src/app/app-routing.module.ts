import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from './main-container/main-container.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import { FilmsListComponent } from './films-list/films-list.component';
import {AuthComponent} from './auth/auth.component';
import {SeriesListComponent} from './series-list/series-list.component';
import {CommentsComponent} from './comments/comments.component';
import {FavoritelistComponent} from './favoritelist/favoritelist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainContainerComponent},
  {path: 'films', component: FilmsListComponent},
  {path: 'films/:filmId', component: FilmDetailComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'series', component: SeriesListComponent},
  {path: 'films/:filmId/comments/:commentId', component: CommentsComponent},
  {path: 'favoritelist', component: FavoritelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

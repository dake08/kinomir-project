import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MainContainerComponent} from './main-container/main-container.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SeriesListComponent } from './series-list/series-list.component';
import { CommentsComponent } from './comments/comments.component';
import { FavoritelistComponent } from './favoritelist/favoritelist.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmDetailComponent,
    MainContainerComponent,
    FilmsListComponent,
    AuthComponent,
    SeriesListComponent,
    CommentsComponent,
    FavoritelistComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }

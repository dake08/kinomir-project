import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.css']
})
export class FavoritelistComponent implements OnInit {

  userId = -1;
  favorites;
  clickedMovie;
  title;
  add = 'dasda';
  flag = false;

  constructor(private http: HttpClient,
              private apiService: ApiService) {
    this.clickedMovie = {id: -1, name: ''};
  }


  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res);
        this.userId = res.id;
        Emitters.authEmitter.emit(true);
        this.getFavoriteFilms();
      },
      err => {
        Emitters.authEmitter.emit(false);
      }
    );
  }

  getFavoriteFilms = () => {
    this.apiService.getFavoriteFilms(this.userId).subscribe(
      data => {
        this.favorites = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  movieClicked = (favorite) => {
    this.apiService.getFavoriteFilm(this.userId, favorite.id).subscribe(
      data => {
        this.clickedMovie = data;
        this.title = data.name;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateFavoriteFilm = () => {
    this.apiService.updateFavoriteFilm(this.userId, this.clickedMovie).subscribe(
      data => {
        this.getFavoriteFilms();
      },
      error => {
        console.log(error);
      }
    );
  }
  createFavoriteFilm = () => {
    this.apiService.createFavoriteFilm(this.userId, this.add).subscribe(
      data => {
        this.getFavoriteFilms();
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteFavoriteFilm = (favoriteid) => {
    this.apiService.deleteFavoriteFilm(this.userId, favoriteid).subscribe(
      data => {
        this.getFavoriteFilms();
      },
      error => {
        this.getFavoriteFilms();
        console.log(error);
      }
    );
  }
}

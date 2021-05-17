import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://localhost:8000/film/';

  constructor(private client: HttpClient) {
  }

  getFavoriteFilms(currentuserid: number): Observable<any> {
    return this.client.get(this.baseurl + currentuserid + '/favorites');
  }
  getFavoriteFilm(currentuserid: number, filmId: number): Observable<any> {
    return this.client.get(this.baseurl + currentuserid + '/favorites/' + filmId);
  }
  updateFavoriteFilm(currentuserid: number, clickedMovie): Observable<any> {
    const body = {name: clickedMovie.name};
    return this.client.put(this.baseurl + currentuserid + '/favorites/' + clickedMovie.id, body);
  }
  deleteFavoriteFilm(currentuserid: number, filmId: number): Observable<any> {
    return this.client.delete(this.baseurl + currentuserid + '/favorites/' + filmId);
  }
  createFavoriteFilm(currentuserid: number, add: string): Observable<any> {
    const body = {name: add};
    return this.client.post(this.baseurl + currentuserid + '/favorites', body);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Film, Comment, User} from './models';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://localhost:8000/film';

  // @ts-ignore
  private messageSource = new BehaviorSubject<User>();
  currentMessage = this.messageSource.asObservable();

  getFilms(): Observable<Film[]>{
    return this.client.get<Film[]>(`${this.BASE_URL}/filmList`);
  }

  getFilm(filmId: number): Observable<Film>{
    return this.client.get<Film>(`${this.BASE_URL}/${filmId}`);
  }
  addFilm(film: Film): Observable<Film>{
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/films`, film);
  }
  updateFilm(film: Film): Observable<Film>{
    return this.client.put<Film>(`${this.BASE_URL}/films/${film.id}`, film);
  }
  getCommnets(filmId: number): Observable<Comment[]>{
    return this.client.get<Comment[]>(`${this.BASE_URL}/${filmId}/comments`);
  }
  addComment(comment: Comment, filmId: number): Observable<Comment>{
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/${filmId}/comments`, comment);
  }
  deleteComment(commentId: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/${commentId}/comments/delete`);
  }
  deleteFilm(id: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/film/${id}/comments/delete`);
  }
  changeMessage(user: User): void{
    this.messageSource.next(user);
  }
}



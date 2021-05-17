import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Film, Comment, User, Comment2} from '../models';
import {FilmServiceService} from '../film-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private filmService: FilmServiceService) { }
  // tslint:disable-next-line:max-line-length
  film!: Film;
  status = 'film';
  loaded!: boolean;
  comments: Comment[] = [];
  body: string | undefined;
  user!: User;

  ngOnInit(): void {
    this.filmService.currentMessage.subscribe(user => this.user = user);
    this.getFilm();
  }

  getFilm(): void{
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('filmId');
      this.loaded = false;
      console.log(id);
      // @ts-ignore
      this.filmService.getFilm(id).subscribe((film) => {
        this.film = film;
        this.loaded = true;
      });
      this.getComments(id);
    });
  }

  getComments(id: number): void{
    this.loaded = false;
    this.filmService.getCommnets(id).subscribe(comments => {
      this.comments = comments;
      this.loaded = true;
    });
  }
  addComment(): void{
    console.log(this.user);
    const comment =  {
      user: this.user.id,
      film: this.film.id,
      body: this.body,
    };
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    this.filmService.addComment(comment as Comment, this.film.id).subscribe(comment => {
      this.comments.push(comment);
      this.body = '';
      });
    this.getComments(this.film.id);
  }

  deleteComment(id: number): void{
    this.filmService.deleteComment(id).subscribe(() => {
      console.log(id , 'deleted');
    });
    this.comments = this.comments.filter((x: Comment) => x.id !== id);
  }

}

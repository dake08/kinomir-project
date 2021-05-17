import { Component, OnInit, Input, Output } from '@angular/core';
import {Film} from '../models';
import {ActivatedRoute} from '@angular/router';
import {FilmServiceService} from '../film-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private filmService: FilmServiceService) { }
  userName: string | undefined;
  body: string | undefined;
  film!: Film;
  ngOnInit(): void {
  }


  addComment(): void{

    const comment = {
      film: this.film,
      name: this.userName,
      body: this.body
    };

  }



}

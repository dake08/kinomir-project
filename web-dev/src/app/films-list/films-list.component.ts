import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmServiceService} from '../film-service.service';
import {Film} from '../models';


@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  // category;
  films: Film[] = [];
  loaded!: boolean;
  constructor(private route: ActivatedRoute,
              private filmService: FilmServiceService) {
    const routeParams = this.route.snapshot.paramMap;
    // this.category = categories.find(category => category.id === categoryIdFromRoute);
  }


  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void{
    this.loaded = false;
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
      this.loaded = true;
    });
  }


}

import {Component, OnInit} from '@angular/core';
import {Emitters} from './emitters/emitters';
import {HttpClient} from '@angular/common/http';
import {FilmServiceService} from './film-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-dev';
  side = 'light';
  flag = '';

  constructor(private http: HttpClient,
              private filmService: FilmServiceService) {
  }

  changeSide(): void {
    if (this.side === 'light') {
      this.side = 'dark';
    } else {
      this.side = 'light';
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res);
        this.flag = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
        this.filmService.changeMessage(res);
      },
      err => {
        this.flag = '';
        Emitters.authEmitter.emit(false);
      }
    );
  }
}

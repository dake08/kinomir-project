import {Component, OnInit} from '@angular/core';
import {Emitters} from '../emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {


  flag = '';

  constructor(
    private http: HttpClient
  ) {
  }

  slide = 'slide1';


  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res);
        this.flag = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.flag = 'Вы не вошли в аккаунт :(';
        Emitters.authEmitter.emit(false);
      }
    );
  }


}

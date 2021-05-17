import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  formReg!: FormGroup;
  formLog!: FormGroup;

  constructor(
    private formBuilderReg: FormBuilder,
    private formBuilderLog: FormBuilder,
    private http: HttpClient,
    private router: Router) {
  }

  @Output() dialog = 'hello';

  iName = '';
  iSurname = '';
  iEmail = '';
  iPassword = '';

  ngOnInit(): void {
    this.formReg = this.formBuilderReg.group({
      name: '',
      surname: '',
      email: '',
      password: ''
    });
    this.formLog = this.formBuilderLog.group({
      email: '',
      password: ''
    });
  }

  submitReg(): void {
    this.http.post('http://localhost:8000/api/register', this.formReg.getRawValue())
      .subscribe(res => {
        this.dialog = 'intRegFinished';
      });
  }

  submitLog(): void {
    this.http.post('http://localhost:8000/api/login', this.formLog.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/home']));
  }

  // tslint:disable-next-line:typedef
  gotoAuth() {
    this.dialog = 'intAuth';
  }

  // tslint:disable-next-line:typedef
  gotoReg() {
    this.dialog = 'intReg';
  }

}

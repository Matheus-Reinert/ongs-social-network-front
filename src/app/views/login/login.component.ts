import { LoginService } from './../../resources/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private router: Router ,private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin;
  }

  public doLogin() : void {
    /* this.loginService.doLogin(this.requestLogin).subscribe(data => {
      console.log(data)
    },
    error => {
      console.error(error);
    }) */

    this.router.navigate(["/timeline"]);

  }

}

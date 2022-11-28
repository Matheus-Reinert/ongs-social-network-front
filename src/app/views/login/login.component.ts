import { AccountService } from './../../resources/services/account/account.service';
import { LoginService } from './../../resources/services/login/login.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;
  constructor(private router: Router, private loginService: LoginService, private accountService:AccountService) { }

  public disableSubmitLogin: Boolean = true;

  ngOnInit(): void {
    this.requestLogin = new RequestLogin;
  }

  verifyIfCanSubmitLogin(): void {
    if(!this.requestLogin.email || !this.requestLogin.password){
      this.disableSubmitLogin = true;
    } else {
      this.disableSubmitLogin = false;
    }
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

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.requestLogin);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

}

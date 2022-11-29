import { AccountService } from './../../resources/services/account/account.service';
import { LoginService } from './../../resources/services/login/login.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;
  constructor(private router: Router, private loginService: LoginService,
    private accountService:AccountService, private messageService: MessageService) { }

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

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.requestLogin);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error){
      this.messageService.add({severity:'error', summary:'Erro', detail:'Email ou Senha inválidos'});
    }
  }

}

import { Router } from '@angular/router';
import { AccountService } from './../../resources/services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { RequestCreateUser } from 'src/app/resources/models/RequestCreateUser';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public requestCreateUser = new RequestCreateUser;
  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.requestCreateUser);
      console.log(result);
/*       this.router.navigate(['']); */
    } catch (error){
      console.error(error);
    }
  }

}

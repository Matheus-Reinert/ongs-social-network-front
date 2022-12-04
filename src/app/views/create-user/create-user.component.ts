import { UserService } from '../../resources/services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RequestCreateUser } from 'src/app/resources/models/user/RequestCreateUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public requestCreateUser = new RequestCreateUser;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    try {
      const result = await this.userService.createUser(this.requestCreateUser);
      this.requestCreateUser.username = ""
      this.requestCreateUser.email = ""
      this.requestCreateUser.password = ""
    } catch (error){
      console.error(error);
    }
  }

}

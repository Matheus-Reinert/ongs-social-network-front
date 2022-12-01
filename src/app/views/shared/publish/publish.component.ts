import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUsername(){
    return window.localStorage.getItem('username')
  }

}

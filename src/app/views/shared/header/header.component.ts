import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {
      label: 'Início'
    },
    {
      label: 'Friends'
    },
    {
      label: 'Perfil'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

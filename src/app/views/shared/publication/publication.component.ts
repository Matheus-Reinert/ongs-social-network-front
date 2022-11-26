import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  comments = [
    "Teste",
    "oi, amigos",
    "O Hexa vem"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

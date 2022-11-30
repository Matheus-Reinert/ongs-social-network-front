import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  display: boolean = false;

   comments = [
    {name: "teste"},
    {name: "teste2"},
    {name: "Matheus"}
  ]

  @Input() publicationId!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.publicationId)
  }

  showDialog() {
    this.display = true;
  }
}

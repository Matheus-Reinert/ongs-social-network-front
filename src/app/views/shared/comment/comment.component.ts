import { CommentService } from './../../../resources/services/comment/comment.service';
import { CommentModel } from './../../../resources/models/comment/CommentResponse';
import { Component, Input, OnInit } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  display: boolean = false;

  comments: CommentModel[] = [];

  @Input() publicationId!: number;
  @Input() parentComment!: string;

  constructor(private commentService :CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsToPost(this.publicationId).subscribe(response => {
      this.comments = response;
    });
  }

  showDialog() {
    this.display = true;
  }

  header(){
    return this.parentComment
  }
}

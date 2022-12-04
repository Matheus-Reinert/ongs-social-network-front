import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RequestComment } from './../../models/comment/RequestComment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../../models/comment/CommentResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  userId : any;

  constructor(private http: HttpClient, private messageService:MessageService) { }

  getCommentsToPost(postId: number) {
    return this.http.get<CommentModel[]>(`${environment.api}/comments/posts/${postId}`)
  }

   saveComment(requestComment: RequestComment, postId: number) {

    this.userId = window.localStorage.getItem("userId")
    this.http.post<RequestComment>(`${environment.api}/comments/posts/${postId}?userId=${this.userId}`, requestComment)
              .subscribe( resultado => {
                this.messageService.add({severity:'success', summary:'Sucesso', detail:'Comentário criado com sucesso!'});
              }, erro =>{
                this.messageService.add({severity:'error', summary:'Erro', detail:'Não foi possível criar o comentário'});
              });
  }
}

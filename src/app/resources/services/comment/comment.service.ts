import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../../models/comment/CommentResponse';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsToPost(postId: number) {
    return this.http.get<CommentModel[]>(`${environment.api}/comments/posts/${postId}`)
}
}

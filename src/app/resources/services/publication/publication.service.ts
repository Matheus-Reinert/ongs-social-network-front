import { MessageService } from 'primeng/api';
import { Post } from '../../models/publication/Post';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { RequestPublication } from '../../models/publication/RequestPublication';



@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

   getPublicationToUser() {
      return this.http.get<Post>(`${environment.api}/posts/user`)
  }

  createPublication(requestPublication: RequestPublication) {
    const id = localStorage.getItem("userId");
    this.http.post<any>(`${environment.api}/posts/users/${id}`, requestPublication).subscribe( resultado => {
      this.messageService.add({severity:'success', summary:'Sucesso', detail:'Publicação criada com sucesso!'});
    }, erro =>{
      this.messageService.add({severity:'error', summary:'Erro', detail:'Não foi possível criar a publicação'});
    });
  }
}

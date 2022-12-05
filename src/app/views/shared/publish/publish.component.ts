import { PublicationService } from './../../../resources/services/publication/publication.service';
import { Publication } from './../../../resources/models/publication/Publication';
import { RequestPublication } from './../../../resources/models/publication/RequestPublication';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  public requestPublication: RequestPublication = new RequestPublication;

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
  }

  getUsername(){
    return window.localStorage.getItem('username')
  }

  createPublication(){
    this.publicationService.createPublication(this.requestPublication);
    this.requestPublication.text = "";
  }

}

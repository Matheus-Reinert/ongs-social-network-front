import { Post } from './../../../resources/models/Post';
import { PublicationService } from './../../../resources/services/publication/publication.service';
import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/resources/models/Publication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publications: Publication[] = [];
  @Input() publicationId!: any;

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.publicationService.getPublicationToUser().subscribe((response:Post) => {
      this.publications = response.posts;
    });
  }

  teste(){
    console.log("comentartio")
  }

}

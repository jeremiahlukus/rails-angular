import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from '../../models/documents/document';
import { DocumentService } from '../../services/document.service';


@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: [ '../../styles/documents.component.css' ],
  providers: [ DocumentService ],
})

export class DocumentsComponent  implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService;
  ){}

  ngOnInit(){
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }

}

    
    // {
    //   title: "Doc1",
    //   description: "Desc1", 
    //   file_url: "Some url",
    //   updated_at: "2/8/2019",
    //   image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    // },
    // {
    //   title: "Doc2",
    //   description: "Desc2", 
    //   file_url: "Some url",
    //   updated_at: "2/8/2019",
    //   image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    // },
    // {
    //   title: "Doc2",
    //   description: "Desc2", 
    //   file_url: "Some url",
    //   updated_at: "2/8/2019",
    //   image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    // }

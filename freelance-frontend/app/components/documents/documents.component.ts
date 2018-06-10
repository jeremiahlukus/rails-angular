import { Component } from '@angular/core';
import { Document } from '../../models/documents/document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: [ '../../styles/documents.component.css' ]
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "Doc1",
      description: "Desc1", 
      file_url: "Some url",
      updated_at: "2/8/2019",
      image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    },
    {
      title: "Doc2",
      description: "Desc2", 
      file_url: "Some url",
      updated_at: "2/8/2019",
      image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    },
    {
      title: "Doc2",
      description: "Desc2", 
      file_url: "Some url",
      updated_at: "2/8/2019",
      image_url: "https://pakwired.com/wp-content/uploads/2017/10/Freelancer-No-credit.jpg",
    }
  ]
}

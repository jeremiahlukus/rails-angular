import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProposalListComponent } from './components/proposal/proposal-list.component';
import { ProposalNewComponent } from './components/proposal/proposal-new.component';
import { ProposalShowComponent } from './components/proposal/proposal-show.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent, 
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent, 
    ProposalNewComponent, 
    ProposalShowComponent, 
  ],
  bootstrap: [
    AppComponent 
  ]
})

export class AppModule {}

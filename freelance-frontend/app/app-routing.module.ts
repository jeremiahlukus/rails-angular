import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProposalListComponent } from './components/proposal/proposal-list.component';
import { ProposalNewComponent } from './components/proposal/proposal-new.component';
import { ProposalShowComponent } from './components/proposal/proposal-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalListComponent },
  { path: 'proposals/new', component: ProposalNewComponent },
  { path: 'proposal/:id', component: ProposalShowComponent },

]

@NgModule({ 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

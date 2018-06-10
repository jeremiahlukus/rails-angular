import { Component } from '@angular/core'
import { Proposal } from '../../models/proposals/proposal';

@Component({
  moduleId: module.id, 
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, "Customer1", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email1@email.com")
  proposalTwo: Proposal = new Proposal(2, "Customer2", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email2@email.com")
  proposalThree: Proposal = new Proposal(3, "Customer3", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email3@email.com")
  proposalFour: Proposal = new Proposal(4, "Customer4", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email4@email.com")
  proposals: Proposal[] = [ 
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree, 
    this.proposalFour
  ]
}


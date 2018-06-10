"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var proposal_1 = require('../../models/proposals/proposal');
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(1, "Customer1", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email1@email.com");
        this.proposalTwo = new proposal_1.Proposal(2, "Customer2", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email2@email.com");
        this.proposalThree = new proposal_1.Proposal(3, "Customer3", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email3@email.com");
        this.proposalFour = new proposal_1.Proposal(4, "Customer4", "someUrlProfolio.com", "Ruby", 1250, 120, 15, "email4@email.com");
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree,
            this.proposalFour
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map
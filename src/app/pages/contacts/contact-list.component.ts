import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from './contact';

@Component({
    selector: 'contacts',
    templateUrl: './contact-list.html',
    providers: [ContactService]
})
export class ContactListComponent implements OnInit {

    contacts:Contact[] = [];
    selectedContact: Contact;
    sub: any;

    constructor(private itemsTableService:ContactService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(){
        this.itemsTableService.getAll().subscribe(c => this.contacts = c);
    }

    selectContact(contact: Contact){
        this.selectedContact = contact;
        let link = [contact.contact_id];
        console.log(link); 
        this.router.navigate(link);
    
  }
}
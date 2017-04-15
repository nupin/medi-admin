import {Component, OnInit, OnDestroy} from '@angular/core';
import {ContactService} from './contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from './contact';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-detail.html',
    providers: [ContactService]
})
export class ContactDetailComponent implements OnInit{
    // , OnDestroy {

    contact: Contact;
    sub: any;
    
    constructor(private contactService: ContactService,
            private route: ActivatedRoute, private router: Router) {}

    ngOnInit(){
        this.route.params.subscribe(params => {
          let contact_id = (params['id']);
          console.log('=>'+contact_id);
          this.contactService.get(contact_id).subscribe(i => this.contact = i);
        });
    }

    // ngOnDestroy(){
    //     this.sub.unsubscribe();
    // }

    gotoItemsList(){
        let link = ['/contacts'];
        this.router.navigate(link);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; //Params allow us to get the updated params as an argument

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    
    //object variable user being assigned id1 and id2 properties
    contacts: {id1:any, id2: any};
    
    
    //private key word used to assign instance (acroute) of "ActivatedRoute" component
    constructor(private acroute: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        //user object
        this.contacts = {
          //snapshot.params is used to retrieve information from a variable within the component
            //use snapshot when you have a set parameter that will not change or overwrite
        id1: this.acroute.snapshot.params['id1'],
        id2: this.acroute.snapshot.params['id2']
            

        };
        
        //params is a observable. observables allow us to easily work with asychornous tasks. 
        //Observables are an easy way to subscribe to some event that might happen in the future. When/if the change does happen then a change will be executed when the change does happen. Observables allow for non-blocking.
        //params is a asychonous task because the parameter of your route might change sometime in the future.
        //use params when you have a parameter that will change or overwrite in future or sometime
        this.acroute.params
            .subscribe(
                (params: Params) =>{
                    //params instance of Params
                    //this will update our user object on the fly
                    this.contacts.id1 = params['id1'];
                    this.contacts.id2 = params['id2'];
                }
                ); //in order to watch for a change in the params section we subscribe to it
    }
    
    //DynamicPaamter method
    DynamicParamter(id:number){
    //will navigate to  '/contact/2/edit?allowEdit=4#waiting'     
     this.router.navigate(['/contact', id, 'edit'], {queryParams: {allowEdit: '4'}, fragment: 'waiting' });
    }
    
    
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';//Router component added from @angular/router
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    //variable used to get retrive static data from route
    userMessage: string;

     //private key word used to assign instance (router) of "Router" component
      //private key word used to assign instance (route) of "ActivatedRoute" component
    constructor(private router: Router, private route: ActivatedRoute) { }
    
    //method used to reload the current page
    Reloadpage(){
        //links to the Router components method 'navigate' which will go to a different/set path from within another component.
        //relativeTo allows us to link to a relative to the path that we are already on
        this.router.navigate(['user'], {relativeTo: this.route});
    }
    
    ngOnInit() {
        //assigned userMessage variable to a snapshot of data property value
        this.userMessage = this.route.snapshot.data['message'];
        
        /*
        in case you want to subscribe to the asynchronously to the routes data
        
        this.route.data.subscribe(
        (data:Data) =>{
            this.userMessage = data['message'];
        }
        
        )*/
    }

}

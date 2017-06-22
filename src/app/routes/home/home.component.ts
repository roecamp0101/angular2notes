import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//Router component added from @angular/router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //private key word used to assign instance (router) of "Router" component
    constructor(private router: Router) { }

    ngOnInit() {
    }
    
    //method used to navigate to users page
    UserpageNav(){
        //links to the Router components method 'navigate' which will navigate to a different/set path from within another component
        this.router.navigate(['/user']);
    }

}

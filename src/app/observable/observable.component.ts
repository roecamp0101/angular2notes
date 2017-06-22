import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
    //variable id used to present the param numbers
    id: number;
    
    //use the private key word to attach the alias ( route ) to ActivatedRoute
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
    //subscribing to the change in the parameters route
    this.route.params
      .subscribe(
        (params: Params) => {
            this.id = +params['id'];

        },
        //complete function when observable is done
        (data:string) =>{
            console.log(data)
        },
        //error function if observable has an error.
        /*(error) => {
            console.log(error);
        }*/
    );
}
    
    
   
    

 }

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';//NgForm used to gain local reference to form within ' (ngSubmit) '

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    //variable for radio button form
    genders: string[] = ['male', 'female'];

    constructor() { }

    ngOnInit() {
    }
  
   @ViewChild('f') formaccess: NgForm; //ViewChild() method will give you access to the local reference within the form ('f') then you can access the form with instance 'formaccess'. 
    
    //onSubmit method with form as a paremeter attached to the NgForm module
    onSubmit(form: NgForm){
        //testing if submit method is correct when submit is clicked
        console.log('submitted');
        //will log out the whole form when submit is clicked
        console.log(form);
      
        //will also log out the whole form when submit is clicked through the ViewChild method.
        console.log(this.formaccess)
        
        //the ' reset() ' method on the form alias will clear out the form when the user has finsihed submiting their information.
        form.reset();

    }

}

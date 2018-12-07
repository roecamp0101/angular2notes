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
    defaultValue = "Hey I'm a default value";

    constructor() { }

    ngOnInit() {
    }
  
   info = { //info object that will reference the fields within the form
        firstname: '', //the firstname field
        email: '', //the email field
        lastname: '', //the lastname field
        password: '' //the password field
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
      
                                                                                                                                                       /*formaccess is the ViewChild() instance of the form*/
        this.info.firstname = this.formaccess.value.firstname; //now you are calling on the info object firstname property and assigning it to this.formaccess.value.firstname. //The value of the firstname field will be assigned to this variable.
        this.info.lastname = this.formaccess.value.lastname;  //now you are calling on the info object lastname property and assigning it to this.formaccess.value.lastname. //The value of the lastname field will be assigned to this variable.
        this.info.email = this.formaccess.value.email;  //now you are calling on the info object email property and assigning it to this.formaccess.value.email. //The value of the email field will be assigned to this variable.
        this.info.password = this.formaccess.value.password; //now you are calling on the info object password property and assigning it to this.formaccess.value.password. //The value of the password field will be assigned to this variable.
        
        //the ' reset() ' method on the form alias will clear out the form when the user has finsihed submiting their information.
        form.reset();

    }

}

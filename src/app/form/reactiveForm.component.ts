import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  gender = ['male', 'female'];
  forbiddenNames = ['Max', 'Amy'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl (null, Validators.required),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, Validators.required),
      'gender': new FormControl('male'),
      'userData': new FormGroup({
        'select': new FormControl(2, Validators.required),
        'info': new FormControl(null, Validators.required)
      }),
        'hobbies': new FormArray([])

    })
  }

  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset()//resets the form
  }

  addHobbys(){
    const newcontrol = new FormControl(null, Validators.required);

      (<FormArray>this.signupForm.get('hobbies')).push(newcontrol)
  }

/*
  forbidden(control: FormControl){
    if(this.forbiddenNames.indexOf(control.value)){
      return {'nameIsForbidden': true}
    }
    return null;
  }
  */

}

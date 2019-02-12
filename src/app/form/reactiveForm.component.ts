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
      'username': new FormControl (null, Validators.required /*this.forbidden.bind(this)]*/),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, Validators.required),
      'gender': new FormControl('male'),
      'userData': new FormGroup({
        'select': new FormControl(2, Validators.required),
        'info': new FormControl(null, Validators.required)
      }),
        'hobbies': new FormArray([])

    });


    //setValue is for populating the whole form.

    /*this.signupForm.setValue({
      'name': 'Ricky Rick',
      'email': 'johnJohnny@cs.com',
      'userData': {
        'info': 'Ill be on the way, yeah...',
        'select' : 2
      },
      'username': 'rollie, rollie dab a ranch',
      'password': 'u080941',
      'gender': 'male',
      'hobbies': [],

    });*/


    //patchValue is for updating sections of the form.
    this.signupForm.patchValue({
      'name': 'Ricky Rick',
      'username': 'We Chillin...No??',
      'email': 'johnJohnny@cs.com'
    });

    /*this.signupForm.valueChanges.subscribe(
      (value: any) => console.log(value)
    )*/

    /*this.signupForm.statusChanges.subscribe(
      (status:any) => console.log(status)
    )*/

  }

  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset()//resets the form
  }

  addHobbys(){
    const newcontrol = new FormControl(null, Validators.required);

      (<FormArray>this.signupForm.get('hobbies')).push(newcontrol)
  }

  resetForm(){
      this.signupForm.reset()
      console.log(this.signupForm)
  }

/*
  forbidden(control: FormControl){
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }
*/

}

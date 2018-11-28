import { RegisterService } from './../services/register.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forbiddenNameValidator } from '../shared/forbidden-name.validator';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reactive-form-and-validations',
  templateUrl: './reactive-form-and-validations.component.html',
  styleUrls: ['./reactive-form-and-validations.component.css']
})
export class ReactiveFormAndValidationsComponent implements OnInit {

  private reactiveFormModel: FormGroup;

  get _userName(){
    return this.reactiveFormModel.get('userName');
  }

  get _password(){
    return this.reactiveFormModel.get('password');
  }

  get _email(){
    return this.reactiveFormModel.get('email');
  }

  get alternativEmails(){
    return this.reactiveFormModel.get('alternativEmails') as FormArray;
  }

  addAlternativeEmail(){
    this.alternativEmails.push(this.formBuilder.control(''));
  }

  onSubmit(){
    console.log(this.reactiveFormModel.value);
    this.registerService.register(this.reactiveFormModel.value).subscribe(
      response => console.log('Success!'),
      error => console.error(error)
    );
  }
  
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(){
    this.reactiveFormModel = this.formBuilder.group({
      //userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      password : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/123456/)]],
      confPass : [''],
      email: [''],
      subscribe: [false],
      address : this.formBuilder.group({
        state: [''],
        street: [''],
        city: [''] 
      }),
      alternativEmails: this.formBuilder.array([])
    }, {validator: PasswordValidator});

    this.reactiveFormModel.get('subscribe').valueChanges
        .subscribe(changedValue => {
          const email = this.reactiveFormModel.get('email');
          if(changedValue){
            email.setValidators(Validators.required);
          } else {
            email.clearValidators();
          }
          email.updateValueAndValidity();
        })
  }

  

 

}

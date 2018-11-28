import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  reactiveFormModel = new FormGroup({
    userName : new FormControl("Milan"),
    password : new FormControl(''),
    confPass : new FormControl(''),
    address : new FormGroup({
      state: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl('') 
    })
  });

  // .setValue() function mast be set for entire model
  loadEntireForm(){
    this.reactiveFormModel.setValue({
      userName : "Milan",
      password : 22222,
      confPass : 22222,
      address : {
        state: "Srbija",
        street: "Bulevar destpota Stefana 53/10",
        city: "Belgrade" 
      }
    })
  }

  // .patchValue() function can be partly set
  partlyLoadForm(){
    this.reactiveFormModel.patchValue({
      userName : "Milan",
      address : {
        street: "Bulevar destpota Stefana 53/10",
        city: "Belgrade" 
      }
    })
  }


}

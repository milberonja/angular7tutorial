import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-and-form-builder',
  templateUrl: './reactive-form-and-form-builder.component.html',
  styleUrls: ['./reactive-form-and-form-builder.component.css']
})
export class ReactiveFormAndFormBuilderComponent {

  constructor(private formBuilder: FormBuilder) { }

  reactiveFormModel = this.formBuilder.group({
    userName : "Milan",
      password : 55555,
      confPass : 22222,
      address : this.formBuilder.group({
        state: "Srbija",
        street: "Bulevar destpota Stefana 53/10",
        city: "Belgrade" 
      }) 
  })


}

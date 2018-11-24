import { FormUser } from './../form-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-binding',
  templateUrl: './template-driven-form-binding.component.html',
  styleUrls: ['./template-driven-form-binding.component.css']
})
export class TemplateDrivenFormBindingComponent implements OnInit {

  private topics = ['Angular', 'React', 'Vue'];
  private formUser = new FormUser("Milan", "mil@gmail.com", "063/866-02-62", "Angular", "evening", true);

  ngOnInit() {
  }

}

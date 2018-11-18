import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <br/><hr><br/>
    <h2 style="text-align:center">
      USING SERVICES!
    </h2>

    <div style="text-align:left">
      <h3>Employee List</h3>
      <h3>{{errorMsg}}</h3>
      <ul>
        <li *ngFor="let employee of employees"><h3>{{employee.name}}</h3></li>
      </ul>
    </div>

    <employee-detail-list></employee-detail-list>
  
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-detail-list',
  template: `
  <div style="text-align:left">
    <h3>Employee Detail List</h3>
    <h3>{{errorMsg}}</h3>
    <ul>
      <li *ngFor="let employee of employees"><h3>{{employee.id}}. {{employee.name}} - {{employee.age}}</h3></li>
    </ul>
  </div>
  `,
  styles: []
})
export class EmployeeDetailListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
   this.employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }

}

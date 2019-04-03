import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

results: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData().subscribe((res) => {
      this.results = res;
    });
  }


}

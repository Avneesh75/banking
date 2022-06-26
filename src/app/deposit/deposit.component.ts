import { Component, OnInit } from '@angular/core';
import { Employee, Httpclientservice } from '../httpclient.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  employee: Employee = new Employee('', '', '', '');


  constructor( private httpClientService: Httpclientservice) { }

  ngOnInit(): void {
  }


  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee)
        .subscribe( data => {
          this. employee = new Employee('', '', '', '');

          alert(data.name + ' Your Message Send successfully.');
          console.log('employee' + data);
        });
      }
      
      }

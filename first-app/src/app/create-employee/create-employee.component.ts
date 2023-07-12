import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

   employees: Employee= new Employee();
  constructor(private employeeService:EmployeeService,
   private router: Router){}
    
  ngOnInit():void{

  }

  saveEmployee(){
    console.log(this.employees);
    
    this.employeeService.addEmployee(this.employees).subscribe(data =>{
      console.log(data);
      this.goBack();
    },
    error=>
    console.log(error));
  }
 
  goBack(){
    this.router.navigate(['/employees'])
  }
  onSubmit(){
    console.log(this.employees)
    this.saveEmployee();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
     
    id!:number;
    employee: Employee=new Employee();

    constructor(private employeeService:EmployeeService,
      private router:Router,
      private route:ActivatedRoute){}

      ngOnInit(): void {
          this.id=this.route.snapshot.params['id'];

          this.employeeService.getById(this.id).subscribe(data =>{
            console.log(data);
            this.employee=data;
          },
          error => console.log(error));
      }
     
      onSubmit(){
        console.log(this.employee)
        this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
        this.goBack();
        }, error=> console.log(error));
      }
      
      goBack(){
        this.router.navigate(['/employees'])
      }
      }



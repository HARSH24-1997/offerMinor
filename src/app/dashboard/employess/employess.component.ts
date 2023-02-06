import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent {
  employees:any=[];
  constructor(private employeeService:EmployeesService){}

  ngOnInit(){
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.employeeService.getAllEmpoyees().subscribe((resp: any)=>{
      this.employees = resp.data;
      console.log(this.employees,"21")
    })
  }

  // updateCompanyById(query:any,id:String){
  //   // this.companyService.updateCompanyInformation()
  // }

  // getCompanyById(id:String){
  //   this.employeeService.getCompanyById(id).subscribe((resp:any)=>{
      
  //   })
  // }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent {

  employees:any=[];
  constructor(private router:Router,private employeeService:EmployeesService){}

  ngOnInit(){
    this.getAllEmployees()
  }

  status(val:any):String{
    if(val==1){
      return "Offer Accepted"
    }
    if(val==2){
      return "Offer Rejected"
    }
    if(val==3){
      return "Joined"
    }
    if(val==4){
      return "Joined and Leave"
    }
    if(val==5){
      return "Abscord"
    }
    return "Offer Accepted"
  }

  getAllEmployees(){
    this.employeeService.getAllEmpoyees().subscribe((resp: any)=>{
      this.employees = resp.data;
      console.log(this.employees,"21")
    })
  }

  openUpdate(data:any){
    console.log(data._id);
    this.router.navigateByUrl(`dashboard/update/${data._id}`)
  }
}

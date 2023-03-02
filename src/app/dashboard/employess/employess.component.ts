import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent {
  
  searchText:any = '';
  employees:any=[];
  tempEmployees:any=[];
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
      return "Abscond"
    }
    return "Offer Accepted"
  }

  getSearchangeonRegex(){
    if(this.searchText==""){
      this.employees = this.tempEmployees;
    }
    console.log(this.searchText);
    var temp:any  = []
    this.tempEmployees.map((comp:any,index:any) =>{
     if(comp.name.toLowerCase().includes(this.searchText.toLowerCase())){
        temp.push(comp);
     }
     this.employees = temp;
    })
  }

  getAllEmployees(){
    this.employeeService.getAllEmpoyees().subscribe((resp: any)=>{
      this.employees = resp.data;
      this.tempEmployees = resp.data;
    })
  }

  openUpdate(data:any){
    console.log(data._id);
    this.router.navigateByUrl(`dashboard/update/${data._id}`)
  }
}

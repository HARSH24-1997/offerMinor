import { Component } from '@angular/core';
import { ReportsService } from 'src/app/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  companyCount:any = 0;
  employeeCount:any = 0;
  faultCount:any = 0;
  tempUserList:any = []
  cList:any = []

  constructor(private reportsService:ReportsService){}

  ngOnInit(){
    this.getAllCompanies()
    this.getAllEmployee()
    this.getAllFaultEmployee()
    this.tempUser()
    this.companyWiseEmployee()
  }

  getAllCompanies() {
    this.reportsService.getCompanyCountData().subscribe((resp:any)=>{
      console.log(resp,"27")
      this.companyCount = resp.userscount;
    })
  }
  getAllEmployee() {
    this.reportsService.getEmployeeCount().subscribe((resp:any)=>{
      console.log(resp,"32")
      this.employeeCount = resp.Employee;
    })
  }
  getAllFaultEmployee() {
    // this.reportsService.getFaultCount().subscribe((resp:any)=>{
    //   this.faultCount = resp;
    // })
    console.log()
    this.faultCount = 0;
  }
  companyWiseEmployee(){
    this.reportsService.getCompanyWiseData().subscribe((resp:any)=>{
      console.log(resp,"list");
      this.cList = resp.data;
    })
  }
  tempUser(){
    this.reportsService.gettempUserList().subscribe((resp:any)=>{
      console.log(resp,"list");
      this.tempUserList = resp.users;
    })
  }
}

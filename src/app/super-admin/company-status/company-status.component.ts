import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/companies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-status',
  templateUrl: './company-status.component.html',
  styleUrls: ['./company-status.component.css']
})
export class CompanyStatusComponent {

  companies:any=[];

  constructor(private companyService:CompaniesService){}

  ngOnInit(){
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.companyService.getAllCompanies().subscribe((resp: any)=>{
      this.companies = resp.users;
    })
  }

  updateCompanyById(event:any,data:any){
    this.companyService.updateCompanyInformation(data._id,!data.isActive).subscribe((resp:any)=>{
      console.log("3343434",resp)
    })
  }

  getCompanyById(id:String){
    this.companyService.getCompanyById(id).subscribe((resp:any)=>{
    })
  }

}

import { Component } from '@angular/core';
import { CompaniesService } from 'src/app/companies.service';

@Component({
  selector: 'app-company-status',
  templateUrl: './company-status.component.html',
  styleUrls: ['./company-status.component.css']
})
export class CompanyStatusComponent {

  companies:any=[];

  constructor(private companyService:CompaniesService){
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.companyService.getAllCompanies().subscribe((resp: any)=>{
      console.log(resp,"19");
      this.companies = resp.users;
      console.log(this.companies,"21")
    })
  }

  updateCompanyById(query:any,id:String){
    // this.companyService.updateCompanyInformation()
  }

  getCompanyById(id:String){
    this.companyService.getCompanyById(id).subscribe((resp:any)=>{
      
    })
  }

}

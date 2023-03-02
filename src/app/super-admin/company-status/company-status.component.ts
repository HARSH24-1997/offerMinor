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
  tempCompanies:any=[];
  searchText:any = '';

  constructor(private companyService:CompaniesService){}

  ngOnInit(){
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.companyService.getAllCompanies().subscribe((resp: any)=>{
      this.companies = resp.users;
      this.tempCompanies = resp.users;
    })
  }

  getSearchangeonRegex(){
    if(this.searchText==""){
      this.companies = this.tempCompanies;
    }
    console.log(this.searchText);
    var temp:any  = []
    this.tempCompanies.map((comp:any,index:any) =>{
     if(comp.companyName.toLowerCase().includes(this.searchText.toLowerCase())){
        temp.push(comp);
     }
     this.companies = temp;
    })
  }

  updateCompanyById(event:any,data:any){
    this.companyService.updateCompanyInformation(data._id,!data.isActive).subscribe((resp:any)=>{
    })
  }

  getCompanyById(id:String){
    this.companyService.getCompanyById(id).subscribe((resp:any)=>{
    })
  }

  formatDate(date:Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }


  getValue(date:Date){
    return this.formatDate(new Date(date)) 
  }
  updateExpiryDateById(event:any,data:any){
    console.log("343434",event,data);
    if(new Date(event.target.value).getTime()<=new Date().getTime()){
      console.log("I'm less than the new Date");
    }
    this.companyService.updateCompanyInformationExpiryDate(data._id,new Date(event.target.value)).subscribe((resp:any)=>{
    })
  }

}

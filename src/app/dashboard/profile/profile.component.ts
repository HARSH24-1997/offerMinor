import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { CompaniesService } from 'src/app/companies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  cmpData:any={}
  companyData?:FormGroup

  constructor(private companyService : CompaniesService){}

  ngOnInit(){
    this.companyService.getCompanyById(JSON.parse(localStorage.getItem('user') as string)._id).subscribe(resp=>{
      console.log(resp)
      this.cmpData = resp;
      this.companyData = new FormGroup({
        companyName: new FormControl(this.cmpData.companyName?this.cmpData.companyName:""),
        email: new FormControl(this.cmpData.email?this.cmpData.email:""),
        subdomain: new FormControl(this.cmpData.subdomain?this.cmpData.subdomain:""),
        phone: new FormControl(this.cmpData.phone?this.cmpData.phone:""),
      })
    })
    
  }

}

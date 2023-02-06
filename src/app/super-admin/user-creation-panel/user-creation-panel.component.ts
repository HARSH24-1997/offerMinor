import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { CompaniesService } from 'src/app/companies.service';


@Component({
  selector: 'app-user-creation-panel',
  templateUrl: './user-creation-panel.component.html',
  styleUrls: ['./user-creation-panel.component.css']
})
export class UserCreationPanelComponent {
  
  status:String = "";
  isLogin:Boolean = false;
  // isSuperAdmin:Boolean = localStorage.get('isSuperAdmin');

  companyForm = new FormGroup({
    companyName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40)
    ]),
    subdomain: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    companyType: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    isActivate: new FormControl('')
  })
  

  constructor (private CompanyService:CompaniesService){}

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    console.log("press")
    if(this.companyForm.status=="VALID"){
      this.CompanyService.createComapany(this.companyForm.value).subscribe(resp=>{
        console.log(resp);
      })
    }
  }


}

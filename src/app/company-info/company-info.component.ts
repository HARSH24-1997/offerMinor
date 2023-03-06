import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { CompaniesService } from 'src/app/companies.service';
import { TempUserService } from '../temp-user.service';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent {
  status:String = "";
  isLogin:Boolean = false;
  dateValidator:string = new Date().toISOString();
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
    companyType: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    // isActivate: new FormControl('')
  })
  

  constructor (private TempUserService:TempUserService){
    console.log("dffdfdfdfdfdfdfdf")
  }

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.companyForm.invalid){
      this.companyForm.setErrors({ incorrect: true }); 
      return ;
    }
      this.TempUserService.createComapany(this.companyForm.value).subscribe({
       next:()=>{},
       complete:()=>{},
       error:(err)=>{
        if(err.status=='0'){
          this.companyForm.setErrors({ server: true }); 
        }
        if(err.status=='400'){
          this.companyForm.setErrors({ incorrect: true }); 
        }
        else{
          this.companyForm.setErrors({ unknown: true }); 
        }
       }
      })
  }

}

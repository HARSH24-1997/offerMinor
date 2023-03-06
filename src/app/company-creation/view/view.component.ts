import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { CompaniesService } from 'src/app/companies.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

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
    expiryDate: new FormControl('',[
      Validators.required,
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
  

  constructor (private CompanyService:CompaniesService){
    console.log("dffdfdfdfdfdfdfdf")
  }

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.companyForm.invalid){
      this.companyForm.setErrors({ incorrect: true }); 
      return ;
    }
    if(this.companyForm.value.expiryDate){
      if(new Date(this.companyForm.value.expiryDate).getTime()<=new Date().getTime()){
        this.companyForm.setErrors({ date: true }); 
      }
      return ;
    }
      this.CompanyService.createComapany(this.companyForm.value).subscribe({
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

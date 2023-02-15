import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent {

  status:String = "";
  isLogin:Boolean = false;
  // isSuperAdmin:Boolean = localStorage.get('isSuperAdmin');

  employeeForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    code: new FormControl('',[
    
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    panCardId: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    aadharCardId: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    dateOfOffer: new FormControl('',[
    ]),
    dateOfJoining: new FormControl('',[
    ]),
    status: new FormControl('',[
    ]),
    Remarks: new FormControl('',[
    ]),
    isActivate: new FormControl('')
  })

  constructor(private EmployeesService : EmployeesService){}

  onFormSubmit = (event: any) => {
    event.preventDefault();
    if (this.employeeForm.invalid) {
      return;
    }
    this.EmployeesService.createEmployee(this.employeeForm.value).subscribe({
      next:()=>{

      },
      complete:()=>{

      },
      error:(err)=>{

      }
    })

  }
}

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
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    panCardId: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    dateOfOffer: new FormControl('',[
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(20)
    ]),
    dateOfJoining: new FormControl('',[
      // Validators.required,
      // Validators.minLength(3),
      // Validators.maxLength(20)
    ]),
    status: new FormControl('',[
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

import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  // @Output() submitted = new EventEmitter<any>(); //type

  status:String = "";
  isLogin:Boolean = false;

  authForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  })
  

  constructor (private AuthService:AuthenticationService){}

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.authForm.status=="VALID"){
      this.AuthService.login(this.authForm.value).subscribe(resp=>{
        
      })
    }
  }

}

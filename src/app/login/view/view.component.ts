import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
      Validators.maxLength(40)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  }) 
  

  constructor (private AuthService:AuthenticationService,private router:Router,private cookieService:CookieService){}

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.authForm.invalid){
      return ;
    }
    this.AuthService.login(this.authForm.value).subscribe({
      next:(response:any)=>{
        localStorage.setItem('token',response.token)
        this.cookieService.set('jwttt',response.token);
        if(response.isSuperAdmin){
          this.router.navigateByUrl('/sAdmin');
        }
        else{
          this.router.navigateByUrl('/dashboard');
        }
      },
      complete:()=>{
        this.AuthService.getMe(this.cookieService.get('jwttt')).subscribe({})
      },
      error:(err)=>{

      }  
    })
  }

}

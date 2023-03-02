import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Location} from '@angular/common';


var URL = ""
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {

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

  constructor (private _location: Location,
    private route: ActivatedRoute,
    private AuthService:AuthenticationService,
    private router:Router,private cookieService:CookieService)
    {}

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.authForm.invalid){
      this.authForm.setErrors({ incorrect: true }); 
      return ;
    }
    this.AuthService.login(this.authForm.value).subscribe({
      next:(response:any)=>{
        console.log(response)
        localStorage.setItem('token',response.token)
        this.cookieService.set('jwttt',response.token);
        if (response.isSuperAdmin) {
          window.location.assign("")
        }
        else {
          window.location.assign("")
        }         
      },
      complete:()=>{
      },
      error:(err)=>{
        if(err.status=="0"){
          this.authForm.setErrors({ server: true });
        }
        if(err.status=="400"){
          this.authForm.setErrors({ incorrect: true });
        }
        if(err.status=="404"){
          this.authForm.setErrors({ inActive: true });
        }
        this.router.navigateByUrl('/login');
      }  
    })
  }

}

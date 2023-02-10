import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Location} from '@angular/common';

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
  

  constructor (private _location: Location,private route: ActivatedRoute,private AuthService:AuthenticationService,private router:Router,private cookieService:CookieService){}

  onFormSubmit = (event:any)=>{
    event.preventDefault();
    if(this.authForm.invalid){
      return ;
    }
    this.AuthService.login(this.authForm.value).subscribe({
      next:(response:any)=>{
        localStorage.setItem('token',response.token)
        this.cookieService.set('jwttt',response.token);
        if (response.isSuperAdmin) {
          window.location.assign("http://localhost:4200/sAdmin")
        }
        else {
          window.location.assign("http://localhost:4200/dashboard")
        }         
      },
      complete:()=>{
      },
      error:(err)=>{
        this.router.navigateByUrl('/login');
      }  
    })
  }

}

import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'offerMinor';
  signedIn:any = false;
  superAdmin:any = false;
  constructor(private authService : AuthenticationService,private cookieService:CookieService,private router:Router){
    this.authService.authorizationCheck(this.cookieService.get('jwttt')).subscribe({
      next:()=>{

      },
      complete:()=>{

      },
      error:(err)=>{
        this.cookieService.deleteAll()
        console.log("window.location.pathname",window.location.pathname)
      if(window.location.pathname=="/newUser"){
        this.router.navigateByUrl('/newUser');

      }else{
        this.router.navigateByUrl('/login');
      }
      }
    }
    )
  }
  ngOnInit(){
    this.authService.signedIn.subscribe((signedIn: any)=>{
      console.log(signedIn)
      this.signedIn = signedIn
    })
    this.authService.superAdmin.subscribe((superAdmin: any)=>{
      console.log(superAdmin)
      this.superAdmin = superAdmin
    })
  }

  logOut(){
    this.cookieService.deleteAll()
    this.cookieService.delete('jwttt');
    this.authService.logOut().subscribe(()=>{
      this.router.navigateByUrl('/login');

    })
  }
}

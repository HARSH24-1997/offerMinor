import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'offerMinor';
  signedIn = false;
  superAdmin = false;
  constructor(private authService : AuthenticationService){}
  ngOnInit(){
    this.authService.signedIn.subscribe(signedIn=>{
      this.signedIn = signedIn
    })
    this.authService.superAdmin.subscribe(superAdmin=>{
      this.superAdmin = superAdmin
    })
  }
}

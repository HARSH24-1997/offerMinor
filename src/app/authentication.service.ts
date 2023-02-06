import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  signedIn = new BehaviorSubject(false);
  superAdmin = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  login(data:any){
     return this.http.post('http://localhost:9000/auth/login',{
      username:data.userName,
      password:data.password
    },{
      withCredentials:true
    }).pipe(tap((val:any)=>{
      if(val.isSuperAdmin){
        this.superAdmin.next(true);
      }
      this.signedIn.next(true)
    }))
  }

  logOut(){

  }

  getMe(value:string){
     return this.http.get('http://localhost:9000/user/getMe',{
      headers:{
        "Authorization":"Bearer " + value
      },withCredentials:true
     }).pipe(tap((val:any)=>{
      localStorage.setItem('user',JSON.stringify(val));
    }))
  }
}

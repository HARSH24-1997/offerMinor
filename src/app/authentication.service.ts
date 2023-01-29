import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data:any){
    console.log(data.userName,data.password,"service")
     return this.http.post('http://localhost:9000/auth/login',{
      username:data.userName,
      password:data.password
    })

  }

  signup(username:String,password:String){
    console.log(username,password)
    // return this.http.get('http://localhost:9000/',{
    
    // })

  }

  userLogin(){

  }

  logOut(){

  }

  isActive(){

  }

  isSuperAdmin(){
    
  }
}

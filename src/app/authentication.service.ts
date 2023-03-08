import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

var URL = "https://thepeopleorderserver.onrender.com"
//  var URL = "http://localhost:9000"



@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  signedIn: any = new BehaviorSubject(null);
  superAdmin: any = new BehaviorSubject(null);
  signedOut: any = new BehaviorSubject(true);

  constructor(private http: HttpClient, private router: Router) { }

  login(data: any) {
    return this.http.post(`${URL}/auth/login`, {
      username: data.userName,
      password: data.password
    }, {
      withCredentials: true
    }).pipe(tap((val: any) => {
      if (val.isSuperAdmin) {
        this.superAdmin.next(true);
      }
      if (val.isSigned) {
        this.signedIn.next(true)
        this.signedOut.next(false)
      }
    }))
  }

  logOut() {
    return this.http.get(`${URL}/auth/logOut`, {
      withCredentials: true
    }).pipe(tap((val: any) => {
      localStorage.clear();
      this.signedIn.next(null)
      this.superAdmin.next(null);
      this.signedOut.next(true);
    }))
  }

  getMe(value: string) {
    return this.http.get(`${URL}/user/getMe`, {
      headers: {
        "Authorization": "Bearer " + value
      }, withCredentials: true
    }).pipe(tap((val: any) => {
      localStorage.setItem('user', JSON.stringify(val));
    }))
  }

  authorizationCheck(value: string) {
    return this.http.get(`${URL}/auth/status`, {
      headers: {
        "Authorization": "Bearer " + value
      }, withCredentials: true
    }).pipe(tap((val: any) => {
      if (val.isSigned) {
        localStorage.setItem('user', JSON.stringify(val.user));
        if (val.isSuperAdmin) {
          this.superAdmin.next(true);
        }
        this.signedIn.next(true)
        this.signedOut.next(false)
      }
      else {
        this.signedOut.next(true)
        this.router.navigateByUrl('/login')
      }
    }))
  }
}

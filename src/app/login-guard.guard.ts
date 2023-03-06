import { Injectable } from '@angular/core';
import {ActivatedRoute, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take,tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanLoad {
  constructor(private activeRoute:ActivatedRoute,private authservice:AuthenticationService,private router:Router){}  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return true;
  }
}

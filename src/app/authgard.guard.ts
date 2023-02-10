import { Injectable } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take,tap } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardGuard implements CanLoad {

  constructor(private activeRoute:ActivatedRoute,private authservice:AuthenticationService,private router:Router){};

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authservice.signedIn.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticate)=>{
        if(!authenticate){
          this.router.navigateByUrl('/login')
        }
      })
    );
  }
}

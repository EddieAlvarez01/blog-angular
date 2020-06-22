import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router: Router
  ){}

  canActivate(){
    if(!this._userService.getUser()){
      return true
    }
    this._router.navigate(['/home']);
    return false;
  }
  
}

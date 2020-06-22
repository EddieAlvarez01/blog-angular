import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService
  ){}
  
  canActivate() {
    if(this._userService.getUser()){
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
  
}

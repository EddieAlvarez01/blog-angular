import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'blog-angular';

  public user;
  
  public token;

  constructor(
    public _userService: UserService
  ){
    this.checkUser();
  }

  ngOnInit(){

  }
  
  ngDoCheck(){
    this.checkUser();
  }


  //CARGA USUARIO EN SESION
  checkUser(){
    this.user = this._userService.getUser();
  }

}

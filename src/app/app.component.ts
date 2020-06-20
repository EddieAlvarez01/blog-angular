import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/User';
import { global } from './services/global';
import { Category } from './models/Category';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'blog-angular';

  public user: User;
  public categories: Category[] = [];
  
  public url: string = global.url;

  constructor(
    public _userService: UserService,
    private _categoryService: CategoryService
  ){
    this.checkUser();
  }

  ngOnInit(){
    this._categoryService.getAll().subscribe(
      res => {
        this.categories = res.categories;
      },
      error => {
        console.log(error);
        this.categories = [];
      }
    );
  }
  
  ngDoCheck(){
    this.checkUser();
  }


  //CARGA USUARIO EN SESION
  checkUser(){
    this.user = this._userService.getUser();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public page_title: string;
  public user: User;
  public errorsValidationLaravel: any;
  public status: string;

  constructor(
    private _userService: UserService
  ) { 
    this.page_title = 'Ajustes';
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

  //GUARDAR CAMBIOS DEL PERFIL
  onSubmit(form: NgForm){
    this._userService.update(this.user).subscribe(
      res => {
        console.log(res);
        this.user.name = res.user.name;
        this.user.surname = res.user.surname;
        this.user.email = res.user.email;
        this.user.description = res.user.description;
        this.user.image = res.user.image;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.status = 'success';
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

}

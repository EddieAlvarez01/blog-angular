import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public errorsValidationLaravel: any;

  constructor(
    private userService: UserService
  ) { 
    this.page_title = 'Registrate';
    this.user = new User(1, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.user.password == this.user.password_confirmation){    //VALIDACION DE COINCIDENCIAS DE CONTRASEÑAS
      this.errorsValidationLaravel = null;
      this.userService.register(this.user).subscribe(   //CONSUMIR API
        res => {
          console.log(res);
          this.status = 'success';
          form.reset();
        },
        error => {
          if(error.error.hasOwnProperty('errors')){
            this.errorsValidationLaravel = error.error.errors;
          }
          this.status = 'failed';
        }
      );
    }
  }

}

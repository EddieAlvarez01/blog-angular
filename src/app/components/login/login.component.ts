import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public flag: boolean = false;

  constructor(
    private userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = 'Identificate';
    this.user = new User(1, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {

    //SE EJECUTA SOLO CUNADO LE LLEGA 1 POR URL
    this.logout();

  }


  //LE DA LOGEAR AL FORM
  onSubmit(form: NgForm){
    this.userService.login(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.auth.token);
        localStorage.setItem('expire_in', res.auth.exp);
        localStorage.setItem('user', JSON.stringify(res.user));
        this._router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

  //CERRAR SESIÓN DEL USUARIO
  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];   //TRAER EL PARAMETRO POR URL, CONVERTIRLO A NUMERO CON UN MAS ADELANTE
      if(logout == 1){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('expire_in');
        this._router.navigate(['home']);
      }
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  //REGISTRAR UN USUARIO
  register(user: User): Observable<any>{
    return this.http.post(global.url + 'user/create', user, {headers: global.headers(false, true)});
  }

  //LOGEAR USUARIO
  login(user: User): Observable<any>{
    return this.http.post(global.url + 'user/login', user, {headers: global.headers(false, true)});
  }

  //TRAER EL USUARIO LOGEADO
  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user != 'undefined'){
      return user;
    }
    return null;
  }

  //TRAER TOKEN
  getToken(){
    let token = localStorage.getItem('token');
    if(token && token != 'undefined'){
      return token;
    }
    return null;
  }

}

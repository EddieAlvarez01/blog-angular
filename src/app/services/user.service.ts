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
    return this.http.post(global.url + 'user/create', user);
  }

  //LOGEAR USUARIO
  login(user: User): Observable<any>{
    return this.http.post(global.url + 'user/login', user);
  }


  //ACTUALIZAR INFORMACIÓN DEL USUARIO
  update(user: User): Observable<any>{
    const formData = new FormData();

    //PASAR AL FORM DATA LOS VALORES PARA ACTUALIZAR
    formData.append('name', user.name);
    formData.append('surname', user.surname);
    formData.append('email', user.email);
    formData.append('description', user.description);
    let user2 = this.getUser();
    if(user != '' && user.image != user2.image){
      formData.append('image', user.image);
    }
    return this.http.post(global.url + 'user/update?_method=PUT', formData, global.auth);
  }

  //TRAER EL USUARIO LOGEADO
  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user != 'undefined'){
      return user;
    }
    return null;
  }

  //TRAER INFORMACIÓN DE UN USUARIO
  getUserInfo(id: number): Observable<any>{
    return this.http.get(global.url + 'user/get-user/' + id);
  }

}

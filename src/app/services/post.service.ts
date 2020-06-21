import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { global } from './global'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  //CREAR NUEVO POST
  create(post: Post): Observable<any>{
    let formData = new FormData();
    formData.append('category_id', post.category.toString());
    formData.append('title', post.title);
    formData.append('content', post.content);
    if(post.image != ''){       //SI NO VIENE NO AÑADIRLA A LA REQUEST, PARA EVITAR PROBLEMAS CON EL VALIDADOR DEL BACKEND
      formData.append('image', post.image);
    }
    return this.http.post(global.url + 'post', formData, global.auth);
  }

  //TRAER TODOS LOS POSTS
  getAll(): Observable<any>{
    return this.http.get(global.url + 'post');
  }

}

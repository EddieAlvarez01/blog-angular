import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  //CREAR UNA CATEGORIA
  create(category: Category): Observable<any>{
    return this.http.post(global.url + 'category', category, global.auth);
  }

  //TRAER TODAS LAS CATEGORIAS
  getAll(): Observable<any>{
    return this.http.get(global.url + 'category');
  }

  //TRAER UNA CATEGORIA
  getCategoryById(id: number): Observable<any>{
    return this.http.get(global.url + 'category/' + id);
  }

}

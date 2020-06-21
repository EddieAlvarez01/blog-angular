import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { global } from 'src/app/services/global';
import { Category } from 'src/app/models/Category';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public page_title: string;
  public post: Post;
  public categories: Category[] = [];
  public status: string;
  public editor = global.editor;    //EDITOR DE TEXTAREA
  public config = global.options;   //CONFIGURACION DEL EDITOR DEL TEXTAREA

  constructor(
    private _categoryService: CategoryService,
    private _router: Router,
    private _postService: PostService
  ) { 
    this.page_title = 'Crear un nuevo post';
    this.post = new Post(0, '', 1, '', '', '', '');
  }

  ngOnInit(): void {
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

  //SUBMIT EN EL FORM, CREA EL POST
  onSubmit(form: NgForm){
    console.log(this.post);
    this._postService.create(this.post).subscribe(
      res => {
        this._router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

  //CAPTURAR IMAGEN DEL POST
  captureImage(file: FileList){
    this.post.image = file.item(0);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { global } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public page_title: string;
  public status: string;
  public post: any;
  public categories: Category[];
  public config = global.options;
  public editor = global.editor;

  constructor(
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _postService: PostService,
    private _userService: UserService
  ) {
    this.page_title = 'Editar post';
   }

  ngOnInit(): void {
    this.getCategories();
    this._route.params.subscribe(   //TRAER ID DE LA URL
      params => {
        this.getPost(+params['id']);
      }
    );
  }

  //CARGAR CATEGORIAS
  getCategories(){
    this._categoryService.getAll().subscribe(
      res => {
        this.categories = res.categories;
      },
      error => {
        console.log(error);
      }
    );
  }

  //TRAER EL POST
  getPost(id: number){
    this._postService.getPostById(id).subscribe(
      res => {
        this.post = res.post;
        let user = this._userService.getUser();
        if(user.id != this.post.user_id){
          this._router.navigate(['/home']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  //GUARDA LA EDICION DEL POST
  onSubmit(form: NgForm){
    this._postService.update(this.post).subscribe(
      res => {
        //REDIRIGIR A LA PAGINA DEL POST
        this._router.navigate(['/get-post', res.post.id]);
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

  //capturar imagen del post
  captureImage(files: FileList){
    this.post.image = files.item(0);
  }

}

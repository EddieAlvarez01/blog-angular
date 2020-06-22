import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { global } from 'src/app/services/global';
import { User } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  public page_title: string;
  public posts: Post[];
  public url: string = global.url;
  public user: User;

  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _categoryService: CategoryService
  ) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        this.getCategory(+params['id']);
        this.getPosts(+params['id']);
      }
    );
    this.user = this._userService.getUser();
  }

  //TRAEAR TODOS LOS POSTS DE LA CATEGORIA
  getPosts(category: number){
    this._postService.getPostsByCategory(category).subscribe(
      res => {
        this.posts = res.posts;
      },
      error => {
        console.log(error);
        this.posts = [];
      }
    );
  }

  //TRAER LA CATEGORIA
  getCategory(id: number){
    this._categoryService.getCategoryById(id).subscribe(
      res => {
        this.page_title = res.category.name;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Borrar post
  deletePost(id: number, index: number){
    this._postService.delete(id).subscribe(
      res => {
        this.posts.splice(index, 1);
      },
      error => {
        console.log(error);
      }
    );
  }

}

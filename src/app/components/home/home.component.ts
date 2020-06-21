import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { global } from 'src/app/services/global';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public page_title: string;
  public posts: Post[];
  public url: string = global.url;
  public user: User;

  constructor(
    private _postService: PostService,
    private _userService: UserService
  ) { 
    this.page_title = 'Inicio';
  }

  ngOnInit(): void {
    this.getPosts();
    this.user = this._userService.getUser();
  }

  //TRAEAR TODOS LOS POSTS
  getPosts(){
    this._postService.getAll().subscribe(
      res => {
        this.posts = res.posts;
        console.log(this.posts);
      },
      error => {
        console.log(error);
        this.posts = [];
      }
    );
  }

}

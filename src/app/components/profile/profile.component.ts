import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { global } from 'src/app/services/global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public posts: any[];
  public user: User;
  public url = global.url;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser(+this._route.snapshot.params.id);
    this.getPosts(+this._route.snapshot.params.id);
  }

  //TRAER LOS POSTS DEL USUARIO
  getPosts(id: number){
    this._postService.getPostByUser(id).subscribe(
      res => {
        this.posts = res.posts;
      },
      error => {
        console.log(error);
      }
    );
  }

  //TRAER DATOS DEL USUARIO
  getUser(id: number){
    this._userService.getUserInfo(id).subscribe(
      res => {
        this.user = res.user;
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

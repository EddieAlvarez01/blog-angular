import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: any;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  //TRAER POST SELECCIONADO
  getPost(){
    new Promise((resolve, reject) => {
      this._route.params.subscribe(params => {    //RECOJER EL ID DEL POST DE LA URL
        resolve(+params['id']);   //PASARLO A INTEGER ANTEPONIENDO '+'
      });
    }).then((id: number) => {
      this._postService.getPostById(id).subscribe(    //TRAER EL POST
        res => {
          this.post = res.post;
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    }).catch((error)=>{
      console.log(error);
    });
  }

}

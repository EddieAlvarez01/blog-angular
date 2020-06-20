import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public page_title: string;
  public category: Category;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categorySerice: CategoryService
  ) {
    this.page_title = 'Crear nueva categoría';
    this.category = new Category(0, '');
   }

  ngOnInit(): void {
  }

  //CREAR CATEGORIA
  onSubmit(form: NgForm){
    this._categorySerice.create(this.category).subscribe(
      res => {
        this.status = 'success';
        form.reset();
        this._router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

}

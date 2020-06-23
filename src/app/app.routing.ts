import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { IdentityGuard } from './services/identity.guard';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
 
//RUTAS
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: UserEditComponent, canActivate: [IdentityGuard]},
    {path: 'create-category', component: CreateCategoryComponent, canActivate: [IdentityGuard]},
    {path: 'create-post', component: CreatePostComponent, canActivate: [IdentityGuard]},
    {path: 'get-post/:id', component: PostDetailComponent},
    {path: 'edit-post/:id', component: EditPostComponent, canActivate: [IdentityGuard]},
    {path: 'category-detail/:id', component: CategoryDetailComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: '**', component: ErrorComponent}     //404  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
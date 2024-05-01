import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NewsManagementComponent } from './Admin/news-management/news-management.component';
import { AuthorManagementComponent } from './Admin/author-management/author-management.component';

const routes: Routes = [
  {path:"",redirectTo:"gallary",pathMatch:"full"},
  {path: "gallary" , component:GallaryComponent},
  {path: "NewsManagement" , component:NewsManagementComponent},
  {path: "AuthorsManagement" , component:AuthorManagementComponent},
  {path: "login" , component:LoginComponent},
  {path:"**",component:NotfoundComponent},
  // {path:"Hosting",component:HostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

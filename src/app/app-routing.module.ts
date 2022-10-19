import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
  {path : "book/list", component : ListBookComponent},
  {path : "book/add", component : AddBookComponent},
  {path : "book/edit", component : EditBookComponent},
  {path : "", redirectTo : "book/list", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

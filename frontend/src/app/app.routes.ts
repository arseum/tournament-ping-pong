import { Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {TodoNewComponent} from "./todo-new/todo-new.component";
import {TournamentEditFormComponent} from "./tournament-edit-form/tournament-edit-form.component";
import {TournamentDetailComponent} from "./tournament-detail/tournament-detail.component";
import {TournamentListComponent} from "./tournament-list/tournament-list.component";

export const routes: Routes = [
  {path:'todo', component: TodoListComponent},
  {path:'todo/new', component: TodoNewComponent},
  {path:'todo-detail/:id', component: TodoDetailComponent},

  {path:'tournaments', component: TournamentListComponent},
  {path:'tournaments/new', component: TournamentEditFormComponent},
  {path:'tournaments/:id', component: TournamentDetailComponent},
];

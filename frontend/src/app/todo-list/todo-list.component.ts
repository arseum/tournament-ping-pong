import { Component } from '@angular/core';
import {TodoService} from "../todo.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf, RouterLink
  ],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  constructor(public todoService: TodoService) {
  }

  onDelete(id: number) {
    console.log('on click delete', id);
    this.todoService.deleteById(id);
  }
}

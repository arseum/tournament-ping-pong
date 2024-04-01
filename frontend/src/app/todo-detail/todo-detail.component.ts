import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Todo, TodoService} from "../todo.service";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf
  ],
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent {
  id: number = -1;
  item: Todo | null;

  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService
  ) {
    this.id = +activatedRoute.snapshot.params['id']
    this.item = todoService.findById(this.id);
  }
}

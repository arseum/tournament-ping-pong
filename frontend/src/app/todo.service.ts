import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items: Todo[]= [
    {id: 1, description: 'Learn Angular'},
    {id: 2, description: 'Learn Typescript'},
    {id: 3, description: 'Learn Html'},
  ];

  constructor() { }

  deleteById(id: number) {
    let idx = this.items.findIndex(x => x.id === id );
    this.items.splice(idx, 1);
  }

  findById(id: number): Todo|null {
    let idx = this.items.findIndex(x => x.id === id );
    return (idx !== -1) ? this.items[idx] : null;
  }
}

import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit{

  constructor() { }

  ngOnInit() { }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
    console.log('todos', this.todoList);
    
  }

  todoList: Todo[] = [
    {id: 1, title: 'Make awesome app', completed: false},
    {id: 2, title: 'Get job as angular developer', completed: false}
  ]
}

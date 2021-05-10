import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit { 
  
  @Input() todo: Todo = {id: 0, title: '', completed: false}
  @Output() onDelete = new EventEmitter<number>()
  constructor() { }

  ngOnInit() { }

  todoDoneIcon = 'check_box_outline_blank'

  deleteTodo(id: number) {
    this.onDelete.emit(id);
  }

  toggleTodo() {
    this.todo.completed = !this.todo.completed;
    this.todoDoneIcon = this.todo.completed ? 'check_box' : 'check_box_outline_blank';
  }

}

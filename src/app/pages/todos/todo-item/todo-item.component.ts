import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { NewTodoComponent } from '../new-todo/new-todo.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();

  todoList: Array<Todo>;
  modalRef: BsModalRef;

  isShowDetails = false;
  // appTodoItem = true;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }
  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.update.emit(this.todo);
  }
  deleteTodo(todoId: number): void {
    this.delete.emit(todoId);
  }
  toggleDetails(): void {
    this.isShowDetails = !this.isShowDetails;
  }
  upTodo(): void {
    this.modalRef = this.modalService.show(
      NewTodoComponent,
      Object.assign(
        {},
        {

          initialState: {
            mytodo: this.todo,
            submit: this.updateTodo.bind(this),
          },
        }
      )
    );
  }
  updateTodo(todo: Todo): void {
    this.update.emit(todo);
  }

}

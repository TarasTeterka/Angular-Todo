import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todoList: Array<Todo>;
  search: string;
  private unsubscribe = new Subject();
  constructor(
    private todoService: TodoService
  ) {

  }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
 this.unsubscribe.next();
 this.unsubscribe.complete();
  }

  updateTodo(todo: Todo): void {
this.todoService.updateTodo(todo)
.pipe(takeUntil(this.unsubscribe))
.subscribe();
  }

  deleteTodo(todoId: number): void{
    this.todoService.deleteTodo(todoId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(() => {
      this.getTodos();
    });
  }

  async addTodo(todo: Todo): Promise<void> {
    const res = await this.todoService.addTodo(todo)
    .toPromise();
    this.getTodos();
  }

   private getTodos(): void {
    this.todoService.getTodos()
    .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => {
          this.todoList = data;
        },
        error => console.error(error)
        );
  }
}



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { FilterBySearchDirective } from './shared/pipes/filterBySearch/filter-by-search.directive';
import { FilterBySearchPipe } from './shared/pipes/filterBySearch/filter-by-search.pipe';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterByPriorityDirective } from './shared/pipes/filterByPriority/filter-by-priority.directive';
import { UserComponent } from './pages/about/user/user.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodosComponent,
    TodoItemComponent,
    NewTodoComponent,
    HighlightDirective,
    FilterBySearchDirective,
    FilterBySearchPipe,
    PageNotFoundComponent,
    AboutComponent,
    NavbarComponent,
    FilterByPriorityDirective,
    UserComponent,
    AboutProjectComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

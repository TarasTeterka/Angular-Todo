import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}`);
  }
  getUser(id): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}/${id}`);
  }
}


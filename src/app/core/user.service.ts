import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get users(): Observable<User[]> {
    return this.http.get<User[]>('users');
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>('users/' + id);
  }
}

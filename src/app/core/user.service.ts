import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USERS_URL = environment.API_URL + '/users/';

  constructor(private http: HttpClient) { }

  get users(): Observable<User[]> {
    return this.http.get<User[]>(this.USERS_URL);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(this.USERS_URL + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private POSTS_URL = environment.API_URL + '/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.POSTS_URL);
  }

  getPostById(id): Observable<Post> {
    return this.http.get<Post>(this.POSTS_URL + id);
  }
}

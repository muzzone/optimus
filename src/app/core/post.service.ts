import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

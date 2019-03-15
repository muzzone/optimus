import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../shared/models/tag.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private TAGS_URL = environment.API_URL + '/tags/';

  constructor(private http: HttpClient) { }

  get tags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.TAGS_URL);
  }
}

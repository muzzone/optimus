import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.model';

@Pipe({
  name: 'filterByTag'
})
export class FilterByTagPipe implements PipeTransform {

  transform(posts: Post[], value?: any): any {
    return value ? posts.filter((post: Post) => post.tags.indexOf(value) >= 0) : posts;
  }

}

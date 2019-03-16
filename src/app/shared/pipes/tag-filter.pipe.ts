import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.model';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(posts: Post[], value?: any): any {
    return value ? posts.filter((post: Post) => post.tags.includes(value)) : posts;
  }

}

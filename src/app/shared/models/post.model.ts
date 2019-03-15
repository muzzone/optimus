import { Tag } from './tag.model';

export class Post {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string,
    public tags: Tag[]
  ) {
  }
}




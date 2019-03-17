
export class Post {
  constructor(
    public userId: number,
    public id: number,
    public author: string,
    public dateOfCreation: any,
    public title: string,
    public shortDescription: string,
    public body: string,
    public tags: string[]
  ) {
  }
}




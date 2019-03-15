import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../../core/post.service';
import { Observable, Subscription } from 'rxjs';
import { Tag } from '../../shared/models/tag.model';
import { TagService } from '../../core/tag.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];

  public posts: Post[];
  public tags: Tag[];

  constructor(private postService: PostService, private tagService: TagService) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(
      this.postService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    }),
    this.tagService.getTags().subscribe((res: Tag[]) => {
      this.tags = res;
    })
    );
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}

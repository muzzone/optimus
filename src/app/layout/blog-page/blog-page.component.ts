import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../../core/post.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  public posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.sub = this.postService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    });
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

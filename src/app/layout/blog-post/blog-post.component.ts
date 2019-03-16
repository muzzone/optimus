import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../../shared/models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  private sub: Subscription;

  public post: Post;
  public postId: string;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.sub = this.postService.getPostById(this.postId).subscribe((res: Post) => {
      this.post = res;
    });
  }

}

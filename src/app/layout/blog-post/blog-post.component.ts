import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../../shared/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UserService } from '../../core/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[];

  public post: Post;
  public postId: string;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
    public ngxSmartModalService: NgxSmartModalService,
  ) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(
      this.postService.getPostById(this.postId).subscribe((res: Post) => {
        this.post = res;
      })
    );
  }

  showUserInfo() {
    this.subscriptions.push(
      this.userService.getUserById(this.post.userId).subscribe((res: User) => {
        this.ngxSmartModalService.getModal('userInfoModal').removeData();
        this.ngxSmartModalService.setModalData(res, 'userInfoModal');
        this.ngxSmartModalService.open('userInfoModal');
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}

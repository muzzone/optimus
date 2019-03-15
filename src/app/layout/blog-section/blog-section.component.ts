import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}

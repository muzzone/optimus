import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostComponent } from './blog-post.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostComponent, PreloaderComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, NgxSmartModalModule],
      providers: [NgxSmartModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

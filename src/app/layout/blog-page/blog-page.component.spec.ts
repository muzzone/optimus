import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageComponent } from './blog-page.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { BlogSectionComponent } from '../blog-section/blog-section.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BlogPageComponent', () => {
  let component: BlogPageComponent;
  let fixture: ComponentFixture<BlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageComponent, BlogSectionComponent, PreloaderComponent ],
      imports: [PipesModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

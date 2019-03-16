import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [LayoutComponent, BlogPageComponent, BlogSectionComponent, BlogPostComponent, PreloaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxSmartModalModule,
    PipesModule
  ]
})
export class LayoutModule {
}

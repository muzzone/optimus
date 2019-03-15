import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'blog', component: BlogPageComponent},
      {path: 'post/:id', component: BlogPostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {
}

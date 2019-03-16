import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFilterPipe } from './tag-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TagFilterPipe],
  exports: [TagFilterPipe]
})
export class PipesModule { }



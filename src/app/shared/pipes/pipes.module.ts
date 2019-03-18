import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByTagPipe } from './filter-by-tag.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FilterByTagPipe],
  exports: [FilterByTagPipe]
})
export class PipesModule { }



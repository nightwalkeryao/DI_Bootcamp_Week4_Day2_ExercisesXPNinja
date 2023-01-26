import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { PutVisibleDirective } from './put-visible.directive';



@NgModule({
  declarations: [
    ItemListComponent,
    PutVisibleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemListComponent,
    PutVisibleDirective
  ]
})
export class MyModuleModule { }

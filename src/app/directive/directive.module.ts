import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfelseComponent } from './directive-ifelse/directive-ifelse.component';



@NgModule({
  declarations: [DirectiveIfComponent, DirectiveIfelseComponent],
  imports: [
    CommonModule
  ],
  exports: [DirectiveIfComponent, DirectiveIfelseComponent]
})
export class DirectiveModule { }

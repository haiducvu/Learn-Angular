import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfelseComponent } from './directive-ifelse/directive-ifelse.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';



@NgModule({
  declarations: [DirectiveIfComponent, DirectiveIfelseComponent, DirectiveForComponent],
  imports: [
    CommonModule
  ],
  exports: [DirectiveIfComponent, DirectiveIfelseComponent, DirectiveForComponent]
})
export class DirectiveModule { }

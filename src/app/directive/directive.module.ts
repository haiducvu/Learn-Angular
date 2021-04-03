import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveIfelseComponent } from './directive-ifelse/directive-ifelse.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { HighlightDirective } from './highlight.directive'; 
  import { from } from 'rxjs';
import { Highlight2Directive } from './highlight2.directive';
import { ButtonHoverDirective } from './button-hover.directive';


@NgModule({
  declarations: [DirectiveIfComponent, DirectiveIfelseComponent, DirectiveForComponent, HighlightDirective, Highlight2Directive, ButtonHoverDirective],
  imports: [
    CommonModule
  ],
  exports: [DirectiveIfComponent, DirectiveIfelseComponent, DirectiveForComponent, HighlightDirective,Highlight2Directive,ButtonHoverDirective]
})
export class DirectiveModule { }

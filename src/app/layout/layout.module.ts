import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutSliderComponent } from './layout-slider/layout-slider.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [LayoutHeaderComponent, LayoutFooterComponent, LayoutSliderComponent],
  imports: [
    CommonModule, FormsModule,
  ],
  exports:[LayoutHeaderComponent]
})
export class LayoutModule { }

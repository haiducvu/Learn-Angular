import { DirectiveModule } from './directive/directive.module';
 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { LayoutModule } from './layout/layout.module';
import { FormBindingComponent } from './form-binding/form-binding.component'; 
import { CoffeeModule } from './coffee/coffee.module';

@NgModule({
  declarations: [
    AppComponent,
    FormBindingComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DirectiveModule,
    FormsModule, 
    CoffeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

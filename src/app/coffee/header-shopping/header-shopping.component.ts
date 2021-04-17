import { Component, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-header-shopping',
  templateUrl: './header-shopping.component.html'
})
export class HeaderShoppingComponent { 
 @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}

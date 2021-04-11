import { ToggleComponent } from './toggle/toggle.component';
import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.scss']
})

export class LienHeComponent implements OnInit {
  @ViewChild(ToggleComponent,{static: true}) toggleComp: ToggleComponent;  // C1 'toogleComp'
  @ViewChild('toggleButton',{static: true}) toggleButton: ElementRef<HTMLButtonElement>;



  constructor() { }
  name = 'Tiep Phan';
  checked = true;
  ngOnInit(): void {
    console.log('onInit',this.toggleComp, this.toggleButton); // kq undifine
    /**
     * Muốn hiển thị trong OnInit thì ViewChild cần có static: true(nếu truyền vào) or false
     * static true chỉ dùng được khi biến tham chiếu không nằm trong structure directive( *ngIf, * ngFor, vv)
     */
  }
  ngAfterViewInit(){
    console.log("ngAfterOnInit",this.toggleComp);    
  } 
}

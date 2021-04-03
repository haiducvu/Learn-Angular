import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive implements OnInit {

  constructor(private El: ElementRef, private renderer2:Renderer2 ) { }
  ngOnInit(){
    this.renderer2.setStyle(this.El.nativeElement,"background-color","red");
    let noidung=this.renderer2.createText('createText');
    this.renderer2.appendChild(this.El.nativeElement,noidung)
  }
}

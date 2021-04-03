import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective implements OnInit{

  constructor(private El:ElementRef, private renderer2: Renderer2) { }
  @HostListener('mouseenter') eventHoverIn(){
    this.renderer2.setStyle(this.El.nativeElement,"background-color","transparent");
  }
  @HostListener('mouseleave') eventHoverOut(){
    this.renderer2.setStyle(this.El.nativeElement,"background-color","yellow");
  }
  ngOnInit(){
    this.renderer2.setStyle(this.El.nativeElement,"background-color",'red');
    this.renderer2.setStyle(this.El.nativeElement,"color",'green');
    this.renderer2.setStyle(this.El.nativeElement,"border",'1px solid red');
  }
}

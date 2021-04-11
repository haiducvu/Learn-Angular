import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  //Vấn đề muốn ToggleComponet ở trong classCompoent=> 
  //khi chạy 1 fuc or 1 api call có subcribe trong compoent sau kho subcrire xong mới toggle
  //=> dùng ViewChild
}

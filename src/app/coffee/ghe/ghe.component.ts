import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() itemGhe;
  @Output() emitStatus= new EventEmitter();
  status:boolean= false;
  constructor() { }
  datGhe(){ 
    this.status= this.status? false: true;
    this.emitStatus.emit(this.status); 
  }
  ngOnInit(): void {
  }

}

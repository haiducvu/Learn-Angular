import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ifelse',
  templateUrl: './directive-ifelse.component.html',
  styleUrls: ['./directive-ifelse.component.scss']
})
export class DirectiveIfelseComponent implements OnInit {

  public status:boolean= true;
  constructor() { }
  DangXuat(){
    this.status= false;
  }
  ngOnInit(): void {
  }

}

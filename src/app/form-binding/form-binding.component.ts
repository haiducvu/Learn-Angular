import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-binding',
  templateUrl: './form-binding.component.html',
  styleUrls: ['./form-binding.component.scss']
})
export class FormBindingComponent implements OnInit {

  public Email: string="twowaybinding";
  public FullName: string="eventbinding"; 
  constructor() { }
  ChangeFullName(fullName: string){
    this.FullName= fullName;
  }
  ngOnInit(): void {
  }

}

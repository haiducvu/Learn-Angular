import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  public name: string="Vu Duc Hai ";
  public obhocVien: any= {Hoten: "Nguyen Van a", GioiTinh: "Nu"}; 
  constructor() { }
  ChangeName(obInput: any){
      // console.log("Name", obInput.getAttribute("inputName"));
      this.obhocVien.Hoten= obInput.value;
  }
  ngOnInit(): void {
  }

}

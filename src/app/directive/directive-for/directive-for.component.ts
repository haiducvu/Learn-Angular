import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.scss']
})
export class DirectiveForComponent implements OnInit {

  public DanhSachSinhVien:Array<any>=[
    {MaSV: "01", HoTen:"Nguyen Van A", Tuoi:15},
    {MaSV: "02", HoTen:"Nguyen Van B", Tuoi:16},
    {MaSV: "03", HoTen:"Nguyen Van C", Tuoi:17},
    {MaSV: "04", HoTen:"Nguyen Van D", Tuoi:18},
  ];

  ThemSinhVien(masv, hoten, tuoi){
    this.DanhSachSinhVien.push({MaSV: masv, HoTen: hoten, Tuoi: tuoi})
  }

  constructor() { }
  ngOnInit(): void {
  }

}

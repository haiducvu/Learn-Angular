import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('formRegister') formDK:NgForm;
  mangNguoiDungDangKy: any[]=[];
  constructor() { }
  register(value){
    console.log("VALUE", value);
    this.mangNguoiDungDangKy.push(value);
    console.log("MANG dc push",this.mangNguoiDungDangKy);
    this.formDK.reset(); // reset lai thong tin o form dk
  }
  CapNhat(thamSo){
    let taikhoan= thamSo.getAttribute('data-taikhoan');
    let matKhau= thamSo.getAttribute('data-matKhau');
    let HoTen= thamSo.getAttribute('data-HoTen');
    let Email= thamSo.getAttribute('data-Email');
    let SoDT= thamSo.getAttribute('data-SoDT');
    let MaLoaiNguoiDung= thamSo.getAttribute('data-MaLoaiNguoiDung');
    this.formDK.setValue({
      TaiKhoan:taikhoan,
      matKhau:matKhau,
      HoTen:HoTen,
      Email:Email,
      SoDT:SoDT,
      MaLoaiNguoiDung:MaLoaiNguoiDung,
    })
  }
  
  ngOnInit(): void {
  }

}

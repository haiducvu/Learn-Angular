import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {
  DanhSachPhimDangChieu=[
    {TenPhim:" Sắp chiếu Tên phim 1", HinhAnh:"Hình Ảnh 1"},
    {TenPhim:" Tên phim 2", HinhAnh:"Hình Ảnh 2"},
    {TenPhim:" Tên phim 3", HinhAnh:"Hình Ảnh 3"},
    {TenPhim:" Tên phim 4", HinhAnh:"Hình Ảnh 4"},
    {TenPhim:" Tên phim 5", HinhAnh:"Hình Ảnh 5"},
  ]
  constructor() { }

  ngOnInit(): void {
  
  }
  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {

  statusShowPhim: boolean= true;
  constructor() { }
  HienPhimDangChieu(){
    this.statusShowPhim= true;
  }
  HienPhimSapChieu(){
    this.statusShowPhim= false;
  }
  ngOnInit(): void {
  }

}

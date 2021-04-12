import { DanhSachGhe } from './../../data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  DanhSachGhe= DanhSachGhe;  
  soGheDaDat:number=0;
  soGheConLai:number=0;
  DanhSachGheDangDat=[];
  constructor() {
    
  }

  ngOnInit(): void {
    // this.soGheConLai=this.DanhSachGhe.length;
    for(let ghe of DanhSachGhe){
        if(!ghe.TrangThai){
         this.soGheConLai++
        }
    }
  }
  DatGheParent(status, ghe){
    if(status){
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDangDat.push(ghe);
    }else{
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let indexGhe in this.DanhSachGheDangDat){
        if(this.DanhSachGheDangDat[indexGhe].SoGhe===ghe.SoGhe){
            this.DanhSachGheDangDat.splice(parseInt(indexGhe),1);
        }
      }
    }
    console.log(this.DanhSachGheDangDat); 
  }
  ThemGhe(gheDuocThem){
    this.DanhSachGhe.push(gheDuocThem);
  }
}

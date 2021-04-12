import { DanhSachGheComponent } from './../danh-sach-ghe/danh-sach-ghe.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.scss']
})
export class EditDsgheComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) DSgheCom;
  @ViewChild('title') titleHeading:ElementRef;
  constructor() { }
  themGheParent(...thamso:any[]){
    let gheDuocThem={
      TenGhe: thamso[0],
      SoGhe: thamso[1],
      Gia: thamso[2],
      TrangThai: null,
    }

  if(thamso[3]=='false'){
    gheDuocThem.TrangThai= false;
  }else if( thamso[3]== 'true'){
    gheDuocThem.TrangThai= true;
  } 
    // console.log(gheDuocThem); 
    this.DSgheCom.ThemGhe(gheDuocThem);
    this.titleHeading.nativeElement.innerHTML="Đã Thêm"
  }
  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReViewComponent } from './re-view/re-view.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { FormLienHeComponent } from './form-lien-he/form-lien-he.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { CoffeeTranhChuComponent } from './coffee-tranh-chu/coffee-tranh-chu.component';



@NgModule({
  declarations: [ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, HeaderComponent, FooterComponent,CoffeeTranhChuComponent],
  imports: [
    CommonModule
  ],
  exports:[
   ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, HeaderComponent, FooterComponent, CoffeeTranhChuComponent
  ]
})
export class CoffeeModule { }

import { FormsModule } from '@angular/forms';
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
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { FooterChildComponent } from './footer/footer_child.component';
import { ToggleComponent } from './lien-he/toggle/toggle.component';
import { NgTemplateOutletContainerComponent } from './ng-template-outlet-container/ng-template-outlet-container.component';
import { TabsComponent } from './ng-template-outlet-container/tabs/tabs.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import { EditDsgheComponent } from './edit-dsghe/edit-dsghe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderShoppingComponent } from './header-shopping/header-shopping.component';



@NgModule({
  declarations: [ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, HeaderComponent, FooterComponent,CoffeeTranhChuComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemTinTucComponent, FooterChildComponent, ToggleComponent, ToggleComponent, NgTemplateOutletContainerComponent, TabsComponent, DependencyInjectionComponent, DanhSachGheComponent, GheComponent, EditDsgheComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent, HeaderShoppingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
   ItemPhimComponent, TinTucComponent, DienAnhComponent, ReViewComponent, KhuyenMaiComponent, LienHeComponent, FormLienHeComponent, ThongTinLienHeComponent, HeaderComponent, FooterComponent, CoffeeTranhChuComponent, SliderComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemTinTucComponent, FooterChildComponent, ToggleComponent, NgTemplateOutletContainerComponent, TabsComponent, DependencyInjectionComponent, DanhSachGheComponent, GheComponent, EditDsgheComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent, HeaderShoppingComponent
  ]
})
export class CoffeeModule { }

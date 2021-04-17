import { Component, OnInit } from '@angular/core';
import { TransformServiceService } from 'src/app/observable/transform-service.service';
import { UserService } from 'src/app/observable/user.service';

@Component({
  selector: 'app-coffee-tranh-chu',
  templateUrl: './coffee-tranh-chu.component.html',
  styleUrls: ['./coffee-tranh-chu.component.scss']
})
export class CoffeeTranhChuComponent implements OnInit {

  statusButton:boolean= false;
  constructor(private userService: UserService, private transfom:TransformServiceService) { }

  toggleSilder(){
    this.statusButton== false? this.statusButton= true : this.statusButton=false;
    this.transfom.transformData(this.statusButton);
  }
  
  loadedFeature= 'recipe'
  onNavigate(feature: string){
    this.loadedFeature= feature;
  }

  ngOnInit(): void {
    this.userService.getListUser().subscribe(
      (result: any)=>{
        console.log("Ket qua", result);
      }
    );
  }

}
  
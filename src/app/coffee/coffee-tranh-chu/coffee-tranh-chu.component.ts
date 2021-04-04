import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/observable/user.service';

@Component({
  selector: 'app-coffee-tranh-chu',
  templateUrl: './coffee-tranh-chu.component.html',
  styleUrls: ['./coffee-tranh-chu.component.scss']
})
export class CoffeeTranhChuComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getListUser().subscribe(
      (result: any)=>{
        console.log("Ket qua", result);
      }
    );
  }

}
  
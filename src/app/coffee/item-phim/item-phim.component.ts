import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() ItemPhim; //biến phim ban đầu không giá trị, lấy giá trị C cha-> C con
  constructor() { }

  ngOnInit(): void {
  }

}

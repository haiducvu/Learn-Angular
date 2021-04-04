import { Component, OnInit } from '@angular/core';
import { TransformServiceService } from 'src/app/observable/transform-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private transform:TransformServiceService) { }
  status: boolean= false;
  ngOnInit(): void {
    this.transform.asData.subscribe(
      (result)=>{
        this.status= result;
      }
    )
  }

}

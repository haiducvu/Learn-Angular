import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-container',
  templateUrl: './ng-template-outlet-container.component.html',
  styleUrls: ['./ng-template-outlet-container.component.scss']
})
export class NgTemplateOutletContainerComponent implements OnInit {
  counter= 1;
  navs=['Active', 'Link', 'Link2'];
  constructor() { }

  ngOnInit(): void {
  }

}

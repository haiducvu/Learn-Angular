import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Author} from 'src/app/data';

@Component({
    selector: 'app-footer-child',
    templateUrl: './footer_child.component.html',
  })
  export class FooterChildComponent implements OnInit {

    @Input() item: Author
    @Output() selectEvent= new EventEmitter<Author>();  // selectEvent: tên EVENT
    @Output() deleteEvent= new EventEmitter<Author>();   

    constructor() { } 
    ngOnInit(): void {
    }
     
  } 
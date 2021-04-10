import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Author} from 'src/app/data';

@Component({
    selector: 'app-footer-child',
    templateUrl: './footer_child.component.html',
  })
  export class FooterChildComponent implements OnInit {
    @Input() author: Author
    @Output() select= new EventEmitter<Author>();
    @Output() deleteAuthor= new EventEmitter<Author>();
    constructor() { }
  
    ngOnInit(): void {
    }
    handleDelete(){
      this.deleteAuthor.emit(this.author);
    }
  } 
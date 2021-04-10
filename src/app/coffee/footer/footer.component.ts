import { Component, OnInit } from '@angular/core';
import { Author, authors} from 'src/app/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    listUser= authors;
    currentUser=authors[0];
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedUser: Author){
    this.currentUser= selectedUser;
  }

  handleDelete(author: Author) {
    this.listUser = this.listUser.filter(item => item.id !== author.id);
  }
}
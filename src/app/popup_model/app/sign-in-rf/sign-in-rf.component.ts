import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})

export class SignInRfComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(""), // giá trị ban đầu
  //   password: new FormControl(""),  
  //   rememberMe: new FormControl(false),  
  // });
  signInForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.signInForm= this.fb.group({
      username:"qwe",
      password:"123456",
    });
    setTimeout(()=>{
     this.signInForm.patchValue({
      username: 'Vuhai'
     })
    }, 1000);  
  }

  onSubmit():void{
    console.log(this.signInForm);
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

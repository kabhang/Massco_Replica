import {Component,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-contact-example',
  templateUrl: 'dialog-contact-example.html',
  styleUrls: ['dialog-contact-example.css'],
})
export class DialogContactExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContactExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'dialog-contact-example-dialog',
  templateUrl: 'dialog-contact-example-dialog.html',
})
export class DialogContactExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}


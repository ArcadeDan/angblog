import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePopupComponent } from '../create-popup/create-popup.component';
import { ReadPopupComponent } from '../read-popup/read-popup.component';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  
  constructor(private dialog: MatDialog) { }

  openCreatePopup() {
    this.dialog.open(CreatePopupComponent, {
      width: '400px',
    });
  }

  openReadPopup() {
    this.dialog.open(ReadPopupComponent, {
      width: '600px',
    });
  }

  openUpdatePopup() {
    this.dialog.open(UpdatePopupComponent, {
      width: '400px',
    });
  }

  openDeletePopup() {
    this.dialog.open(DeletePopupComponent, {
      width: '400px',
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css'
})
export class DeletePopupComponent {
  id = '';

  constructor(private http: HttpClient) { }
  deleteUser() {
    this.http.delete(`http://localhost:3000/api/users/${this.id}`).subscribe(
      (response) => {
        console.log('User deleted:', response);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}

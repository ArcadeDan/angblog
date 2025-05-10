import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css'
})
export class DeletePopupComponent {
  id: User['id'] = 0; // Initialize id to a default value

  constructor(private http: HttpClient) { }
  deleteUser() {
    const url = `http://localhost:3000/api/users/${this.id}`; // Include the ID in the URL
    this.http.delete<User>(url).subscribe(
      (response) => {
        console.log('User deleted:', response);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}

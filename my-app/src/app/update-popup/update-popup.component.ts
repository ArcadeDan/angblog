import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrl: './update-popup.component.css'
})
export class UpdatePopupComponent {
  id = '';
  name = '';
  email = '';

  constructor(private http: HttpClient) { }
  updateUser() {
    const data = {name: this.name, email: this.email };
    const url = `http://localhost:3000/api/users/${this.id}`; // Include the ID in the URL
    this.http.put(url, data).subscribe(
      (response) => {
        console.log('User updated:', response);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}


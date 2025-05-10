import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrl: './create-popup.component.css'
})
export class CreatePopupComponent {
  name = '';
  email = '';

  constructor(private http: HttpClient) {}

  createUser() {
    const data = { name: this.name, email: this.email };
    this.http.post('http://localhost:3000/api/submit', data).subscribe(
      (response) => {
        console.log('User created:', response);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

}

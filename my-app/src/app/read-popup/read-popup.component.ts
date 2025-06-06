import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-read-popup',
  templateUrl: './read-popup.component.html',
  styleUrl: './read-popup.component.css'
})
export class ReadPopupComponent {
  users: User[] = [];

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User>('http://localhost:3000/api/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log('Fetched users:', this.users); // Log fetched users
      },
      (error) => {
        console.error('Error fetching users:', error); // Log error
  }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-footer',
  templateUrl: './create-footer.component.html',
  styleUrl: './create-footer.component.css'
})
export class CreateFooterComponent {
  isPopupVisible = false;
  name = '';
  email = '';

  constructor(private http: HttpClient) {}


  submitData(): void {
    const data = { name: this.name, email: this.email };
    console.log('Sending data to backend:', data); // Log data being sent
    this.http.post('http://localhost:3000/api/submit', data).subscribe(
      (response) => {
        console.log('Response from backend:', response); // Log backend response
      },
      (error) => {
        console.error('Error from backend:', error); // Log error
      }
    );
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}

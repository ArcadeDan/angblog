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
    this.http.post('http://localhost:3000/api/submit', data).subscribe(
      (response) => {
        console.log('Data submitted successfully:', response)
      },
      (error) => {
        console.error('Error submitting data:', error);
      }
    );
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}

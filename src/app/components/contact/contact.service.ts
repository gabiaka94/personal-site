// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



// Define the types for email form data and API response
export interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  // Define the structure of your API response
  // You might need to adjust this based on your API's actual response
  // For simplicity, assuming the API returns an object with a 'success' property
  success: boolean;
  message: string;
  // Add other properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) {}

  sendEmail(formData: EmailFormData): Observable<ApiResponse> {
    // Assume your API expects a POST request with the email data
    return this.http.post<ApiResponse>(this.apiUrl, formData);
  }
}

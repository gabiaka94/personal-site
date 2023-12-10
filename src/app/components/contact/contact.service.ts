// email.service.ts
import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';



// Define the types for email form data and API response
export interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  ok: true;
  next: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://formspree.io/f/mvojeqdv';


  private readonly http = inject(HttpClient);
  private readonly gaService = inject(GoogleAnalyticsService)

  sendEmail(formData: EmailFormData): Observable<ApiResponse> {
    // Assume your API expects a POST request with the email data
    return this.http.post<ApiResponse>(this.apiUrl, formData);
  }
}

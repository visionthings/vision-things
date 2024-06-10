import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}
  endpoint = environment.endpoint;

  sendMessage(data: any) {
    return this.http.post<{}>(`${this.endpoint}/messages`, data);
  }
}

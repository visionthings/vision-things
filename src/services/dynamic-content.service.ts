import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DynamicContentService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;

  sendInterestedMessage(data: any) {
    return this.http.post(`${this.endpoint}/interested`, data);
  }

  getCategories() {
    return this.http.get(`${this.endpoint}/categories`);
  }

  getPage(id: string | null) {
    return this.http.get(`${this.endpoint}/pages/${id}`);
  }
}

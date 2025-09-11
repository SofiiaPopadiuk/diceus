import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'https://diceus-be.onrender.com';

  constructor(private http: HttpClient) {}

  // GET request for JSON responses
  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    const httpParams = params ? new HttpParams({ fromObject: params }) : undefined;
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }

  // POST request for JSON responses
  post<T>(endpoint: string, body: any): Observable<T> {
    console.log(endpoint, body)
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  // PUT request for JSON responses
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  // DELETE request for JSON responses
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Posts> {
    const headers = new HttpHeaders({
      'X-Api-key': environment.newsApi.apiKey,
    });
    const params = new HttpParams().append('country', 'us');

    return this.http.get<Posts>(environment.newsApi.headlines, { headers, params });
  }
}

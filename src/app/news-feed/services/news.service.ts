import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  page = 0;
  selectedCategory: string = '';

  constructor(private http: HttpClient) {}

  getAllPosts(filter?: any): Observable<Posts> {
    if (!!filter.category && filter.category !== this.selectedCategory) {
      this.page = 1;
    } else {
      this.page++;
    }

    const headers = new HttpHeaders({
      'X-Api-key': environment.newsApi.apiKey,
    });

    let params = new HttpParams({ fromObject: filter });

    if (!filter.category) {
      params = params.delete('category');
    } else {
      this.selectedCategory = filter.category;
    }

    params = params
      .append('country', 'us')
      .append('page', this.page)
      .append('pageSize', '10');

    return this.http.get<Posts>(environment.newsApi.headlines, {
      headers,
      params,
    });
  }
}

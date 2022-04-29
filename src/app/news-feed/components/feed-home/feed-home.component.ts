import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, pipe, Subject, takeUntil } from 'rxjs';
import { Article, Posts } from '../../models/posts';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-feed-home',
  templateUrl: './feed-home.component.html',
  styleUrls: ['./feed-home.component.scss'],
})
export class FeedHomeComponent implements OnInit, OnDestroy {
  posts: Article[] = [];
  categories = ['science', 'technology', 'sports', 'entertainment', 'business'];
  selectedCategory: string = '';

  ngUnsubscribe = new Subject<any>();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.unsubscribe();
  }

  loadNews(category?: string) {
    this.newsService
      .getAllPosts({ category })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: Posts) => {
        this.posts.push(...res.articles);
      });
  }

  loadMore(evt: any) {
    if (!!this.selectedCategory) {
      this.loadNews(this.selectedCategory);
    } else {
      this.loadNews();
    }
  }

  loadByCategory(evt: string) {
    this.posts = [];
    this.selectedCategory = evt;

    this.loadNews(this.selectedCategory);
  }
}

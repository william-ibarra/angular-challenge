import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, pipe, Subject, takeUntil } from 'rxjs';
import { Article, Posts } from '../../models/posts';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-feed-home',
  templateUrl: './feed-home.component.html',
  styleUrls: ['./feed-home.component.scss']
})
export class FeedHomeComponent implements OnInit, OnDestroy {

  posts: Article[] = [];

  ngUnsubscribe = new Subject<any>();
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllPosts().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (res: Posts) => {
        this.posts = res.articles;
      }
    );
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.unsubscribe();
  }

}

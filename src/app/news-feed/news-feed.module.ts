import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedHeaderComponent } from './components/feed-header/feed-header.component';
import { FeedHomeComponent } from './components/feed-home/feed-home.component';
import { FeedLayoutComponent } from './components/feed-layout/feed-layout.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { NewsFeedRoutingModule } from './news-feed-routing.module';



@NgModule({
  declarations: [
    PostCardComponent,
    FeedLayoutComponent,
    FeedHeaderComponent,
    FeedHomeComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }

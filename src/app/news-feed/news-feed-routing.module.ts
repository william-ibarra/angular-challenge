import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedHomeComponent } from './components/feed-home/feed-home.component';
import { FeedLayoutComponent } from './components/feed-layout/feed-layout.component';

const routes: Routes = [
  { path: '', component: FeedLayoutComponent, children: [
    { path: '', component: FeedHomeComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFeedRoutingModule { }

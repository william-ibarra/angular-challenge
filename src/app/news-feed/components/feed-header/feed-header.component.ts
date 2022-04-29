import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.scss']
})
export class FeedHeaderComponent {

  @Input() headerTitle: string = '';

}

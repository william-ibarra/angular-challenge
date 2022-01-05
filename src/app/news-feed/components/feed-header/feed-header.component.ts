import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.scss']
})
export class FeedHeaderComponent implements OnInit {

  @Input() headerTitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

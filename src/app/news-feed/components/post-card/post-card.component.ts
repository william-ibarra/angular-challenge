import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() url: string = '';
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() published: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

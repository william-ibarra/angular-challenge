import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {

  selected: string = '';

  @Input() categories: string[] = [];

  @Output() selectedCategory =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handle(title: string) {
    this.selectedCategory.emit(title);
    this.selected = title;
  }

}

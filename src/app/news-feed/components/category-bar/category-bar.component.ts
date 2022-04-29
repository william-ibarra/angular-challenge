import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent {

  selected: string = '';

  @Input() categories: string[] = [];

  @Output() selectedCategory =  new EventEmitter<string>();

  handle(title: string) {
    this.selectedCategory.emit(title);
    this.selected = title;
  }

}

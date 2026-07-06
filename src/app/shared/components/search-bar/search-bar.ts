import { Component, input, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  imports: [MatInputModule, MatIconModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {

  placeholder = input.required<string>();

  search = output<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

}
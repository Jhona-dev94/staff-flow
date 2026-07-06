import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-employees',
  imports: [MatIconModule, MatButtonModule, SearchBar],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {}

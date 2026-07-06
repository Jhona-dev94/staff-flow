import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-settings',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {

  form = new FormGroup({

    companyName: new FormControl('StaffFlow'),

    adminEmail: new FormControl('admin@staffflow.com'),

    timezone: new FormControl('America/La_Paz'),

    language: new FormControl('English')

  });

  save() {

    alert('Settings saved successfully');

  }

}
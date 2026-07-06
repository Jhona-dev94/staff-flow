import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { Employee } from '../../models/employee/employee';

@Component({
  selector: 'app-employee-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule
  ],
  templateUrl: './employee-dialog.html',
  styleUrl: './employee-dialog.css'
})
export class EmployeeDialog {

  private dialogRef = inject(MatDialogRef<EmployeeDialog>);

  data = inject<Employee | null>(MAT_DIALOG_DATA, {
    optional: true
  });

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    position: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    department: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    status: new FormControl('Active', {
      nonNullable: true
    })
  });

  constructor() {

    if (this.data) {
      this.form.patchValue(this.data);
    }

  }

  save() {

    if (this.form.invalid) return;

    this.dialogRef.close(this.form.getRawValue());

  }

  cancel() {
    this.dialogRef.close();
  }

}
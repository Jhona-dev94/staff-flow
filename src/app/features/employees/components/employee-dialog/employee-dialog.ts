import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import {Employee} from '../../models/employee/employee';

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

  constructor(
  private dialogRef: MatDialogRef<EmployeeDialog, Employee>
) {}
save() {

  if (this.form.invalid) return;

  this.dialogRef.close({
    name: this.form.controls.name.getRawValue(),
    position: this.form.controls.position.getRawValue(),
    department: this.form.controls.department.getRawValue(),
    status: this.form.controls.status.getRawValue()
  });

}

cancel() {
  this.dialogRef.close();
}
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    position: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    department: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    status: new FormControl('Active', { nonNullable: true })
  });

}
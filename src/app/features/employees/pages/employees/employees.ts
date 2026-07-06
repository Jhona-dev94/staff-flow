import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { EmployeeTable } from '../../components/employee-table/employee-table';
import { EmployeeDialog } from '../../components/employee-dialog/employee-dialog';

import { Employee } from '../../models/employee/employee';

@Component({
  selector: 'app-employees',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SearchBar,
    EmployeeTable
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {

  employees = signal<Employee[]>([
    {
      id:1,
      name: 'John Smith',
      position: 'Frontend Developer',
      department: 'IT',
      status: 'Active'
    },
    {
      id:2,
      name: 'Sarah Johnson',
      position: 'Designer',
      department: 'Design',
      status: 'Active'
    }
  ]);

  constructor(private dialog: MatDialog) {}

delete(id: number) {

  const ok = confirm('Delete this employee?');

  if (!ok) return;

  this.employees.update(list =>
    list.filter(employee => employee.id !== id)
  );

}
edit(employee:Employee){

const dialogRef=this.dialog.open(EmployeeDialog,{
width:'600px',
data:employee
});

dialogRef.afterClosed().subscribe(result=>{

if(!result)return;

this.employees.update(list=>

list.map(x=>

x.id===employee.id

?{
...result,
id:employee.id
}

:x)

);

});

}
  openDialog() {

    const dialogRef = this.dialog.open(EmployeeDialog, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe((result: Employee | undefined) => {

  if (!result) return;

  this.employees.update(list=>[
...list,
{
...result,
id:Date.now()
}
]);

});

  }

}
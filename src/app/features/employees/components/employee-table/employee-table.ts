import { AfterViewInit, Component, ViewChild, input, effect, output } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  Employee  } from '../../models/employee/employee';

@Component({
  selector:'app-employee-table',
  imports:[
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl:'./employee-table.html',
  styleUrl:'./employee-table.css'
})

export class EmployeeTable implements AfterViewInit{
  employees = input.required<Employee[]>();
  editEmployee=output<Employee>();
  deleteEmployee=output<number>();

  displayedColumns=[
    'name',
    'position',
    'department',
    'status',
    'actions'
  ];

dataSource = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  @ViewChild(MatSort)
  sort!:MatSort;

  ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  constructor() {
  effect(() => {
    this.dataSource.data = this.employees();
  });
}
  filter(value:string){

 this.dataSource.filter=value.trim().toLowerCase();
 

}
}
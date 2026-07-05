import { Component, signal } from '@angular/core';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  stats = signal([
    {
      title: 'Employees',
      value: 120,
      icon: 'group'
    },
    {
      title: 'Departments',
      value: 8,
      icon: 'apartment'
    },
    {
      title: 'Active Users',
      value: 95,
      icon: 'person'
    }
  ]);
  recentActivities = signal([
  {
    user: 'John Smith',
    action: 'was added',
  },
  {
    user: 'Sarah Johnson',
    action: 'updated her profile',
  },
  {
    user: 'David Brown',
    action: 'was promoted',
  },
  {
    user: 'Emma Wilson',
    action: 'joined Engineering',
  },
]);

  employees = signal(120);

  departments = signal(8);

  activeUsers = signal(95);

  employeesIcon = signal('group');

}
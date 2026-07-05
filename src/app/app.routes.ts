import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Settings } from './features/dashboard/pages/settings/settings';
import { Employees } from './features/dashboard/pages/employees/employees';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'settings',
                component: Settings
            },
            {
                path: 'employees',
                component: Employees
            }
        ]
    }
];

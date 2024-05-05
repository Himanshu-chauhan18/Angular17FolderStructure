import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { authenticationGuard } from './core/guards/auth/authentication.guard';

export const routes: Routes = [
    {
        path:'core',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule) 
    },
    {
        path:'attendance',
        loadChildren: () => import('./features/attendance/attendance.module').then(m => m.AttendanceModule),
        canLoad: [authenticationGuard]
    },
    {
        path:'**',
        component:PagenotfoundComponent
    }
]; 

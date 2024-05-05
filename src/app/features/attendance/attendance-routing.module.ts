import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftComponent } from './components/shift/shift.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'index',
    pathMatch:'full'
  },
  {
    // lazy loading of components
    path:'index',
    loadComponent: () => import('./components/index/index.component')
    .then(m => m.IndexComponent)
  },
  {
    path:'shift',
    component:ShiftComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }

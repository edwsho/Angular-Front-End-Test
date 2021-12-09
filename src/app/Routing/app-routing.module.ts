import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component'
import { PageNotFounfComponent } from '../Components/page-not-founf/page-not-founf.component'
import { MatTableComponent } from '../Components/mat-Table/mat-table/mat-table.component'
import { StudentsComponent } from '../Components/students/students.component';
import { StaffComponent } from '../Components/staff/staff.component';

/*
Anado los componentes al servicio de rutas de Angular dentro de esta constante
*/
const routes: Routes = [


  { path:'HomePage', component:HomeComponent},
  { path:'Table', component:MatTableComponent},
  { path:'Tablee', component:PageNotFounfComponent},
  { path:'StudentsTable', component:StudentsComponent},
  { path:'StaffTable', component:StaffComponent},
  { path: '**', redirectTo: '/HomePage' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

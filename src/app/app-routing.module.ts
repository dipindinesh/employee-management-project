import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
	{
		path: 'employee-list',
		component: EmployeeListComponent,
	},
	{
		path: 'employee-details/:id',
		component: EmployeeDetailsComponent,
	},
	{
		path : '', redirectTo: 'employee-list', pathMatch : 'full'
	},
	{ path: '**', component:  EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

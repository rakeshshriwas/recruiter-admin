// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { AuthGuard } from './core/auth';
import { JobsComponent } from './views/pages/jobs/jobs.component';
import { PostjobComponent } from './views/pages/postjob/postjob.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { JobDetailsComponent } from './views/pages/job-details/job-details.component';
import { MyprofileComponent } from './views/pages/myprofile/myprofile.component';
import { EditMyprofileComponent } from './views/pages/edit-myprofile/edit-myprofile.component';
import { EditProfileComponent } from './views/pages/edit-profile/edit-profile.component';

const routes: Routes = [
	{ path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'jobs',
				component: JobsComponent
			},
			{
				path: 'postjob',
				component: PostjobComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'jobdetail',
				component: JobDetailsComponent
			},
			{
				path: 'myprofile',
				component: MyprofileComponent
			},
			{
				path: 'editmyprofile',
				component: EditMyprofileComponent
			},
			{
				path: 'editprofile',
				component: EditProfileComponent
			},
		]
	},

	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

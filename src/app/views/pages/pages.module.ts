import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { JobsComponent } from './jobs/jobs.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatTableModule, MatChipsModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditMyprofileComponent } from './edit-myprofile/edit-myprofile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
	declarations: [JobsComponent, PostjobComponent, ProfileComponent, JobDetailsComponent, MyprofileComponent, EditMyprofileComponent, EditProfileComponent],
	exports: [],
	imports: [
		RouterModule,
		FormsModule,
		CommonModule,
		CoreModule,
		PartialsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		MatTableModule, MatChipsModule, MatChipsModule, MatPaginatorModule, MatProgressSpinnerModule
	],
	providers: []
})
export class PagesModule {
}

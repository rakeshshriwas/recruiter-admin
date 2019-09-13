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
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatIconModule } from '@angular/material';

@NgModule({
	declarations: [JobsComponent, PostjobComponent, ProfileComponent, JobDetailsComponent],
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
		MatIconModule
	],
	providers: []
})
export class PagesModule {
}

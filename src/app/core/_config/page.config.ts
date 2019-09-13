export class PageConfig {
	public defaults: any = {
		dashboard: {
			page: {
				'title': 'Dashboard',
				'desc': 'Latest updates and statistic charts'
			},
		},
		jobs: {
			page: {
				'title': 'Job List',
				'desc': 'Latest Jobe'
			}
		},
		postjob: {
			page: {
				'title': 'Post a Job',
				'desc': 'You can create new job post'
			}
		},
		profile: {
			page: {
				'title': 'Profile',
				'desc': 'My Profile'
			}
		},
		jobdetail: {
			page: {
				'title': 'Job Detail',
				'desc': ''
			}
		}
	};

	public get configs(): any {
		return this.defaults;
	}
}

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
				'desc': 'Current Opening'
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
				'desc': 'Job Id : 1001'
			}
		},
		jobdetail: {
			page: {
				'title': 'Job Detail',
				'desc': 'Job Id : 1001',
				'totalCount': '20 Resume Matched'
			}
		},
		myprofile: {
			page: {
				'title': 'My Profile',
				'desc': ''
			}
		},
		editmyprofile: {
			page: {
				'title': 'Edit My Profile',
				'desc': ''
			}
		},
		editprofile: {
			page: {
				'title': 'Edit Profile',
				'desc': ''
			}
		}
	};

	public get configs(): any {
		return this.defaults;
	}
}

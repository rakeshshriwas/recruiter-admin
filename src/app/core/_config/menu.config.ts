export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: []
		},
		aside: {
			self: {},
			items: [
				// {
				// 	title: 'Dashboard',
				// 	root: true,
				// 	icon: 'flaticon2-architecture-and-city',
				// 	page: '/dashboard',
				// 	bullet: 'dot',
				// },
				{
					title: 'Job List',
					root: true,
					icon: 'flaticon2-list-2',
					page: '/jobs',
					bullet: 'dot',
				},
				{
					title: 'Post a Job',
					root: true,
					icon: 'flaticon2-writing',
					page: '/postjob',
					bullet: 'dot'
				},
				// {
				// 	title: 'Profile',
				// 	root: true,
				// 	icon: 'flaticon-profile-1',
				// 	page: '/profile',
				// 	bullet: 'dot'
				// }
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

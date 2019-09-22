import { ShareDataService } from './../servie/sharedataservice.service';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../servie/job.service';

import {
  JobSimilarity, GetRecruiterDashboardResponse
} from '../../../proto/application_service_pb';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


export interface PeriodicElement {
  jobPosition: string;
  jobCode: number;
  profileMatched: number;
  testColumn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { jobCode: 1001, jobPosition: 'Frontend Developer', profileMatched: 1, testColumn: '' },
  { jobCode: 1002, jobPosition: 'UI/UX', profileMatched: 4, testColumn: '' },
  { jobCode: 1003, jobPosition: 'HR', profileMatched: 6, testColumn: '' },
  { jobCode: 1004, jobPosition: 'Devops', profileMatched: 9, testColumn: '' },
  { jobCode: 1005, jobPosition: 'Web Developer', profileMatched: 10, testColumn: '' },
  { jobCode: 1006, jobPosition: 'Web Desigber', profileMatched: 12, testColumn: '' },
  { jobCode: 1007, jobPosition: 'Admin', profileMatched: 14, testColumn: '' },
  { jobCode: 1008, jobPosition: 'Project Manager', profileMatched: 15, testColumn: '' },
  { jobCode: 1009, jobPosition: 'Manager', profileMatched: 18, testColumn: '' },
  { jobCode: 1010, jobPosition: 'CEO', profileMatched: 20, testColumn: '' },
];

@Component({
  selector: 'kt-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  displayedColumns: string[] = ['jobCode', 'jobPosition', 'profileMatched'];
  // dataSource = ELEMENT_DATA;

  showSpinLoader: boolean = false;
  job_similarityList = new MatTableDataSource<JobSimilarity>();


  constructor(private jobService: JobService, private shareDataService: ShareDataService, private router: Router) { }

  ngOnInit() {
    this.showSpinLoader = true;
    this.getJobList();
  }

  getDetails(element: any): void {
    this.shareDataService.setData(element);
    this.router.navigateByUrl('/jobdetail');
  }

  getJobList() {
    const dashbaordObservable = this.jobService.getDashboardResponse();
    dashbaordObservable.subscribe(
      (dashboardData: GetRecruiterDashboardResponse) => {
        this.showSpinLoader = false;
        this.job_similarityList.connect().next(dashboardData.getJobSimilarityList());
        console.log(dashboardData.getJobSimilarityList());
      }
    );
  }
}

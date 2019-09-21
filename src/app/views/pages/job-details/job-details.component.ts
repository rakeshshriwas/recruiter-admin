import { ShareDataService } from './../servie/sharedataservice.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSimilarity } from '../../../proto/application_service_pb';
export interface PeriodicElement {
  jobPosition: string;
  jobCode: number;
  profileMatched: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { jobCode: 1, jobPosition: 'Rakesh Shriwas', profileMatched: 50, actions: '' },
  { jobCode: 2, jobPosition: 'Deepak Verma', profileMatched: 40, actions: '' },
  { jobCode: 3, jobPosition: 'Khushal More', profileMatched: 60, actions: '' },
  { jobCode: 4, jobPosition: 'Pawan Patel', profileMatched: 90, actions: '' },
  { jobCode: 5, jobPosition: 'Vikram', profileMatched: 10, actions: '' },
  { jobCode: 6, jobPosition: 'Govind', profileMatched: 20, actions: '' },
  { jobCode: 7, jobPosition: 'Payal', profileMatched: 40, actions: '' },
  { jobCode: 8, jobPosition: 'Priya Sharma', profileMatched: 50, actions: '' },
  { jobCode: 9, jobPosition: 'Aman Pal', profileMatched: 90, actions: '' },
  { jobCode: 10, jobPosition: 'Aditya Shrivas', profileMatched: 80, actions: '' },
];
@Component({
  selector: 'kt-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  displayedColumns: string[] = ['jobCode', 'jobPosition', 'profileMatched', 'actions'];
  dataSource = ELEMENT_DATA;
  jobSimilarityData: any;
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.getData().subscribe(data => {
      this.jobSimilarityData = data.newdata;
      console.log(this.jobSimilarityData);
    });
  }

  // ngAfterViewInit() {
  //   this.shareDataService.getData().subscribe(data => {
  //     this.jobSimilarityData = data.newdata;
  //     console.log(this.jobSimilarityData);
  //   });
  // }

}

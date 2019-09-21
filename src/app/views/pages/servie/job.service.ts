import { Injectable } from '@angular/core';
import { AppServiceClient } from '../../../proto/application_service_pb_service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  GetRecruiterDashboardRequest,
  GetRecruiterDashboardResponse,
  JobSimilarity
} from '../../../proto/application_service_pb';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  client: AppServiceClient;
  constructor(private http: HttpClient) {
    this.client = new AppServiceClient('http://108.227.161.73:8087');
  }

  public getDashboardResponse(): any {
    const dashbaordObservable = new Observable(observer => {
      const req = new GetRecruiterDashboardRequest();
      req.setUserId("1");
      this.client.getRecruiterDashboard(
        req,
        null,
        (err, response: GetRecruiterDashboardResponse) => {
          // console.log("ApiService.get.response", response.toObject());
          if (err) {
            console.log(err);
          }
          // console.log("company id" + response.getCompanyId());
          // console.log(response.getJobSimilarityList());
          // const list: JobSimilarity[] = response.getJobSimilarityList();
          // console.log(list[0].getCandidateInfoList()[0].getSimilarityList[0]);
          observer.next(response);
        }
      );
    });
    return dashbaordObservable;
  }
}

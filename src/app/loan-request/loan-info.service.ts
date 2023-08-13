import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from '../common/api-call.service';
import {
  LOAN_REQUEST_DECISION_URL
} from '../common/api-constant';
import { RequestMethods } from '../common/enum/app-enum';

@Injectable({
  providedIn: 'root'
})
export class LoanInfoService {

  constructor(private apiCalService: ApiCallService) { }

  getLoanRequestDecision(loanRequestObj: any): Observable<any> {
    const url = LOAN_REQUEST_DECISION_URL
    return this.apiCalService.constructApiCall(RequestMethods.GET, url, loanRequestObj);
  }
}

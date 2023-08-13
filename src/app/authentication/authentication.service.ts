import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiCallService} from '../common/api-call.service';
import {AUTHENTICATION_URL} from '../common/api-constant';
import {RequestMethods} from "../common/enum/app-enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private apiCalService: ApiCallService) {
  }

  login(authObject: any): Observable<any> {
    return this.apiCalService.constructApiCall(RequestMethods.POST, AUTHENTICATION_URL, authObject)
      .pipe(
        tap((response: any) => {
          if (response.jwtToken) {
            localStorage.setItem('access_token', response.jwtToken);
            this.loggedIn.next(true);
          }
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

}

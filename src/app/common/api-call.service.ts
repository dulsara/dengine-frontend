import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {SERVICE_URL} from './app-config';
import {RequestMethods} from './enum/app-enum';
import {AUTHENTICATION_URL} from "./api-constant";


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http: HttpClient,
  ) {
  }

  constructApiCall(method: RequestMethods, url: string, configObject: any): Observable<Object> {
    let fullUrl = SERVICE_URL + url;

    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders();
    if (url !== AUTHENTICATION_URL) {
      const token = localStorage.getItem('access_token');
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    switch (method) {
      case 'GET':
        return this.createGetRequest(fullUrl, configObject, headers);
      case 'PUT':
        return this.createPutRequest(fullUrl, configObject, headers);
      case 'POST':
        return this.createPostRequest(fullUrl, configObject, headers);
      case 'DELETE':
        return this.createDeleteRequest(fullUrl, headers);
      default:
        configObject['headers'] = headers;
        return this.http.request(method, fullUrl, configObject).pipe(catchError(error => throwError(error)));
    }
  }

  private createGetRequest(url: string, configObject: any, headers1: HttpHeaders): Observable<Object> {
    return this.http.get(url, {params: configObject, headers: headers1});
  }

  private createPutRequest(url: string, configObject: any, headers1: HttpHeaders): Observable<Object> {
    return this.http.put(url, configObject, {headers: headers1});
  }

  private createPostRequest(url: string, configObject: any, headers1: HttpHeaders): Observable<Object> {
    return this.http.post(url, configObject, {headers: headers1});
  }

  private createDeleteRequest(url: string, headers1: HttpHeaders): Observable<Object> {
    return this.http.delete(url, {headers: headers1});
  }

}

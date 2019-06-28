import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Urls } from './constants/url';
import { Login } from './login/login.model';
import { Bill } from './tabs/tab1/bill.model';
import { Replay } from './replay/replay.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  authAPI(form: NgForm) {

    const data = 'username=' + form.value.username + '&password=' + form.value.password;
    return this.http.post<Login>(Urls.LOGIN_URL, data, httpOptions)
    .pipe( tap(res => console.log('response success !!')),
      catchError(this.handleError('', []))
    );
  }

  pendingBillsAPI(): Observable<Bill[]> {
      return this.http.get<Bill[]>(Urls.PENDING_BILL_URL)
      .pipe(
        tap((res) =>  console.log('Success' + JSON.stringify(res))),
        catchError(this.handleError('', []))
        );
  }

  getBillDetailsAPI(id: string): Observable<Bill> {

    return this.http.get<Bill>(Urls.PENDING_BILL_URL_ID)
    .pipe(
      tap((res: Bill) => console.log('Bill details')),
      catchError(this.handleError<Bill>('get-details'))
    );
  }

  getReplyMessageAPI(): Observable<Replay> {

    return this.http.get<Replay>(Urls.REPLY_MESSAGES_URL)
    .pipe(
      tap((res: Replay) => console.log('Replay messages')),
      catchError(this.handleError<Replay>('Replay messages'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

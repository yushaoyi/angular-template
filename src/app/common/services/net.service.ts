import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UtilSev } from './util.service';

@Injectable()
export class NetSev {
  constructor(
    private http: HttpClient,
    private util: UtilSev
  ) {}

  public getServer(url: string, params?: object): Observable<any> {

    url = this.util.parseGetParams(url, params);
    return Observable.create( observer => {
      this.http.get(url)
        .timeout(5000)
        .subscribe(
        data => {
          console.log(data);
          observer.next(data);
        },
        (err: HttpErrorResponse) => {
          observer.error(err || 'Server error');
          // Observable.throw(err || 'Server error');
        }
      );
    });
  }

  public postServer(url: string, params?: object): any {
    let paramsObj = new HttpParams();
    for (let key in params) {
      paramsObj = paramsObj.set(key, params[key]); // 需重新赋值
    }
    return Observable.create( observer => {
      this.http.post(url, params, {
        params: paramsObj
      })
        .timeout(5000)
        .subscribe(
        data => {
          observer.next(data);
        },
        (err: HttpErrorResponse) => {
          observer.error(err || 'Server error');
        }
      );
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UtilSev } from './util.service';
import { HTTP_TIMEOUT } from "../config";

@Injectable()
export class NetSev {
  constructor(
    private http: HttpClient,
    private util: UtilSev
  ) {}

  /**
   *
   * @param {string} url
   * @param {Object} params
   * @returns {Observable<any>}
   */
  public getServer(url: string, params?: object): Observable<any> {
    url = this.util.parseGetParams(url, params);
    return Observable.create( observer => {
      this.http.get(url)
        .timeout(HTTP_TIMEOUT)
        .subscribe(
        data => {
          observer.next(data);
        },
        (err: HttpErrorResponse) => {
          if (err instanceof Error && err.name == 'TimeoutError') {
            console.log('请求超时');
            observer.error('');
          } else {
            observer.error(err || 'Server error');
          }
          // Observable.throw(err || 'Server error');
        }
      );
    });
  }

  /**
   *
   * @param {string} url
   * @param body
   * @param params
   * @returns {Observable<any>}
   */
  public post(url: string, body?: any, params?: any): Observable<any> {
    let paramsObj = new HttpParams();
    for (let key in params) {
      paramsObj = paramsObj.set(key, params[key]); // 需重新赋值
    }
    return this.http
      .post(url, body || null, {
        params: paramsObj
      })
      .do(() => {})
      .catch((res) => {
        return res;
      });
  }

  /**
   *
   * @param {string} url
   * @param {Object} params
   * @returns {any}
   */
  public postServer(url: string, params?: object): Observable<any> {
    let paramsObj = new HttpParams();
    for (let key in params) {
      paramsObj = paramsObj.set(key, params[key]); // 需重新赋值
    }
    return Observable.create(observer => {
      this.http.post(url, null, {
        params: paramsObj
      })
        .timeout(HTTP_TIMEOUT)
        .subscribe(
          data => {
            observer.next(data);
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            if (err instanceof Error && err.name == 'TimeoutError') {
              console.log('请求超时');
              observer.error('');
            } else {
              observer.error(err || 'Server error');
            }
          }
        );
    });
  }

}

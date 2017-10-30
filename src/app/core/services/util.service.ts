import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UtilSev {
  constructor() { }

  public parseGetParams(url: string, obj?: object): string {
    let i = 0;
    let hasParam = false;
    if (url.indexOf('?') != -1) {
      hasParam = true;
    }
    for (let key in obj) {
      // 修复参数为0时参数无法拼装bug
      if (obj[key] === null || obj[key] === undefined) {
        continue;
      }
      if (i == 0 && !hasParam) {
        url += '?' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
      }
      else {
        url += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
      }
    }
    return url;
  }

  public setSg(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getSg(key: string): any {
    return localStorage.getItem(key);
  }

  public setSgObj(key: string, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public getSgObj(key): any {
    let obj = localStorage.getItem(key);
    return JSON.parse(obj);
  }

  public remove(key): void  {
    localStorage.removeItem(key);
  }
}

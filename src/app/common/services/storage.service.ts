import { Injectable } from '@angular/core';

@Injectable()
export class StorageSev {
  constructor() { }

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

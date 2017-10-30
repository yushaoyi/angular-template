import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import { HTTP_SUCCESS_SERVER_CODE } from "../config";

/**
 * http拦截器
 */
@Injectable()
export class AjaxInterceptor implements HttpInterceptor {

  constructor() {}
  // 添加token
  private addAuthToken(req: HttpRequest<any>): HttpRequest<any> {
    let url = req.url;
    if (url.indexOf('?') > 0) {
      url += '&token=a341fca';
    } else {
      url += '?token=a341fca';
    }
    const secureReq = req.clone({url: url});
    return secureReq;
  }
  // 检查http response status
  // private checkResponseStatus(resp: HttpResponse<any>): void {
  //   console.log('resp-----');
  //   console.log(resp);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const secureReq = this.addAuthToken(req);
    return next.handle(secureReq)
      .mergeMap((event: any) => {
        if (event instanceof HttpResponse) { // 请求发送的时候也会执行这里面的方法，所以必须先判断 event 是否为HttpResponse的实例
          // observer.error 会跳转至后面的 `catch`
          if (event.status !== 200) {
            return Observable.create(observer => observer.error(event));
          }
          const data = event.body;
          if (!data || data && data.code !== HTTP_SUCCESS_SERVER_CODE) { // 业务错误
            return Observable.create(observer => observer.error(event));
          }
        }
        return Observable.create(observer => observer.next(event));
      })
      .catch((res: HttpResponse<any>) => {
        switch (res.status) {
          case 200:
            console.log('弹框提示业务错误=  ' + res.body.message);
          case 404:

            break;
        }
        return Observable.throw(res);
      });
  }
}

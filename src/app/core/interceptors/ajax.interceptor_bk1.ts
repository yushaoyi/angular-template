// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
//
// /**
//  * http拦截器
//  */
// @Injectable()
// export class AjaxInterceptor implements HttpInterceptor {
//   // 添加token
//   private addAuthToken(req: HttpRequest<any>): HttpRequest<any> {
//     let url = req.url;
//     if (url.indexOf('?') > 0) {
//       url += '&token=a341fca';
//     } else {
//       url += '?token=a341fca';
//     }
//     const secureReq = req.clone({url: url});
//     return secureReq;
//   }
//   // 检查http response status
//   private checkResponseStatus(resp: HttpResponse<any>): void {
//     console.log('resp-----');
//     console.log(resp);
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('req-----');
//     console.log(req);
//     const secureReq = this.addAuthToken(req);
//     return next.handle(secureReq).do(event => {
//       // Remember, there may be other events besides just the response. // besides 除了
//       if (event instanceof HttpResponse) {
//         this.checkResponseStatus(event);
//         // Update the cache.
//       }
//     }, error => {
//       if (error instanceof HttpErrorResponse) {
//         console.log(error);
//       }
//     });
//   }
// }

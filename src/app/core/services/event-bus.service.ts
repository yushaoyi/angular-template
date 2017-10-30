import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { User } from '../../models/user-model';
/**
 * 事件总线，组件之间可以通过这个服务进行通讯
 */
@Injectable()
export class EventBusService {
  // public topToggleBtn: Subject<boolean> = new Subject<boolean>();
  // // public userInfo: Subject<User> = new Subject<User>();
  // public userInfo: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  //
  // public setCurrentUser(newUser: User): void {
  //   // this.userInfo.next(newUser);
  //   this.userInfo.next(newUser);
  //   this.userInfo.complete();
  // }

  // public get currentUser(): Observable<User> {
  //   return this.userInfo.asObservable();
  // }
  constructor() { }
}

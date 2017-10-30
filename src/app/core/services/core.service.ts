// module.exports = {
//   UiSev: UiSev
// };
import {Injectable, Injector} from '@angular/core';
import {UiSev} from './ui.service';
import {NetSev} from './net.service';
import {UtilSev} from './util.service';
import { StorageSev } from './storage.service';
import { EventBusService } from './event-bus.service';

@Injectable()
export class CoreService {

  public ui: UiSev; // ui loading  toast提示
  public net: NetSev; // net get/post 请求
  public util: UtilSev; // ...
  public storage: StorageSev; // 本地存储
  public eventBus: EventBusService; // 全局事件栈

  constructor(private inj: Injector) {
    this.ui = this.inj.get(UiSev);
    this.net = this.inj.get(NetSev);
    this.util = this.inj.get(UtilSev);
    this.storage = this.inj.get(StorageSev);
    this.eventBus = this.inj.get(EventBusService);
  }
}

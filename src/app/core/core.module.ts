/**
 * core 核心模块
 * 提供核心服务
 * 由于ng的服务是全局单例的，
 * 所以核心服务只需由核心模块声明，并由
 * 根模块包含一次即可被全局应用所有组件共用
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventBusService } from './services/event-bus.service';
import { StorageSev } from './services/storage.service';
import { UiSev } from "./services/ui.service";
import { UtilSev } from './services/util.service';
import { NetSev } from "./services/net.service";
import { CoreService } from './services/core.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjaxInterceptor } from './interceptors/ajax.interceptor';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    EventBusService,
    StorageSev,
    UiSev,
    UtilSev,
    NetSev,
    CoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AjaxInterceptor,
      multi: true // 注意multi: true选项。这是必须的，因为它会告诉 Angular 这个 HTTP_INTERCEPTORS 表示的是一个数组，而不是单个的值。
    }
  ]
})

export class CoreModule {
  // 禁止多次导入CoreModule https://www.angular.cn/guide/ngmodule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

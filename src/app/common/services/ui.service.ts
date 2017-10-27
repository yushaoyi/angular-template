import { Injectable } from '@angular/core';
import { NzMessageService, NzModalService } from "ng-zorro-antd";
import { Injector } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UiSev {

  private nzMessageService: NzMessageService;
  private modalService: NzModalService;
  private _messageId: string;
  constructor(private inj: Injector) {
    this.nzMessageService = this.inj.get(NzMessageService);
    this.modalService = this.inj.get(NzModalService);
  }

  public showLoading(content: string): void {
    if (this._messageId) {
      return;
    }
    this._messageId = this.nzMessageService.loading(content ? content : '正在加载中', { nzDuration: 0 }).messageId;
  }

  public hideLoading(): void {
    if (!this._messageId) {
      return;
    }
    this.nzMessageService.remove(this._messageId);
  }

  // public toastInfo(content: string, duration: number): void {
  //
  // }
  public toastInfo = (content: string, duration?: number) => {
    this.nzMessageService.info(content,  {nzDuration: duration ? duration : 2500});
  }

  public toastSuccess(content: string, duration?: number): void {
    this.nzMessageService.success(content, {nzDuration: duration ? duration : 2500});
  }
  public toastError(content: string, duration?: number): void {
    this.nzMessageService.error(content, {nzDuration: duration ? duration : 2500});
  }

  public modal(component: any, title?: string, params?: object, options?: object): Observable<any> {
    const subscription = this.modalService.open({
      title: title || '',
      content: component,
      onOk() {},
      onCancel() {},
      footer: false, // 是否展示底部
      maskClosable: false, // 点击蒙层是否可关闭
      componentParams: params || {}
    });
    return subscription;
  }

  public alert(): Observable<any> { }

  public confirm(): Observable<any> { }
}

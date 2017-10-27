import { Component, OnInit, OnDestroy } from '@angular/core';
// import { UiSev } from '../common/services/ui.service';
import { CommonService } from '../common/services/common.service';
import { ModalCustomizeComponent } from './modalCustomize.component';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'ui-kit',
  templateUrl: './ui-kit.component.html'
})
// export class UiKitComponent implements OnInit {
//   constructor(
//     private uiSev: UiSev
//   ) {}
//   ngOnInit() {
//     this.uiSev.showLoading('测试');
//     setTimeout(_ => {
//       this.uiSev.hideLoading();
//     }, 2500);
//     this.uiSev.toastInfo('这是一条提示');
//     this.uiSev.toastError('这是错误提示');
//     this.uiSev.toastSuccess('这是成功提示');
//   }
// }

export class UiKitComponent implements OnInit {
  constructor(
    private commonSev: CommonService,
    private modalService: NzModalService
  ) {}

  test() {
    // const subscription = this.modalService.open({
    //   title          : '对话框标题',
    //   content        : NzModalCustomizeComponent,
    //   onOk() {
    //   },
    //   onCancel() {
    //     console.log('Click cancel');
    //   },
    //   footer         : false,
    //   componentParams: {
    //     name: '测试渲染Component'
    //   }
    // });
    this.commonSev.ui.modal(ModalCustomizeComponent, 'test', {}, {})
      .subscribe(result => {
        console.log(result);
      });
  }

  ngOnInit() {
    // this.commonSev.ui.showLoading('测试');
    // setTimeout(_ => {
    //   this.commonSev.ui.hideLoading();
    // }, 2500);
    // this.commonSev.ui.toastInfo('这是一条提示');
    // this.commonSev.ui.toastError('这是错误提示');
    // this.commonSev.ui.toastSuccess('这是成功提示');
    // this.commonSev.net.postServer('http://',
    //   { 'isPc': 1 , 'has': false}).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {}
    // );
    setTimeout(() => {
      this.commonSev.ui.modal(ModalCustomizeComponent, 'test', {}, {})
        .subscribe(result => {
          console.log(result);
        });
    }, 0);
  }
}

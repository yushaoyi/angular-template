/**
 * 共享模块
 * 1.包含FormModule, CommonModule等系统模块
 * 2.共享组件 --所有功能模块引入后即可使用
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TablePageComponent } from './component/table-page/table-page.component';
// import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule
  ],
  declarations: [ TablePageComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablePageComponent
    // TranslateModule
  ]
})

export class SharedModule { }

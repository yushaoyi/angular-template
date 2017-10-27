import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from './shared/shared.module';
import { CommonModule } from './common/common.module';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { ModalCustomizeComponent } from './ui-kit/modalCustomize.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    ModalCustomizeComponent
  ],
  entryComponents: [
    ModalCustomizeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

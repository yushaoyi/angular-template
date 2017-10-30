import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UiKitComponent } from './views/ui-kit/ui-kit.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

// 自定义modal component
import { ModalCustomizeComponent } from './views/ui-kit/modalCustomize.component';
// In some cases entryComponents under lazy loaded
// modules will not work, as a workaround put them in your app.module (root)
// https://stackoverflow.com/questions/41519481/angular2-material-dialog-has-issues-did-you-add-it-to-ngmodule-entrycomponent/41519512#
import { EditStudentModalComponet } from "./views/student/base-info/edit-student/edit-student.modal.componet";
import { CustomizeComponentModule } from "./customize-component";


@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    // ModalCustomizeComponent,
    // EditStudentModalComponet
  ],
  entryComponents: [
    // ModalCustomizeComponent,
    // EditStudentModalComponet
  ],
  imports: [
    CoreModule,
    SharedModule,
    CustomizeComponentModule,
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

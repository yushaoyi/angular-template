/**
 * In some cases entryComponents under lazy loaded modules will not work, as a workaround put them in your app.module (root)
 * so i define a customize module  to import into app.module, as root should not contain many details
 *
 * https://stackoverflow.com/questions/41519481/angular2-material-dialog-has-issues-did-you-add-it-to-ngmodule-entrycomponent/41519512#
 */
import { NgModule } from '@angular/core';
// import { EditStudentModalComponet } from "../views/student/base-info/edit-student/edit-student.modal.componet";
import { ModalCustomizeComponent } from "../views/ui-kit/modalCustomize.component";
import { SharedModule } from "../shared/shared.module";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  imports: [
    SharedModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    // EditStudentModalComponet,
    ModalCustomizeComponent
  ],
  entryComponents: [
    // EditStudentModalComponet,
    ModalCustomizeComponent
  ]
})

export class CustomizeComponentModule {

}

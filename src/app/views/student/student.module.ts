import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {StudentComponent} from './student.component';
import {BaseInfoComponent} from './base-info/base-info.component';
import {ClassInfoComponent} from './class-info/class-info.component';
import {StudentService} from './student.service';
import {studentRoutes} from './student.routes';
import {NgZorroAntdModule} from 'ng-zorro-antd';
// import {EditStudentModalComponet} from "./base-info/edit-student/edit-student.modal.componet";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(studentRoutes),
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    StudentComponent,
    BaseInfoComponent,
    ClassInfoComponent,
    // EditStudentModalComponet
  ],
  entryComponents: [
    // EditStudentModalComponet
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule {
}

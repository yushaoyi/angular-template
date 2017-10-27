import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { BaseInfoComponent } from './base-info/base-info.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { StudentService } from './student.service';
import { studentRoutes } from './student.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(studentRoutes)
  ],
  declarations: [StudentComponent, BaseInfoComponent, ClassInfoComponent],
  providers: [
    StudentService
  ]
})
export class StudentModule { }

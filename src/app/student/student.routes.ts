import { BaseInfoComponent } from './base-info/base-info.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { StudentComponent } from './student.component';

export const studentRoutes = [{
  path: '',
  component: StudentComponent,
  children: [
    {
      path: 'baseInfo',
      component: BaseInfoComponent
    },
    {
      path: 'classInfo',
      component: ClassInfoComponent
    }
  ]
}];

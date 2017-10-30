import { WorkspaceComponent } from "./workspace.component";

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMath: 'full'
      },
      // {
      //   path: 'student',
      //   loadChildren: '../student/student.module#StudentModule'
      // },
      {
        path: 'student',
        loadChildren: '../student#StudentModule'
      }
    ]
  }
];

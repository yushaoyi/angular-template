/**
 * 根路由，指定子组件的路由规则，包括惰性加载的模块配置
 */
import { UiKitComponent } from './ui-kit/ui-kit.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'ui-kit',
    pathMatch: 'full'
  },
  {
    path: 'ui-kit',
    component: UiKitComponent
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  },
  {
    path: '**', // fallback router ust in the last
    component: UiKitComponent
  }
];

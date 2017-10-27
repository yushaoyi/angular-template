import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { WorkspaceComponent } from "./workspace.component";
import { TopMenuComponent } from '../common/component/top-menu/top-menu.component';
import { LeftNavComponent } from '../common/component/let-nav/left-nav.component';
import { AsideMenuComponent } from '../common/component/let-nav/aside-menu/aside-menu.component';
import { FooterComponent } from '../common/component/footer/footer.component';
import { workspaceRoutes} from './workspace.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(workspaceRoutes)
  ],
  exports: [],
  declarations: [
    WorkspaceComponent,
    TopMenuComponent,
    AsideMenuComponent,
    LeftNavComponent,
    FooterComponent
  ],
  providers: []
})

export class WorkspaceModule {}

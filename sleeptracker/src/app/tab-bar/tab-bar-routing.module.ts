import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'sleep',
        loadChildren: () => import('../log-overnight-sleep/log-overnight-sleep.module').then(m => m.LogOvernightSleepPageModule)
      },
      {
        path: 'sleepiness',
        loadChildren: () => import('../log-sleepiness/log-sleepiness.module').then(m => m.LogSleepinessPageModule)
      },
      {
        path: 'viewData',
        loadChildren: () => import('../view-data/view-data.module').then(m => m.ViewDataPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/sleep',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sleep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}

import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageSkeletComponent } from './pages/page-skelet/page-skelet.component';
import { PoolActionsComponent } from './components/pool-actions/pool-actions.component';
import { CreatePoolProcessPageComponent } from './pages/create-pool-process-page/create-pool-process-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { PoolsPageComponent } from './pages/pools-page/pools-page.component';
import { PoolFillPageComponent } from './pages/pool-fill-page/pool-fill-page.component';
import { PoolResolver } from './shared/pools/pool-resolver.service';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ChangelogPageComponent } from './pages/changelog-page/changelog-page.component';
import { PollListType } from './shared/pools/pollListType';
import { PollsResultPageComponent } from './pages/polls-result/polls-result.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PageSkeletComponent,
    children: [
      {
        path: '',
        component: PoolActionsComponent,
      },
      {
        path: 'create',
        component: CreatePoolProcessPageComponent,
      },
      {
        path: 'contacts',
        component: ContactListPageComponent
      },
      {
        path: 'pools',
        component: PoolsPageComponent,
        data: {type: PollListType.PRIVATE_LIST}
      },
      {
        path: 'ownPools',
        component: PoolsPageComponent,
        data: {type: PollListType.OWN_LIST}
      },
      {
        path: 'publicPools',
        component: PoolsPageComponent,
        data: {type: PollListType.PUBLIC_LIST}
      },
      {
        path: 'pool/:id',
        component: PoolFillPageComponent,
        resolve: {pool: PoolResolver}
      },
      {
        path: 'result/:id',
        component: PollsResultPageComponent,
        resolve: {pool: PoolResolver}
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'changelog',
    component: ChangelogPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

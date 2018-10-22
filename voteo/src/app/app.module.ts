import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule, MatIconModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatStepperModule,
  NativeDateAdapter,
  DateAdapter,
  MatNativeDateModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { registerLocaleData } from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import { NosApiService } from './nos-wrapper/services/nos-api.service';

import { PoolSummaryComponent } from './components/pool-summary/pool-summary.component';
import { CreatePoolProcessPageComponent } from './pages/create-pool-process-page/create-pool-process-page.component';
import { SplashScreenPageComponent } from './pages/splash-screen-page/splash-screen-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { PoolsPageComponent } from './pages/pools-page/pools-page.component';
import { PoolTileComponent } from './components/pool-tile/pool-tile.component';
import { PoolFillPageComponent } from './pages/pool-fill-page/pool-fill-page.component';
import { PoolComponent } from './components/pool/pool.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ChangelogPageComponent } from './pages/changelog-page/changelog-page.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { PoolSettingsComponent } from './components/pool-settings/pool-settings.component';
import { LocalizedDatePipe } from './shared/localizationDatePipe/localization-date-pipe.pipe';
import { PollsResultPageComponent } from './pages/polls-result/polls-result.component';
import { PollResultComponent } from './components/poll-result/poll-result.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ContactAddDialogComponent } from './components/contact-add-dialog/contact-add-dialog.component';
import { PoolsService } from './shared/pools/pools.service';
import { PollsState } from './shared/pools/polls.state';
import { AppComponent } from './app.component';
import { PageSkeletComponent } from './pages/page-skelet/page-skelet.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './components/profile/profile.component';
import { PoolActionsComponent } from './components/pool-actions/pool-actions.component';
import { PoolActionElementComponent } from './components/pool-action-element/pool-action-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewQuestionPageComponent } from './components/new-question-page/new-question-page.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { NosWrapperModule } from './nos-wrapper/nos-wrapper.module';

registerLocaleData(localeSk);

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageSkeletComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProfileComponent,
    PoolActionsComponent,
    PoolActionElementComponent,
    NewQuestionPageComponent,
    PoolSummaryComponent,
    CreatePoolProcessPageComponent,
    SplashScreenPageComponent,
    ContactListPageComponent,
    PoolsPageComponent,
    PoolTileComponent,
    PoolFillPageComponent,
    PoolComponent,
    ProfilePageComponent,
    AboutPageComponent,
    ChangelogPageComponent,
    LanguageSelectorComponent,
    PoolSettingsComponent,
    LocalizedDatePipe,
    PollsResultPageComponent,
    PollResultComponent,
    CreateQuestionComponent,
    ContactAddDialogComponent
  ],
  imports: [
    ChartModule,
    MatSlideToggleModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserModule,
    NosWrapperModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([
      PollsState
    ]),
    NgxsStoragePluginModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    NosApiService,
    PoolsService,
    {
      provide: DateAdapter, useClass: NativeDateAdapter
    },
  ],
  entryComponents: [ContactAddDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

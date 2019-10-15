import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';

const socialLinks = [
  {
    url: 'https://github.com/xinaiguo/ngx-admin',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'wechat',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'qq',
  },
];

export const NB_CORE_PROVIDERS = [
  // ...MockDataModule.forRoot().providers,
  // ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  // NbSecurityModule.forRoot({
  //   accessControl: {
  //     guest: {
  //       view: '*',
  //     },
  //     user: {
  //       parent: 'guest',
  //       create: '*',
  //       edit: '*',
  //       remove: '*',
  //     },
  //   },
  // }).providers,

  // {
  //   provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  // },
  // AnalyticsService,
  // LayoutService,
  // PlayerService,
  // StateService,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NbAuthModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}

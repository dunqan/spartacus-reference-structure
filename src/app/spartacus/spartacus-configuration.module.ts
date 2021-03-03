import {NgModule} from '@angular/core';
import {provideConfig} from '@spartacus/core';
import {defaultCmsContentProviders, layoutConfig, mediaConfig,} from '@spartacus/storefront';
import {translationChunksConfig, translations} from '@spartacus/assets';

@NgModule({
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-devci7672.eastus.cloudapp.azure.com:9002'
        }
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: [
          'electronics-spa',
          'electronics',
          'apparel-de',
          'apparel-uk',
          'apparel-uk-spa',
        ],
      },
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.1'
      }
    }),
  ],
})
export class SpartacusConfigurationModule {}

import {NgModule} from '@angular/core';
import {BaseStorefrontModule, MainModule} from '@spartacus/storefront';
import {SpartacusFeaturesModule} from './spartacus-features.module';
import {SpartacusConfigurationModule} from './spartacus-configuration.module';

@NgModule({
  imports: [
    BaseStorefrontModule,
    MainModule, // workaround for 3.1.0, not required in >=3.1.1
    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
  ],
  exports: [BaseStorefrontModule, MainModule /* workaround for 3.1.0, not required in >=3.1.1 */],
})
export class SpartacusModule {}

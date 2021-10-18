import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from '@app/modules/shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}

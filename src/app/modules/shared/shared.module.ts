import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './components/divider/divider.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [DividerComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [DividerComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}

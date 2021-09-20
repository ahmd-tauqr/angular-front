import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, LayoutComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}

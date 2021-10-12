import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCatelogComponent } from './components/product-catelog/product-catelog.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'products',
    redirectTo: 'products/all',
    component: ProductCatelogComponent,
  },
  {
    path: 'products/all',
    component: ProductCatelogComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

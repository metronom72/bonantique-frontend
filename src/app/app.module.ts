import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SocialsComponent } from './socials/socials.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderBasketComponent } from './header-basket/header-basket.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionDescriptionComponent } from './subscription-description/subscription-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ReviewPreviewComponent } from './review-preview/review-preview.component';
import { SliderComponent } from './slider/slider.component';
import { PacksListComponent } from './pages/packs/list/list.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidenavCatalogComponent } from './sidenav-catalog/sidenav-catalog.component';
import { PaginationComponent } from './pagination/pagination.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  // {
  //   path: 'packs/new',
  //   component: PackComponent,
  // },
  {
    path: 'packs',
    component: PacksListComponent,
  },
  // {
  //   path: 'packs/:id',
  //   component: PackComponent,
  // },
  // {
  //   path: 'packs/:id',
  //   component: PackComponent,
  // },
  //
  // {
  //   path: 'bonds/new',
  //   component: PackComponent,
  // },
  // {
  //   path: 'bonds',
  //   component: PacksComponent,
  // },
  // {
  //   path: 'bonds/:id',
  //   component: PackComponent,
  // },
  // {
  //   path: 'bonds/:id',
  //   component: PackComponent,
  // },
  //
  // {
  //   path: 'inspirations/new',
  //   component: PackComponent,
  // },
  // {
  //   path: 'inspirations',
  //   component: PackComponent,
  // },
  // {
  //   path: 'inspirations/:id',
  //   component: PackComponent,
  // },
  //
  // {
  //   path: 'orders/new',
  //   component: PackComponent,
  // },
  // {
  //   path: 'orders',
  //   component: PackComponent,
  // },
  // {
  //   path: 'orders/:id',
  //   component: PackComponent,
  // },
  //
  // {
  //   path: 'login',
  //   component: PackComponent,
  // },
  // {
  //   path: 'logout',
  //   component: PackComponent,
  // },
  // {
  //   path: 'resetpassword',
  //   component: PackComponent,
  // },
  // {
  //   path: 'confirmations/email',
  //   component: PackComponent,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SocialsComponent,
    HeaderBasketComponent,
    FooterComponent,
    SubscribeComponent,
    SubscriptionDescriptionComponent,
    BannerComponent,
    WelcomeComponent,
    ProductPreviewComponent,
    ArticlePreviewComponent,
    ReviewPreviewComponent,
    SliderComponent,
    PacksListComponent,
    BreadcrumbsComponent,
    SidenavCatalogComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

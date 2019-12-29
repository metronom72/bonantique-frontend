import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SocialsComponent } from './components/socials/socials.component';
import { HeaderBasketComponent } from './components/header-basket/header-basket.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SubscriptionDescriptionComponent } from './components/subscription-description/subscription-description.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ReviewPreviewComponent } from './components/review-preview/review-preview.component';
import { SliderComponent } from './components/slider/slider.component';
import { PacksListComponent } from './pages/packs/list/list.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SidenavCatalogComponent } from './components/sidenav-catalog/sidenav-catalog.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModalComponent } from './components/modal/modal.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'packs',
    component: PacksListComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
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
    PaginationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

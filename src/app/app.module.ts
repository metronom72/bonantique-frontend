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
    SubscriptionDescriptionComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

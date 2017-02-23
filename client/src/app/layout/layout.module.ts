import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UserProfileComponent, LogoComponent, MenuComponent, HeaderComponent, FooterComponent, PageContentComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageContentComponent,
    MaterialModule
  ]
})
export class LayoutModule {}

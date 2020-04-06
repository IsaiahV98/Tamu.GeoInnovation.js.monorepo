import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { HeaderCovidComponent } from './components/header-covid/header-covid.component';
import { TestingSiteComponent } from './components/forms/testing-site/testing-site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIFormsModule } from '@tamu-gisc/ui-kits/ngx/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, UIFormsModule],
  declarations: [HeaderComponent, FooterComponent, HeaderMobileComponent, HeaderCovidComponent, TestingSiteComponent],
  exports: [HeaderComponent, FooterComponent, HeaderMobileComponent, HeaderCovidComponent, TestingSiteComponent]
})
export class GeoservicesCoreNgxModule {}

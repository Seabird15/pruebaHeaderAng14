import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { DataTableComponentComponent } from './data.table-component/data.table-component.component';
import { BannerPortadaComponentComponent } from './banner.portada-component/banner.portada-component.component';
import { ItemDetailComponentComponent } from './item.detail-component/item.detail-component.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BannerPortadaComponentComponent,
    DataTableComponentComponent,
    FooterComponentComponent,
    ItemDetailComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

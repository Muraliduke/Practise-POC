import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
// For MDB Angular Free
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { LoaderComponent } from './loader/loader.component'
@NgModule({
  declarations: [HeaderComponent, FooterComponent, GridComponent, LoaderComponent],
  imports: [
    CommonModule,
    NavbarModule, WavesModule
  ],
  exports: [
    HeaderComponent, FooterComponent, GridComponent
  ]
})
export class SharedModule { }

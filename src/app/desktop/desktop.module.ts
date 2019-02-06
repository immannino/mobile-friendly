import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [DesktopComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DesktopModule { }

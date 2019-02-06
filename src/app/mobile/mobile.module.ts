import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [MobileComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MobileModule { }

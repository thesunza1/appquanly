import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguoiDungGuoiPhieuComponent } from './nguoi-dung-guoi-phieu/nguoi-dung-guoi-phieu.component';
import { NhanVienNhanPhieuComponent } from './nhan-vien-nhan-phieu/nhan-vien-nhan-phieu.component';
import { NhanVienKyThuatComponent } from './nhan-vien-ky-thuat/nhan-vien-ky-thuat.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    NguoiDungGuoiPhieuComponent,
    NhanVienNhanPhieuComponent,
    NhanVienKyThuatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

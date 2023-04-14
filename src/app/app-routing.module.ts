import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NguoiDungGuoiPhieuComponent } from './nguoi-dung-guoi-phieu/nguoi-dung-guoi-phieu.component';
import { NhanVienNhanPhieuComponent} from './nhan-vien-nhan-phieu/nhan-vien-nhan-phieu.component';
import { NhanVienKyThuatComponent } from './nhan-vien-ky-thuat/nhan-vien-ky-thuat.component';

export const routes: Routes = [
  { path: '',
    component: NguoiDungGuoiPhieuComponent
  },
  { path: 'nhanviennhanphieu',
    component: NhanVienNhanPhieuComponent
  },
  { path: 'nhanvienkythuat',
    component: NhanVienKyThuatComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

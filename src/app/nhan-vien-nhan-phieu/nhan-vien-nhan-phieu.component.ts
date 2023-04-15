import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatTableDataSourcePaginator, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-nhan-vien-nhan-phieu',
  templateUrl: './nhan-vien-nhan-phieu.component.html',
  styleUrls: ['./nhan-vien-nhan-phieu.component.css']
})
export class NhanVienNhanPhieuComponent {
  constructor(private apiService: ApiService,
    private _snackBar: MatSnackBar,
  ) { }


  ELEMENT_DATA: any = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns = ['stt', 'PBH_DANHGIA_LOINHAN', 'PBH_DANHGIA_SAO', 'PBH_NOIDUNG', 'PBH_TRANGTHAI', 'function'];
  searchForm = new FormGroup({
    sdt: new FormControl(null)
  });

  search() {
    if (this.searchForm.controls['sdt'].value != null) {
      this.apiSearchNV(this.searchForm.controls['sdt'].value);
    } else {
      this.apiSearch();
    }
    this.apiGetDmdichvu();
  }

  apiSearch() {
    this.apiService.phieuBaoHong().subscribe(res => {
      this.dataSource.data = res.data;
    });
  }
  apiSearchNV(sdt: any) {
    this.apiService.getDSPhieuBaoHongBySdtNhanVien(sdt).subscribe(res => {
      this.dataSource.data = res.data;
    });
  }

  apiGetChiTiet(element: any) {
    this.setViewCapNhatChiTiet(element);
  }

  setViewCapNhatChiTiet(element: any) {
    this.addForm.patchValue({
      DV_ID: element.DV_ID,
      PBH_NOIDUNG: element.PBH_NOIDUNG,
      PBH_TRANGTHAI: element.PBH_TRANGTHAI
    });
    this.addForm.controls.DV_ID.disable();
    this.addForm.controls.PBH_NOIDUNG.disable();
    this.addForm.controls.PBH_TRANGTHAI.disable();
  }
  dmdichvu: any = [];
  apiGetDmdichvu() {
    this.apiService.getAll().subscribe(res => {
      this.dmdichvu = res.data;
    });
  }
  addForm = new FormGroup({
    DV_ID: new FormControl(null),
    PBH_NOIDUNG: new FormControl(null),
    PBH_TRANGTHAI: new FormControl(null)
  });
  apiXN(body: any) {
    this.apiService.xacnhanPhieuBaoHong(body).subscribe(res => {
      if (res.status == 200) {
        this._snackBar.open('Cập nhật thành công', 'Đóng')
        this.search();
      } else {
        this._snackBar.open('Cập nhật lỗi', 'Đóng');
      }
    })
  }
  apiBG(body: any) {
    this.apiService.bangiaoxulyPhieuBaoHong(body).subscribe(res => {
      if (res.status == 200) {
        this._snackBar.open('Cập nhật thành công', 'Đóng')
        this.search();
      } else {
        this._snackBar.open('Cập nhật lỗi', 'Đóng');
      }
    })
  }

}

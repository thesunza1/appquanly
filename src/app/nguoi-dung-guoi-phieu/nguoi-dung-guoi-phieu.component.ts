import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatTableDataSourcePaginator, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nguoi-dung-guoi-phieu',
  templateUrl: './nguoi-dung-guoi-phieu.component.html',
  styleUrls: ['./nguoi-dung-guoi-phieu.component.css']
})
export class NguoiDungGuoiPhieuComponent {
  constructor(private apiService: ApiService,
    private _snackBar: MatSnackBar,
  ) { }

  addForm = new FormGroup({
    PBH_ID: new FormControl(null),
    KH_ID: new FormControl(null),
    DV_ID: new FormControl(null),
    PBH_NOIDUNG: new FormControl(null),
    PBH_TRANGTHAI: new FormControl(null)
  });
  ELEMENT_DATA: any = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns = ['stt', 'DV_TENDV', 'PBH_NOIDUNG', 'PBH_TRANGTHAI', 'function'];
  searchForm = new FormGroup({
    sdt: new FormControl(null)
  });

  search() {
    var conditionSearch = this.searchForm.getRawValue();
    this.apiSearch(conditionSearch.sdt);
  }

  apiSearch(sdt: any) {
    this.apiService.getDSBaoHongBySdtKhachHang(sdt).subscribe(res => {
      this.dataSource.data = res.phieubaohong;
    });
  }
  dmdichvu: any = [];
  apiGetDmdichvu() {
    let sdt = this.searchForm.controls['sdt'].value;
    this.apiService.getDSBaoHongBySdtKhachHang(sdt).subscribe(res => {
      this.dmdichvu = res.data;
    });
  }
  phieuDangKy: any = {
    sdt: 0,
    DV_ID: null,
    PBH_NOIDUNG: null
  }

  insertPhieuBaoHong() {
    let sdt = this.searchForm.controls['sdt'].value;
    this.phieuDangKy.sdt = sdt;
    this.phieuDangKy.DV_ID = this.addForm.controls['DV_ID'].value;
    this.phieuDangKy.PBH_NOIDUNG = this.addForm.controls['PBH_NOIDUNG'].value;
    this.apiInsertPhieuBaoHong(this.phieuDangKy);

  }
  apiInsertPhieuBaoHong(body: any) {
    this.apiService.themPhieuBaoHong(body).subscribe(res => {
      if (res.status == 200) {
        this._snackBar.open('Thêm mới thành công', 'Đóng')
        this.search();
      } else {
        this._snackBar.open('Thêm Lỗi', 'Đóng');
      }
    })
  }

  apiGetChiTiet(element: any) {
    this.setViewCapNhatChiTiet(element);
  }

  setViewCapNhatChiTiet(element: any) {
    this.addForm.patchValue({
      PBH_ID: element.PBH_ID,
      KH_ID: element.KH_ID,
      DV_ID: element.DV_ID,
      PBH_NOIDUNG: element.PBH_NOIDUNG,
      PBH_TRANGTHAI: element.PBH_TRANGTHAI
    });
  }

  apiCapNhat(body: any) {
    this.apiService.capnhatPhieuBaoHong(body).subscribe(res => {
      if (res.status == 200) {
        this._snackBar.open('Cập nhật thành công', 'Đóng')
        this.search();
      } else {
        this._snackBar.open('Cập nhật lỗi', 'Đóng');
      }
    })
  }

  capNhat() {
    if (this.addForm.valid) {
      let form = this.addForm.getRawValue();
      this.apiCapNhat(form);
    }
  }
}

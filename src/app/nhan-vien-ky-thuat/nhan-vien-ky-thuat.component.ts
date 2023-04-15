import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatTableDataSourcePaginator, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-nhan-vien-ky-thuat',
  templateUrl: './nhan-vien-ky-thuat.component.html',
  styleUrls: ['./nhan-vien-ky-thuat.component.css']
})
export class NhanVienKyThuatComponent {
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
  dmTrangThai: any = [
    {
      TRANG_THAI: 'PHIEU_DANG_DUOC_GUI',
      TEN_TRANG_THAI: 'Phiếu đang được gửi',
    },
    {
      TRANG_THAI: 'PHIEU_DA_DUOC_TIEP_NHAN',
      TEN_TRANG_THAI: 'Phiếu đã được tiếp nhận',
    },
    {
      TRANG_THAI: 'PHIEU_DANG_DUOC_GUI',
      TEN_TRANG_THAI: 'Phiếu đã giao kỹ thuật xử lý',
    },
    {
      TRANG_THAI: 'HOAN_THANH',
      TEN_TRANG_THAI: 'Hoàn thành',
    },
  ];
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

  apiHT(body: any) {
    this.apiService.hoanthanhPhieuBaoHong(body).subscribe(res => {
      if (res.status == 200) {
        this._snackBar.open('Cập nhật thành công', 'Đóng')
        this.search();
      } else {
        this._snackBar.open('Cập nhật lỗi', 'Đóng');
      }
    })
  }
}

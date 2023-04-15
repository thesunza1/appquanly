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
  ) {

    apiService.getDanhSachNhanVienKyThuat().subscribe(res => {
      this.dsNhanVienKyThuat = res.data;
    })
  }

  dsNhanVienKyThuat: any;

  ELEMENT_DATA: any = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns = ['stt', 'PBH_DANHGIA_LOINHAN', 'PBH_DANHGIA_SAO', 'PBH_NOIDUNG', 'PBH_TRANGTHAI', 'NVKY_THUAT','NVTIEP_NHAN', 'function'];
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
      PBH_TRANGTHAI: element.PBH_TRANGTHAI,
      PBH_DANHGIA_LOINHAN: element.PBH_DANHGIA_LOINHAN,
      PBH_DANHGIA_SAO: element.PBH_DANHGIA_SAO,
      ID_NV_XU_LY: element.ID_NV_XU_LY,
      ID_NV_TIEP_NHAN: element.ID_NV_TIEP_NHAN,

    });
    this.addForm.controls.DV_ID.disable();
    this.addForm.controls.PBH_NOIDUNG.disable();
    this.addForm.controls.PBH_TRANGTHAI.disable();
    this.addForm.controls.PBH_DANHGIA_SAO.disable();
    this.addForm.controls.PBH_DANHGIA_LOINHAN.disable();
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
    PBH_TRANGTHAI: new FormControl(null),
    PBH_DANHGIA_SAO: new FormControl(null),
    PBH_DANHGIA_LOINHAN: new FormControl(null),
    ID_NV_XU_LY: new FormControl(null),
    ID_NV_TIEP_NHAN: new FormControl(null),
  });
  dmDanhGia: any = [
    {
      DANHGIA_SAO: 1,
      DANHGIA: 'Không tốt',
    },
    {
      DANHGIA_SAO: 2,
      DANHGIA: ' Tạm được',
    },
    {
      DANHGIA_SAO: 3,
      DANHGIA: ' Bình thường',
    },
    {
      DANHGIA_SAO: 4,
      DANHGIA: ' Hài lòng',
    },
    {
      DANHGIA_SAO: 5,
      DANHGIA: ' Cực kỳ hài lòng',
    },
  ];


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
      TRANG_THAI: 'PHIEU_DA_GIAO_KY_THUAT_XU_LY',
      TEN_TRANG_THAI: 'Phiếu đã giao kỹ thuật xử lý',
    },
    {
      TRANG_THAI: 'HOAN_THANH',
      TEN_TRANG_THAI: 'Hoàn thành',
    },
  ];

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

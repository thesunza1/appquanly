import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatTableDataSourcePaginator, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nguoi-dung-guoi-phieu',
  templateUrl: './nguoi-dung-guoi-phieu.component.html',
  styleUrls: ['./nguoi-dung-guoi-phieu.component.css']
})
export class NguoiDungGuoiPhieuComponent {
  constructor(private apiService: ApiService) { }
  dichVuSuDungs: any = [
    {
      dv_id: 1,
      dv_tendv: 'mytv',
    },
    {
      dv_id: 2,
      dv_tendv: 'wifi home 1',
    },
    {
      dv_id: 3,
      dv_tendv: 'wifi home 2',
    },
    {
      dv_id: 4,
      dv_tendv: 'wifi home 3',
    },
  ]
  addForm = new FormGroup({
    sdt: new FormControl(null),
    id: new FormControl(null),
    dv_id: new FormControl(null),
    dv_ten: new FormControl(null),
    noidung: new FormControl(null),
    trangthai: new FormControl(null)
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
    this.apiService.getDSBaoHongByIdKhachHang(sdt).subscribe(res => {
      this.dataSource.data = res.phieubaohong;
    });
  }
  dmdichvu = [];
  apiGetDmdichvu() {
    let sdt = this.searchForm.controls['sdt'].value;
    this.apiService.getDSBaoHongBySdtKhachHang(sdt).subscribe(res => {
      this.dmdichvu = res.data;
    });
  }

}

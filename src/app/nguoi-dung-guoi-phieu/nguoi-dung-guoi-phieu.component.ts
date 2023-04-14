import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-nguoi-dung-guoi-phieu',
  templateUrl: './nguoi-dung-guoi-phieu.component.html',
  styleUrls: ['./nguoi-dung-guoi-phieu.component.css']
})
export class NguoiDungGuoiPhieuComponent {
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
    noidung: new FormControl(null)
  });

}

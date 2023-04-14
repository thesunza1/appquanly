import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienKyThuatComponent } from './nhan-vien-ky-thuat.component';

describe('NhanVienKyThuatComponent', () => {
  let component: NhanVienKyThuatComponent;
  let fixture: ComponentFixture<NhanVienKyThuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanVienKyThuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhanVienKyThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

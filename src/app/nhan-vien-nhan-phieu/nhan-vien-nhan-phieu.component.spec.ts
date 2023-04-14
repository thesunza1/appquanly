import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienNhanPhieuComponent } from './nhan-vien-nhan-phieu.component';

describe('NhanVienNhanPhieuComponent', () => {
  let component: NhanVienNhanPhieuComponent;
  let fixture: ComponentFixture<NhanVienNhanPhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanVienNhanPhieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhanVienNhanPhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

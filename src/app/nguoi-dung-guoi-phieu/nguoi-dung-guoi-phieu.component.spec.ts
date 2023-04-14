import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungGuoiPhieuComponent } from './nguoi-dung-guoi-phieu.component';

describe('NguoiDungGuoiPhieuComponent', () => {
  let component: NguoiDungGuoiPhieuComponent;
  let fixture: ComponentFixture<NguoiDungGuoiPhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguoiDungGuoiPhieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NguoiDungGuoiPhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

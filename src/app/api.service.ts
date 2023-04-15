import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://10.102.24.81:8000/api/';
  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<any>(this.apiUrl + 'DichVu/getDanhSachDichVu').pipe()
  }
  
  getDSBaoHongByIdKhachHang(id:any){
    return this.http.get<any>(this.apiUrl+'DichVu/getDSDichVuByIdKhachHang/'+ id).pipe()
  }

  getDSBaoHongBySdtKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'KhachHang/getDSBaoHongBySdtKhachHang/'+ sdt).pipe()
  }

  getDSPhieuBaoHongBySdtNhanVien(sdt:any){
    return this.http.get<any>(this.apiUrl+'NhanVien/getDSPhieuBaoHongBySdtNhanVien/'+ sdt).pipe()
  }

  phieuBaoHong(){
    return this.http.get<any>(this.apiUrl+'PhieuBaoHong/danhsachphieu').pipe()
  }

  themPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/insert', body).pipe()
  }

  capnhatPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/update', body).pipe()
  }
  xacnhanPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/xacNhan', body).pipe()
  }
  bangiaoxulyPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/banGiaoXuLy', body).pipe()
  }
  hoanthanhPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/hoanThanh', body).pipe()
  }
  
  getDSDichVuBySdtKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'DichVu/getDSDichVuBySdtKhachHang/'+ sdt).pipe()
  } 
}

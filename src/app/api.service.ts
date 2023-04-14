import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get<any>(this.apiUrl + 'DichVu/geDanhSachDichVu').pipe()
  }
  
  getDSBaoHongByIdKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'KhachHang/getDSBaoHongBySdtKhachHang/'+ sdt).pipe()
  }

  getDSBaoHongBySdtKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'DichVu/getDSDichVuByIdKhachHang/'+ sdt).pipe()
  }

  phieuBaoHong(sdt:any){
    return this.http.get<any>(this.apiUrl+'PhieuBaoHong/danhsachphieu').pipe()
  }

  themPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/insert', body).pipe()
  }

  bangiaoxulyPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/banGiaoXuLy', body).pipe()
  }

  xacnhanPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/xacNhan', body).pipe()
  }

  capnhatPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/update', body).pipe()
  }

  hoanthanhPhieuBaoHong(body:any){
    return this.http.post<any>(this.apiUrl+'PhieuBaoHong/hoanThanh', body).pipe()
  }
}

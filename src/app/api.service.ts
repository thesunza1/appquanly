import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://10.102.21.28:8000/api/';
  constructor(private http: HttpClient) { }



  getAll(){
    return this.http.get<any>(this.apiUrl).pipe()
  }
  
  getDSBaoHongByIdKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'KhachHang/getDSBaoHongBySdtKhachHang/'+ sdt).pipe()
  }

  getDSBaoHongBySdtKhachHang(sdt:any){
    return this.http.get<any>(this.apiUrl+'DichVu/getDSDichVuByIdKhachHang/'+ sdt).pipe()
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any[]>{
    return this.httpClient.get<any[]>(apiUrl).pipe(
    )
  }
}


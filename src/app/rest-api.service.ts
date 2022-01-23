import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  Api_root = 'https://reqres.in/api/';

  constructor(private http:HttpClient) { }
  users(data:any):any{
    return this.http.post(this.Api_root+'users',JSON.stringify(data),httpOptions)
  }
  listuser():any{
    return this.http.get(this.Api_root+'users?page=1')
  }
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  Api_root = 'http://localhost:3000/api/';
  imageUrl = 'http://localhost:3000/upload/'
  constructor(private http:HttpClient) { }
  users(data:any):any{
    return this.http.post(this.Api_root+'users',JSON.stringify(data),httpOptions)
  }
  listuser():any{
    return this.http.get(this.Api_root+'users?page=1')
  }
  upload(data:any):any{
    return this.http.post(this.Api_root+'upload',data)
  }
}

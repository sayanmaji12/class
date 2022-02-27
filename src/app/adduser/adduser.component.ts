import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  roles = '' as any;
  roleList = [] as any;
  username = '' as any;
  email = '' as any;
  password = '' as any;
  userType = '' as any;
  allUser = [] as any;
  constructor(public rest:RestApiService) { }

  ngOnInit(): void {
    this.allRoles();
    this.allUsers();
  }
  allRoles(){
    var data = {}

    this.rest.allRoles(data).subscribe((response:any)=>{
      
      this.roleList =response.response;
      console.log( this.roleList)
    })
  }
  onSubmit():any{
    var tempArr=[] as any;
    for(let role of this.roles){
      tempArr.push({role_id:role})
    }
    console.log(tempArr)
    var data = {
      "username": this.username,
      "email": this.email,
      "password":this.password,
      "userType":this.userType,
      "roles" :tempArr
    }
    console.log(data)
    // this.rest.addUser(data).subscribe((res:any)=>{
    //   console.log(res)
    // })
  }
  allUsers(){
    var data = {}

    this.rest.allUsers(data).subscribe((response:any)=>{
      
      this.allUser =response.response;
      console.log( this.allUser)
    })
  }
}

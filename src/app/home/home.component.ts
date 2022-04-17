import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import {RestApiService} from '../rest-api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  new = 'Welcome' as any;
  arr = '' as any;
  email = '';
  listUsers = [] as any;
  fileName = '';
  constructor(private rou: Router,public rest:RestApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.rest.listuser().subscribe((response:any)=>{
      
      this.listUsers =response.data;
      console.log( this.listUsers)
    })
  }
  goTo():any{
  
    if(this.email==''){
      console.log("Enter email first");
      return false;
    }
    var array = [];
    array.push(this.arr)
    this.rou.navigate(['home/dashboard/asass/2'])
    var data= {
      name: this.email,
      movies: array
    }
    //console.log(data)
    this.rest.users(data).subscribe((response:any)=>{
      console.log(response.name)
    })
  }
  showUpload(){
    const image= document.getElementById('file') as HTMLInputElement;
    image.click();
  }

  uploadImg(){
    console.log(".......")
    const image= document.getElementById('file') as HTMLInputElement;
    const file = image.files;
    console.log(file)
    if(file){
      // const reader = new FileReader();
      // reader.readAsDataURL(file[0])
      const fileData = new FormData();
      fileData.append('file',file[0])
      this.rest.upload(fileData).subscribe((res:any)=>{
        if(res.success){
          this.fileName=res.fileName
        }
      })
    }

  }

}

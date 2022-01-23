import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from  '@angular/router';
import {Location} from '@angular/common';
import {CommonService} from '../common.service';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  toppings: FormGroup;

  coverages = [{
    name: 'Roadside assistance cover',
    value: true
  }, {
    name: 'Natural calamities',
    value: false
  }, {
    name: 'Personal accident cover',
    value: true
  }, {
    name: 'Man-made disasters',
    value: true
  }, {
    name: 'Theft of your car',
    value: false
  }, {
    name: 'Third-party liability insurance',
    value: true
  }, {
    name: 'Injury to a person',
    value: true
  }];
  constructor(private active:ActivatedRoute,private route:Router,private location: Location,public common:CommonService,public fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: true,
      extracheese: false,
      mushroom: false
    });
   }

  ngOnInit(): void {
    //console.log(this.active.snapshot.params)
    //this.forloop()
  }
  
  goto():any{
    this.route.navigate(['/'])
  }
  // forloop():any{
  //   for (let arr of this.coverages){
  //     //console.log(arr)
  //   }
  // }
  onSubmit():any{
    var temparr = [];
    for (let arr of this.coverages){
      //console.log(arr)
      if(!arr.value){
        temparr.push(arr)
      }
    }
    // for(var i=0;i<this.coverages.length;i++){
    //   if(!this.coverages[i].value){
    //     temparr.push(this.coverages[i])
    //   }
    // }
    console.log(temparr);
    
  }
}

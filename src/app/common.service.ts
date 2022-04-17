import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private location: Location) { }
  back():any{
    this.location.back();
  }
  
}
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): any {
    return 'Two';
  }
}
import { GlobalConstants } from './../../../globalConstants';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  lengthcheck:boolean;
  count: number;
  phnent: String;
  constructor(private router: Router) { 
    this.lengthcheck = false;
    this.count=0;
  }
  
  signin() {
    if(!this.lengthcheck && this.count>0){
      GlobalConstants.phnnum = this.phnent;
      this.router.navigate(['screen2']);
    }   
  }
  check(value:String){
    let len = value.length;
    if(len<10 || len>10){
      this.lengthcheck = true;
      this.phnent = value;
    }else{
      this.lengthcheck = false;
    }
    this.count++;
  }
}

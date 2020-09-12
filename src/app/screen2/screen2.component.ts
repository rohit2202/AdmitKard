import { GlobalConstants } from './../../../globalConstants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  otpAuthorised: String;
  phnent: String;
  constructor(private router: Router) { 
    this.otpAuthorised = '1234';
    this.phnent = GlobalConstants.phnnum;
  }

  ngOnInit(): void {
  }
  // screen2() {
  //   this.router.navigate(['screen3']);
  // }
  checkOTP(value){
      var a1 = value.ctrl_0;
      var a2 = value.ctrl_1;
      var a3 = value.ctrl_2;
      var a4 = value.ctrl_3;
      var otpEntered = a1+''+a2+''+a3+''+a4;
      if(otpEntered === this.otpAuthorised){
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['screen3']);
      }else{
        alert("Invalid OTP");
      } 
  }

}

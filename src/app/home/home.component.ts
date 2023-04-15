import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginView: boolean = true;
  loginForm: FormGroup;
  signupForm!: FormGroup;

  constructor(private apiService: ApiService) {
    this.loginForm = new FormGroup({
      loginUsername: new FormControl('', [Validators.required]),
      loginPassword: new FormControl('', [Validators.required])
    });
   }

  signupView(){
    this.isLoginView = !this.isLoginView;
    this.signupForm = new FormGroup({
      signupUsername: new FormControl('', [Validators.required]),
      signupPassword: new FormControl('', [Validators.required]),
      signupConfirmPassword: new FormControl('', [Validators.required])
    })
  }
  loginView(){
    this.isLoginView = !this.isLoginView;
  }

  loginSubmit(){
    if(!this.loginForm.valid){
      alert("Invalid username and/or password!");
      return;
    }
    //post the login form to backend
    console.log(this.loginForm.value);
    this.apiService.userLogin(this.loginForm.value);
    // this.apiService.userLogin().subscribe(res => {
    //   console.log(res);
    // });
  }

  signupSubmit(){
    if(!this.signupForm.valid){
      alert("Invalid username and/or password!");
      return;
    }

    if(this.signupForm.get("signupPassword")?.value != this.signupForm.get("signupConfirmPassword")?.value){
      alert("password and confirm password didn't match");
      return;
    }
      
    //post the signup form to backend
    this.apiService.userSignup(this.signupForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginView: boolean = true;
  loginForm: FormGroup;
  signupForm!: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
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
    //this.apiService.userLogin(this.loginForm.value);
    this.apiService.userLogin(this.loginForm.value).subscribe((res:any) => {
      if(res.statusCode == 200){
        this.router.navigate(['/chatroom', res.user.name]);
      }else{
        alert(res.statusMessage);
      }
    });
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
    this.apiService.userSignup(this.signupForm.value).subscribe((res: any) => {
      if(res.statusCode == 200){
        alert(res.statusMessage);
        this.loginView();
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser } from '../models/login-user';
import { signupUser } from '../models/signup-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  userSignup(user: signupUser){
    this.http.post('/api/userSignup', user).subscribe(res=>{
      console.log(res);
    });
  }

  userLogin(user: loginUser){
    this.http.post('/api/userLogin', user).subscribe(res=>{
      console.log(res);
    });
  }
}

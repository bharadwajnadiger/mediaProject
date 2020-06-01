import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthResponseModel } from 'src/app/core/models/authResponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signForm: FormGroup;
  iconValue="visibility_off";
  iconValueConfrim="visibility_off";
  showSignUpForm: boolean;
  response:AuthResponseModel;
  constructor( private formBuilder: FormBuilder, private authService : AuthService) {
    this.loginForm = this.formBuilder.group({
      mobile_number: [ , [Validators.required]],
      password: [, [Validators.required]],
    });
    this.signForm = this.formBuilder.group({
      Mail: [ , [Validators.required, Validators.email]],
      password: [, [Validators.required]],
      confirmPassword: [, [Validators.required]],
    })

  }

  ngOnInit(): void {
  }

  changeForm(value){
    this.iconValue =  "visibility_off" ;
    this.iconValueConfrim =  "visibility_off" ;
    this.loginForm.reset();
    this.signForm.reset();
    this.showSignUpForm = value ==="Sign Up" ? true :false;
  }

  onSubmitLogin(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe( response =>{
      this.response = response.data;
      localStorage.set("userDetails", this.response);
      console.log(this.response);


    }, error =>{
       console.log(error);
    })
  }

  onSubmitSignup(){
    console.log(this.signForm.valid);
  }

}

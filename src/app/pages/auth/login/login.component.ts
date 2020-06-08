import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthResponseModel } from 'src/app/core/models/authResponse.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmedValidator } from 'src/app/core/utilities/confirmPassword.utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  signForm: FormGroup;
  iconValue = "visibility_off";
  iconValueConfrim = "visibility_off";
  showSignUpForm: boolean;
  response: AuthResponseModel;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      mobile_number: [, [Validators.required]],
      password: [, [Validators.required]],
    });
    this.signForm = this.formBuilder.group({
      name: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      mobile_number: [, [Validators.required]],
      language: [, [Validators.required]],
      user_type: [, [Validators.required]],
      password: [, [Validators.required]],
      confirmPassword: [, [Validators.required]],
    }, { 
      validator: ConfirmedValidator('password', 'confirmPassword')
    })

  }

  ngOnInit(): void {
  }

  changeForm(value) {
    this.iconValue = "visibility_off";
    this.iconValueConfrim = "visibility_off";
    this.loginForm.reset();
    this.signForm.reset();
    this.showSignUpForm = value === "Sign Up" ? true : false;
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      this.subscription = this.authService.login(this.loginForm.value).subscribe(response => {
        this.response = response.data;
        console.log(this.response);
        localStorage.setItem("userDetails", JSON.stringify(this.response));
        if(localStorage.getItem("userDetails")){
          let userDetails =JSON.parse(localStorage.getItem("userDetails"));
          if(userDetails.user_type ==="USER"){
            this.router.navigate(['/menu/users']);
          }
        }
      
      }, error => {
        // alertify.set('notifier', 'position', 'bottom-center');
        // alertify.error(error);
       // this.router.navigate(['/user']);
      })
    }

  }

  onSubmitSignup() {
    if (this.signForm.valid) {
      this.subscription = this.authService.addUser(this.signForm.value).subscribe(response => {
        console.log(response);
        this.changeForm("Login");
      }, error => {
        // alertify.set('notifier', 'position', 'bottom-center');
        // alertify.error(error);
      })
    }

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }



}

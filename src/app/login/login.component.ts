import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faFacebookF ,faLinkedinIn,faGoogle}from '@fortawesome/free-brands-svg-icons'
import { AuthenticationService } from '../services/authentication.service';
import { VisibilityService } from '../services/visability.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  //Icons Definations
  fafacebook=faFacebookF
  falinkedin=faLinkedinIn
  fagoogle = faGoogle

  // Form And constructor 
  loginForm! : FormGroup
  constructor(
    private fb:FormBuilder , 
    private auth : AuthenticationService , 
    private router : Router,
    private visibilityService: VisibilityService){}

  ngOnInit(): void
   {
    this.loginForm = this.fb.group({
      UserName: ['' , Validators.required],
      Password: ['' , Validators.required],
    })
  }
  
 
   
  onLogin() 
  {
    if (this.loginForm.valid) {
      this.auth.Login(this.loginForm.value).subscribe({
        next: (res) => 
        {
          console.log(res.message);
          this.loginForm.reset();
          //accept Token Value
          this.auth.storeToken(res.token);
          this.auth.isLoggedIn$.next(true);
          this.visibilityService.toggleVisibility();
        },
        error: (err) =>
        {
          console.error(err);
          alert(err?.error?.message || 'An error occurred during login.');
        }
      });
      this.loginForm.reset();
    } else
    {
      // throw eror and the required fields
      this.validateAllFormFields(this.loginForm);
      alert("Please fill out the required fields.");
    }
  }
  

  private validateAllFormFields(formgroup: FormGroup){
  Object.keys(formgroup.controls).forEach(field=>{
    const control = formgroup.get(field);
    if(control instanceof FormControl){
      control.markAsDirty({onlySelf:true})
    }else if(control instanceof FormGroup){
     this.validateAllFormFields(control);
    }
  })
  }




}

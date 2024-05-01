import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false) ;


  private baseUrl : string = "https://localhost:7159/api/User/"
  constructor(private http : HttpClient , private router : Router) { }



  Login(Credentials : any){
 // Call http.post method with correct parameters
    return this.http.post<any>(`${this.baseUrl}Login`, Credentials);
  } 
  
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  
  storeToken(tokenValue : string){
    localStorage.setItem('token' , tokenValue)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn() : boolean{
    // this function return boolean so i must set (!!) to void convert it into boolean
    return !!localStorage.getItem('token'); 
  }







}

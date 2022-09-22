import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponceData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoding = false;
  error : string;
  constructor(private authService: AuthService, private router : Router, private componemntFactoryResolver : ComponentFactoryResolver) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.error = "";
    let authObs : Observable<AuthResponceData>;
    this.isLoding = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);

    } else {
      authObs = this.authService.signup(email, password);
    }
     authObs.subscribe(
      (resData) => {
        this.isLoding = false;
        console.log(resData);
        this.router.navigate(['/racipes']);
      },
      errorMassage => {
        this.error = errorMassage;
        console.log(errorMassage);
        // this.showErrorAlert(errorMassage);
      }
    );
    this.isLoding = false;
    form.reset();
  }
  onCloseAlert(){
    this.error = '';
  }
//  private showErrorAlert(error : string){
//   const alertCmpFactory =this.componemntFactoryResolver.resolveComponentFactory(AlertComponent);

//   }
}

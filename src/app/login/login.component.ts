import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogin=true;
  loginForm = new FormGroup({
    email: new FormControl(),
  });

  onSubmit= () =>{
    console.log(this.loginForm.value);
  }
}

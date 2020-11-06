import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmit: boolean = false;

  public login_form = this.fb.group({
    email: ['d@mail.com', [Validators.required, Validators.email]],
    password: ['12345', Validators.required],
  })


  constructor(private router: Router, private fb: FormBuilder) { }


  login() {
    

    // this.router.navigateByUrl('/');
  }
}

import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public login: Login;
  public loginError: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.login = new Login('','');
    this.loginError = null;
    this.buildForm();
  }

  buildForm(){

    this.formGroup = this.formBuilder.group({
      username: [this.login.username, [Validators.required]],
      password: [
        this.login.password,
        [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  // getter para acceder a los controles, f.username ... f.password ...
  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {

    if (this.formGroup.invalid) {
      console.log("invalid");
      console.log(this.formGroup);
      return;
    }

    let values = this.formGroup.value;

    this.login.username = values.username;
    this.login.password = values.password;

    this.loginService.login(this.login).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      (error) =>
      {
        console.log(error);
        // show modal dialog
      }
    );
  }

  /*onChanges() {
    this.formGroup.valueChanges.subscribe(val => {
      console.log(this.formGroup, val);
    });
  }*/

}

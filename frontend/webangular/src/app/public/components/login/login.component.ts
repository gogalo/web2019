import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

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

    this.loginService.login(this.login).subscribe( (data) => {

      // no ha sido posible loguearse
      if (!data.success) {
        this.loginError = data.error;
      }

      // @TODO: si se a logueado guardamos el jwt en el localStorage y redireccionar a la home, si no, mostrar error de credenciales
      if (data.success && data.access_token) {
        if (data.success && data.access_token) {
          localStorage.setItem('jwt', data.access_token);
        }
      }


    });
  }




  /*onChanges() {
    this.formGroup.valueChanges.subscribe(val => {
      console.log(this.formGroup, val);
    });
  }*/

}

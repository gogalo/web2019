import { Component, OnInit } from '@angular/core';
import { Registro } from '../../models/registro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formGroup: FormGroup;
  public registro: Registro;
  public registroError: string;

  constructor(private formBuilder: FormBuilder/*, private registroService: RegistroService*/, private router: Router) {
    this.registro = new Registro('','','','');
    this.registroError = null;
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(){
    // TODO: implementar un servicio helper para poder validar que las contraseñas sean iguales
    // http://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
    this.formGroup = this.formBuilder.group({
      username: [this.registro.username, [Validators.required]],
      password: [
        this.registro.password,
        [Validators.required, Validators.minLength(6)]
      ],
      confirmPassword: [
        this.registro.confirmPassword,
        Validators.required
      ],
      email: [
        this.registro.email,
        [Validators.required, Validators.email]
      ]
    });
  }

  // getter para acceder a los controles, f.username ... f.password ...
  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {

    if (this.formGroup.invalid) {
      return;
    }

    let values = this.formGroup.value;
    console.log(this.formGroup, values);

    this.registro.username = values.username;
    this.registro.email = values.email;
    this.registro.password = values.password;
    this.registro.confirmPassword = values.confirmPassword;

    // TODO: implementar el servicio registroService para poder insertar el nuevo usuario.
    /*this.registroService.registrar(this.registro).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (error) =>
      {
        console.log(error);
        // show modal dialog
      }
    );*/

  }

}

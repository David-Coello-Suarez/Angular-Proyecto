import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {

  public formSubmit: boolean = false;

  public registerForm = this.fb.group({
    nombre: ['david', [Validators.required, Validators.minLength(3)]],
    email: ['d@mail.com', [Validators.required, Validators.email]],
    password: ['12345', Validators.required],
    password2: ['12345', Validators.required],
    terminos: [true, Validators.required],
  }, {
    validators: this.password_iguales('password', 'password2')
  })

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  crearUsuario() {
    this.formSubmit = true
    console.log(this.registerForm.value)

    if (this.registerForm.invalid) {
      return
    } else {

      //Realizar la creacion
      this.usuarioService.crearUsuario(this.registerForm.value).subscribe(res => {
        console.log('usuario creado')
        console.log(res)
      }, (err) => {
        console.error(err);
        //Si sucede un error
        Swal.fire('Error', err.error.msg, 'error')

      })
    }
  }

  campo_no_valido(campo: string): boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmit) {
      return true
    } else {
      return false
    }
  }

  contrasena_no_valida() {
    const pass1 = this.registerForm.get('password').value
    const pass2 = this.registerForm.get('password2').value
    if ((pass1 !== pass2) && this.formSubmit) {
      return true
    } else {
      return false
    }
  }

  acepta_terminos() {
    return !this.registerForm.get('terminos').value && this.formSubmit
  }

  password_iguales(pass1Name: string, pass2Name: string) {
    return function (formGroup: FormGroup) {
      const pass1Control = formGroup.get(pass1Name)
      const pass2Control = formGroup.get(pass2Name)

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }
    }
  }

}

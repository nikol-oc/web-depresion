import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;
  name!: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  //register
  register(){
    const user = { 
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.userService.save_user(user).subscribe(
      data => {
        console.log(data);
      }
    );

    this.limpiarFormulario();
    this.rutas('/login')

  }

  limpiarFormulario(){
    this.name = "";
    this.email = "";
    this.password= "";
  }

  rutas(ruta: string) {
    this.router.navigate([ruta]);
  }

}

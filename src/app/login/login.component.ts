import { Component, OnInit,NgModule } from '@angular/core';
import { UserService } from '../service/user.service';
import { Usuario, Usuarios } from '../model/userData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  lista_usuarios: Usuarios = new Usuarios;

  ngOnInit(): void {

    this.userService.get_users().subscribe(
      resp=> {
        console.log(resp);
        this.lista_usuarios = resp;
      }
    )
    console.log(this.lista_usuarios)
  }

  rutas(ruta: string) {
    this.router.navigate([ruta]);
  }

  login(){
    console.log(this.email + "-"+ this.password);
  }

}

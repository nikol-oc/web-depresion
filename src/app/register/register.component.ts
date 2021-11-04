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
  distrito!: string;
  name!: string;
  age!: number;

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
      age: this.age,
      distrito: this.distrito
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
    this.distrito= "";
    this.age= 0;
  }

  rutas(ruta: string) {
    this.router.navigate([ruta]);
  }

}

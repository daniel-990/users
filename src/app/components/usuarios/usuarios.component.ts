import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      console.log(data);
    });
  }

  usuario: Usuario[] = [
    {ClienteId: 0, Email: "danielarango990@gmail.com", Nombre: "Daniel arango Villegas", FechaIngreso: 1100},
    {ClienteId: 1, Email: "daniel990@gmail.com", Nombre: "Arango Villegas", FechaIngreso: 1200}
  ]
}

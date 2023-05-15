import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent  implements OnInit{
  proyectos: Proyectos[] = [];
  
  
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService){}
  
  isLogged = false;

  ngOnInit(): void {
        this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    
  }

  cargarExperiencia():void{
    this.proyectosService.lista().subscribe(data => {this.proyectos = data; })
  }

  delete(id?: number){
    if(id !=undefined){
      this.proyectosService.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err => {
          alert('No se pudo borrar la experiencia')
        }
      )
    }
  }
}

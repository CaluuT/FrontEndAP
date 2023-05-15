import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyectosService } from 'src/app/service/image-proyectos.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyectos : Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router, public imageProyectosService: ImageProyectosService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
      this.proyectosService.detail(id).subscribe(
        data => {
          this.proyectos = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectos.imgP = this.imageProyectosService.url
    this.proyectosService.update(id, this.proyectos).subscribe(data =>{
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyectos_" + id;
    this.imageProyectosService.uploadImage($event, name)
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyectosService } from 'src/app/service/image-proyectos.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';
  urlP: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router, public imageProyectosService: ImageProyectosService, private activatedRoute: ActivatedRoute){}

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.imgP, this.urlP);
    this.proyectosService.save(proyectos).subscribe(data =>{alert("Proyecto añadido");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
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

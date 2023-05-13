import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private servicioExperiencia: ExperienciaService, private router: Router){
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.servicioExperiencia.save(exp).subscribe(data =>{alert("Experiencia añadida");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
  }
  )
  }
}

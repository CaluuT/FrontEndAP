import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent {
  nombre: string;
  porcentaje: number;

  constructor(private skillService: SkillsService, private router: Router){}

  onCreate(): void{
    const skills = new Skills(this.nombre, this.porcentaje);
      this.skillService.save(skills).subscribe(data =>{
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}

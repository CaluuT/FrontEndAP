import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
persona: persona = new persona ("","","");

constructor(public personaService: PersonaService){}

 ngOnInit(): void{
  this.personaService.getPersona().subscribe(data => {this.persona = data})
 }
}

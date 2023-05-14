import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skills : Skills = null;

  constructor(private skillService: SkillsService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.skillService.detail(id).subscribe(
        data =>{
          this.skills = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skills).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}

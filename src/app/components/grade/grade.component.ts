import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  public idAluno: string = "";
  public idSemestre: string = "";
  public alunos: any[] = [];
  public semestres: any[] = [];
  public displayedColumns: string[] = ['id', 'nome', 'acoes'];

  constructor(
    private alunoService: AlunoService,
    private semestreService: SemestreService,
  ) { }

  ngOnInit() {
    this.listarAlunos();
    this.listarSemestres();
  };

  listarAlunos() {
    this.alunoService.getAlunos().subscribe({
      next: (data) => {
        console.log(data.data);
        this.alunos = data.data;
      },
      error: (error) => {
        console.error("Erro na busca de alunos:");
        console.error(error);
      },
      complete: () => {
        console.log('Consulta de alunos concluída');
      },
    });
  }
  
  listarSemestres() {
    this.semestreService.getSemestres().subscribe({
      next: (data) => {
        //buscas quantas disciplinas tem naquele semestre
        console.log(data);
        this.semestres = data;
      },
      error: (error) => {
        console.error("Erro na busca de semestres:");
        console.error(error);
      },
      complete: () => {
        console.log('Consulta de semestres concluída');
      },
    });
  }

  filterChanged(){
    
  }
}
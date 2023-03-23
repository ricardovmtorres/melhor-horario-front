import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinhaService } from 'src/app/services/linha.service';

@Component({
  selector: 'app-lista-linha',
  templateUrl: './lista-linha.component.html',
  styleUrls: ['./lista-linha.component.css']
})
export class ListaLinhaComponent {
  public linhas: any[] = [];
  public displayedColumns: string[] = ['id', 'nome', 'tempo', 'acoes'];

  public formulario: FormGroup;

  constructor(
    private linhaService: LinhaService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      tempo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.listarLinhas();
  };

  listarLinhas() {
    this.linhaService.getLinhas().subscribe({
      next: (data) => {
        console.log(data);
        this.linhas = data;
      },
      error: (error) => {
        console.error("Erro na busca de linhas:");
        console.error(error);
      },
      complete: () => {
        console.log('Consulta de linhas concluída');
      },
    });
  }

  adicionarLinha(){
    console.log(this.formulario.value.nome);
    const linha = {
      nome: this.formulario.value.nome,
      tempo_ate_ponto_de_controle: this.formulario.value.tempo,
      partidaLinha: {}
    }
    this.linhaService.createLinha(linha).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error("Erro na criação do linha:");
        console.error(error);
      },
      complete: () => {
        console.log('Criação do linha concluída');
        this.listarLinhas();
      },
    });
  }

  deletarLinha(idLinha: string){
    console.log(idLinha);
    this.linhaService.deleteLinhaPorId(idLinha).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error("Erro ao deletar linha:");
        console.error(error);
      },
      complete: () => {
        console.log('Exclusão de linha concluída');
        this.listarLinhas();
      },
    });
  }

  detalharLinha(idLinha: string){
    console.log(idLinha);
    //todo: chamar modal passando id por parametro
  }
}


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { ListaLinhaComponent } from './components/lista-linha/lista-linha.component';
import { ListaSemestreComponent } from './components/lista-semestre/lista-semestre.component';
import { ListaDisciplinaComponent } from './components/lista-disciplina/lista-disciplina.component';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { GradeComponent } from './components/grade/grade.component';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio'

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    ListaLinhaComponent,
    ListaSemestreComponent,
    ListaDisciplinaComponent,
    GradeComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    //Material
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

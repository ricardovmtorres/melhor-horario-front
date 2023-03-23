import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private url;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + '/disciplinas';
  }

  getDisciplinas(): Observable<any> {
    var result = this.http.get(`${this.url}`);
    return result;
  }
  
  getDisciplinaPorId(id: string): Observable<any> {
    var result = this.http.get(`${this.url}/${id}`);
    return result;
  }
  
  createDisciplina(disciplina: any): Observable<any> {
    return this.http.post(this.url, disciplina);
  }
  
  deleteDisciplinaPorId(id: string): Observable<any> {
    var result = this.http.delete(`${this.url}/${id}`);
    return result;
  }
}

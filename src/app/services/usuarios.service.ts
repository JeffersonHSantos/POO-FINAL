import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  buscarUsuarioPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  atualizarUsuario(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dados);
  }

}

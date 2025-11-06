import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: false,
})
export class UsuariosPage implements OnInit {

  usuarios: any[] = [];
  searchTerm = '';

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  get filteredUsers() {
    return this.usuarios.filter(u =>
      (u.firstName + ' ' + u.lastName).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  logout() {
    localStorage.removeItem('user');
    //this.router.navigate(['/login']);
  }

}






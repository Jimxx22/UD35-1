import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-1';
  clientes = [{nombre: 'Jaume', cif:'12345678A', direccion:'calle mayor, 1', grupo:'Grupo 1'}];

  moreClients(cliente:any){
    this.clientes.push(cliente);
  }
}

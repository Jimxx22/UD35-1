import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() enviarCliente = new EventEmitter;
  cliente:any;

  constructor() { }

  ngOnInit(): void {
  }

  guardarCliente(nombre:string, cif:string, direccion:string, grupo:string){
    if (nombre!='' || cif!='' || direccion!='') {
      this.cliente={nombre: nombre, cif: cif, direccion: direccion, grupo: grupo};
      this.enviarCliente.emit(this.cliente);
    }
  }
}

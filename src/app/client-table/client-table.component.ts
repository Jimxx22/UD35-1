import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  @Input() clientes: any;

  constructor() { }

  ngOnInit(): void {
  }

}

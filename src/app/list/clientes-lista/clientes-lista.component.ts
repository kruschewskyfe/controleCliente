import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterModule } from "@angular/router";

import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";

@Component({
  selector: "app-clientes-lista",
  templateUrl: "./clientes-lista.component.html"
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    //this.listar();
    this.clientes = this.activatedRoute.snapshot.data["clientes"];
  }

  // listar() {
  //   this.clienteService.listar().subscribe(dados => (this.clientes = dados));
  // }

  deletar(id) {
    this.clienteService.deletar(id).subscribe();
  }

  consultarPorId(id) {
    this.clienteService.consultarPorId(id).subscribe();
  }

  atualizarCliente(clientes) {
    this.clienteService.atualizarCliente(clientes.id).subscribe();
  }
}

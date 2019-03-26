import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";

@Component({
  selector: "app-clientes-lista",
  templateUrl: "./clientes-lista.component.html",
  styleUrls: ["./clientes-lista.component.css"]
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listar();
    //this.clientes = this.activatedRoute.snapshot.data["clientes"];
  }

  listar() {
    this.clienteService.listar().subscribe(dados => (this.clientes = dados));
  }

  deletar(id) {
    this.clienteService.deletar(id).subscribe(
      () => {
        alert("Cliente deletado com sucesso!");
        this.listar();
      },
      err => console.log(err)
    );
  }

  consultarPorId(id) {
    this.clienteService.consultarPorId(id).subscribe();
  }

  atualizarCliente(clientes) {
    this.clienteService.atualizarCliente(clientes.id).subscribe();
  }
}

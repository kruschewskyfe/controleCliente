import { Component, OnInit } from "@angular/core";
import { ClienteService } from "./cliente.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-clientes-lista",
  templateUrl: "./clientes-lista.component.html"
})
export class ClientesListaComponent implements OnInit {
  clientes: Array<any>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //this.listar();
    this.clientes = this.activatedRoute.snapshot.data["clientes"];
  }

  // listar() {
  //   this.clienteService.listar().subscribe(dados => (this.clientes = dados));
  // }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente";

@Component({
  selector: "app-cliente-detalhe",
  templateUrl: "./cliente-detalhe.component.html",
  styleUrls: ["./cliente-detalhe.component.css"]
})
export class ClienteDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });
    console.log(this.id);

    this.consultarPorId(this.id);

    console.log(this.clientes);
  }

  consultarPorId(id) {
    this.clienteService.consultarPorId(id).subscribe(dados => {
      this.clientes = dados;
      console.log(dados);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

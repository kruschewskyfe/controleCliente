import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cliente-detalhe",
  templateUrl: "./cliente-detalhe.component.html",
  styleUrls: ["./cliente-detalhe.component.css"]
})
export class ClienteDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  clientes: Cliente[];
  mostraClienteForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });

    this.consultarPorId(this.id);

    this.mostraClienteForm = this.formBuilder.group({
      id: [{ value: "", disabled: true }],
      nome: [{ value: "", disabled: true }],
      sobrenome: [{ value: "", disabled: true }],
      cpf: [{ value: "", disabled: true }],
      dataNascimento: [{ value: "", disabled: true }],
      idade: [{ value: "", disabled: true }],
      profissao: [{ value: "", disabled: true }]
    });
  }

  consultarPorId(id) {
    this.clienteService.consultarPorId(id).subscribe(dados => {
      this.populaForm(dados);
    });
  }

  populaForm(dados) {
    this.mostraClienteForm.setValue({
      id: dados.Id,
      nome: dados.Nome,
      sobrenome: dados.Sobrenome,
      cpf: dados.Cpf,
      dataNascimento: dados.DataNascimento.slice(
        0,
        "1992-11-01T00:00:00".indexOf("T")
      ),
      idade: dados.Idade,
      profissao: dados.Profissao
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

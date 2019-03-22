import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";

const clienteUrl = "http://localhost:49999";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Cliente[]>(
      clienteUrl + "/api/cliente/ConsultarCliente"
    );
  }
}

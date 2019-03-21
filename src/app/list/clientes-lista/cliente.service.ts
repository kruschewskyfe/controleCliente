import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  clienteUrl = "http://localhost:49999/api/cliente/ConsultarCliente";

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Cliente[]>(`${this.clienteUrl}`);
  }
}

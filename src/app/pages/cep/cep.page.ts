import { Component } from '@angular/core';
import { CepService } from '../../services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage {
  cepInput: string = '';
  resultado: any = null;
  erro: string = '';

  constructor(private cepService: CepService) {}

  consultarCep() {
    this.erro = '';
    this.resultado = null;
    if (this.cepInput.length !== 8) {
      this.erro = 'CEP deve conter 8 dígitos.';
      return;
    }
    this.cepService.consultarCep(this.cepInput).subscribe({
      next: (data) => {
        if (data.erro) {
          this.erro = 'CEP não encontrado.';
          this.resultado = null;
        } else {
          this.resultado = data;
        }
      },
      error: () => {
        this.erro = 'Erro ao consultar CEP.';
        this.resultado = null;
      },
    });
  }
}

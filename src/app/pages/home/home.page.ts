import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  titulo = 'Consulta de CEP';
  descricao = 'Aplicativo para consulta de CEP usando ViaCEP API.';
}

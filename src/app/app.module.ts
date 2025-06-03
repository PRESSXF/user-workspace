import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { CepService } from './services/cep.service';
import { FormatCepPipe } from './pipes/format-cep.pipe';
import { RainbowDirective } from './directives/rainbow.directive';

@NgModule({
  declarations: [AppComponent, FormatCepPipe, RainbowDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}

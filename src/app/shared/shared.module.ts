import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatCepPipe } from '../pipes/format-cep.pipe';
import { RainbowDirective } from '../directives/rainbow.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormatCepPipe,
    RainbowDirective
  ],
  exports: [
    FormatCepPipe,
    RainbowDirective
  ]
})
export class SharedModule { }

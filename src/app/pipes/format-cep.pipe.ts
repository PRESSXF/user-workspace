import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCep'
})
export class FormatCepPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length !== 8) return value;
    return cleaned.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
}

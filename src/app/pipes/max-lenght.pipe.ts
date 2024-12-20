import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CutText',
  standalone: true,
  pure: true,
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 20): string {
    if (value.length > maxLength) return `${value.substring(0, maxLength)}...`;
    else return value;
  }
}

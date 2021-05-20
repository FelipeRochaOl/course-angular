import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string | undefined, search: string, replaceTo: string) {
    if (value) return value.replace(search, replaceTo);
    return value;
  }
}

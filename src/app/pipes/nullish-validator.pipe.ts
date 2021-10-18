import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullishValidator',
})
export class NullishValidatorPipe implements PipeTransform {
  transform(
    value: string | undefined | null,
    alternativeValue = 'No data'
  ): string {
    // Check if value is emptry string, null or undefined
    if (value === '' || value == null) return alternativeValue;
    return value;
  }
}

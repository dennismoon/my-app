import { Injectable } from '@angular/core';

@Injectable()
export class AppUtilsService {

  constructor() { }

  normalizeInteger(input: string): string {
    if (input && input.length > 0) {
      // normalize number string and remove all unnecessary characters
      input = input.replace(/[^\d]/g, '');
      return input;
    }
    return undefined;
  }

  normalizeDecimal(input: string, decimalPlaces: number = 0): string {
    if (input && input.length > 0) {
      // normalize number string and remove all unnecessary characters
      input = input.replace(/[^-.0-9]/g, '');
      const num = parseFloat(input);
      return num.toFixed(decimalPlaces);
    }
    return undefined;
  }

  formatInteger(input: number) {
    if (input) {
      input = parseFloat(input.toString());
      const numStr = input.toFixed(0);
      const numText = Number(numStr).toLocaleString();
      return numText;
    }
    return '';
  }

  formatDecimal(input: number, decimalPlaces: number = 0) {
    if (input) {
      input = parseFloat(input.toString());
      const numStr = input.toFixed(decimalPlaces);
      const numText = Number(numStr).toLocaleString();
      return '$' + numText;
    }
    return '';
  }

  formatDollars(input: number, includeCents: boolean = false) {
    if (input) {
      input = parseFloat(input.toString());
      let numStr = input.toFixed(0);
      if (includeCents === true) {
        numStr = input.toFixed(2);
      }
      const numText = Number(numStr).toLocaleString();
      return '$' + numText;
    }
    return '';
  }

  formatPercent(input: number, decimalPlaces: number = 2) {
    const numText = this.convertFractionToPercent(input, decimalPlaces);
    return numText + '%';
  }

  formatPhoneNumber(input: string, format: string = undefined): string {
    // normalize string and remove all unnecessary characters
    input = this.normalizeInteger(input);
    // check if number length equals to 10
    if (input && input.length === 10) {
      // reformat and return phone number
      if (!format || format.length <= 0) {
        format = '$1.$2.$3';
      }
      return input.replace(/(\d{3})(\d{3})(\d{4})/, format);
    }
    return undefined;
  }

  formatZipCode(input: string, format: string = undefined): string {
    // normalize string and remove all unnecessary characters
    input = this.normalizeInteger(input);
    // check if number length equals to 10
    if (input && input.length >= 9) {
      // reformat and return phone number
      if (!format || format.length <= 0) {
        format = '$1-$2';
      }
      return input.replace(/(\d{5})(\d{4})?/, format);
    }
    // tslint:disable-next-line:one-line
    else if (input && input.length >= 5) {
      return input.substring(0, 5);
    }
    return undefined;
  }

  repeat(input: string, times: number): string {
    if (input && input.length > 0 && times) {
      return (new Array(times + 1)).join(input);
    }
    return undefined;
  }

  convertPercentToFraction(input: number | string, precision: number = 4): number {
    if (typeof input === 'number') {
      const result = input / 100;
      const numText = result.toPrecision(precision);
      const num = parseFloat(numText);
      return num;
    }
    // tslint:disable-next-line:one-line
    else if (typeof input === 'string' && input.length > 0) {
      const tmpNum = parseFloat(input);
      const result = tmpNum / 100;
      const numText = result.toPrecision(precision);
      const num = parseFloat(numText);
      return num;
    }
    return undefined;
  }

  convertFractionToPercent(input: number | string, precision: number = 2): string {
    if (typeof input === 'number') {
      const result = input * 100;
      const numText = result.toFixed(precision);
      return numText;
    }
    // tslint:disable-next-line:one-line
    else if (typeof input === 'string' && input.length > 0) {
      const tmpNum = parseFloat(input);
      const result = tmpNum * 100;
      const numText = result.toFixed(precision);
      return numText;
    }
    return undefined;
  }
}

import { TestBed, inject } from '@angular/core/testing';

import { AppUtilsService } from './app-utils.service';

describe('AppUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUtilsService]
    });
  });

  it('should create', inject([AppUtilsService], (service: AppUtilsService) => {
    expect(service).toBeTruthy();
  }));

  describe('normalizeNumber(input: string): string', () => {

    it('should return \'123456\' when input is \'$123,456\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeInteger('$123,456');
      expect(result).toEqual('123456', 'actual = ' + result);
    }));

    it('should return \'12345678\' when input is \'$123,456.78\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeInteger('$123,456.78');
      expect(result).toEqual('12345678', 'actual = ' + result);
    }));

    it('should return undefined if input undefined', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeInteger(undefined);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input null', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeInteger(null);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input empty string (\'\')', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeInteger('');
      expect(result).not.toBeDefined();
    }));
  });

  describe('normalizeDecimal(input: string): string', () => {

    it('should return \'123456.78\' when input is \'$123,456.78\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456.78', 2);
      expect(result).toEqual('123456.78', 'actual = ' + result);
    }));

    it('should return \'123457\' when input is \'$123,456.78\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456.78', 0);
      expect(result).toEqual('123457', 'actual = ' + result);
    }));

    it('should return \'123456\' when input is \'$123,456.48\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456.48', 0);
      expect(result).toEqual('123456', 'actual = ' + result);
    }));

    it('should return \'123456.78\' when input is \'$123,456.78.90\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456.78.90', 2);
      expect(result).toEqual('123456.78', 'actual = ' + result);
    }));

    it('should return \'123456.78\' when input is \'$123,456.78abc\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456.78abc', 2);
      expect(result).toEqual('123456.78', 'actual = ' + result);
    }));

    it('should return \'123456.78\' when input is \'$123,456abc.78\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('$123,456abc.78', 2);
      expect(result).toEqual('123456.78', 'actual = ' + result);
    }));

    it('should return undefined if input undefined', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal(undefined);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input null', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal(null);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input empty string (\'\')', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.normalizeDecimal('');
      expect(result).not.toBeDefined();
    }));
  });

  describe('formatPhoneNumber(input: string, format: string = undefined): string', () => {

    it('should return \'608.555.1212\' when input is \'6085551212\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('6085551212');
      expect(result).toEqual('608.555.1212', 'actual = ' + result);
    }));

    // tslint:disable-next-line:max-line-length
    it('should return \'608.555.1212\' when input is \'6085551212\' using \'$1.$2.$3\' format', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('6085551212', '$1.$2.$3');
      expect(result).toEqual('608.555.1212', 'actual = ' + result);
    }));

    // tslint:disable-next-line:max-line-length
    it('should return \'608.555.1212\' when input is \'6085551212\' using \'$1-$2-$3\' format', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('6085551212', '$1-$2-$3');
      expect(result).toEqual('608-555-1212', 'actual = ' + result);
    }));

    // tslint:disable-next-line:max-line-length
    it('should return \'608.555.1212\' when input is \'6085551212\' using \'($1) $2-$3\' format', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('6085551212', '($1) $2-$3');
      expect(result).toEqual('(608) 555-1212', 'actual = ' + result);
    }));

    // tslint:disable-next-line:max-line-length
    it('should return \'(608) 555-1212\' when input is \'608.555.1212\' using \'($1) $2-$3\' format', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('6085551212', '($1) $2-$3');
      expect(result).toEqual('(608) 555-1212', 'actual = ' + result);
    }));

    it('should return undefined if input undefined', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber(undefined);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input null', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber(null);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input empty string (\'\')', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatPhoneNumber('');
      expect(result).not.toBeDefined();
    }));
  });

  describe('formatZipCode(input: string, format: string = undefined): string', () => {

    it('should return \'12345-6789\' when input is \'12345-6789\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatZipCode('123456789');
      expect(result).toEqual('12345-6789', 'actual = ' + result);
    }));

    it('should return \'12345-6789\' when input is \'12345-6789\'', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatZipCode('123456789');
      expect(result).toEqual('12345-6789', 'actual = ' + result);
    }));

    it('should return undefined if input undefined', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatZipCode(undefined);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input null', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatZipCode(null);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input empty string (\'\')', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.formatZipCode('');
      expect(result).not.toBeDefined();
    }));
  });

  describe('repeat(input: string, times: number): string', () => {

    it('should return \'QQQ\' when input (Q, 3)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.repeat('Q', 3);
      expect(result).toEqual('QQQ', 'actual = ' + result);
    }));

    it('should return undefined if input (undefined, undefined', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.repeat(undefined, undefined);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input (null, null)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.repeat(null, null);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input (undefined, 1)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.repeat('', 1);
      expect(result).not.toBeDefined();
    }));

    it('should return undefined if input (q, undefined)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.repeat('q', undefined);
      expect(result).not.toBeDefined();
    }));
  });

  describe('convertPercentToFraction(input: string | number, precision: number): number', () => {

    it('should return \'0.01234\' number when input is \'1.234\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction(1.234);
      expect(result).toEqual(0.01234, 'actual = ' + result);
    }));

    it('should return \'0.0123\' number when input is \'1.23\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction(1.23);
      expect(result).toEqual(0.0123, 'actual = ' + result);
    }));

    it('should return \'0.012\' number when input is \'1.2\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction(1.2);
      expect(result).toEqual(0.012, 'actual = ' + result);
    }));

    it('should return \'0.112\' number when input is \'11.2\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction(11.2);
      expect(result).toEqual(0.112, 'actual = ' + result);
    }));

    it('should return \'0.01234\' number when input is \'1.234\' string', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction('1.234');
      expect(result).toEqual(0.01234, 'actual = ' + result);
    }));

    it('should return undefined if input (undefined)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertPercentToFraction(undefined);
      expect(result).not.toBeDefined();
    }));
  });

  describe('convertFractionToPercent(input: string | number, precision: number): string', () => {

    it('should return \'1.23\' number when input is \'0.01234\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(0.01234);
      expect(result).toEqual('1.23', 'actual = ' + result);
    }));

    it('should return \'0.23\' number when input is \'0.00234\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(0.00234);
      expect(result).toEqual('0.23', 'actual = ' + result);
    }));

    it('should return \'0.03\' number when input is \'0.00034\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(0.00034);
      expect(result).toEqual('0.03', 'actual = ' + result);
    }));

    it('should return \'0.00\' number when input is \'0.00004\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(0.00004);
      expect(result).toEqual('0.00', 'actual = ' + result);
    }));

    it('should return \'0.01\' number when input is \'0.00006\' number', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(0.00006);
      expect(result).toEqual('0.01', 'actual = ' + result);
    }));

    it('should return undefined if input (undefined)', inject([AppUtilsService], (service: AppUtilsService) => {
      const result = service.convertFractionToPercent(undefined);
      expect(result).not.toBeDefined();
    }));
  });

});

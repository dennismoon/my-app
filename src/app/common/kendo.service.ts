import { OpaqueToken } from '@angular/core';

export const KENDO_TOKEN = new OpaqueToken('kendo');

export function kendoFactory() {
    return window['kendo'];
}

export const KENDO_PROVIDER = { provide: KENDO_TOKEN, useFactory: kendoFactory };

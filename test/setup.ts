import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

import { JSDOM } from "jsdom";
import { BrowserPlatform } from "@aurelia/platform-browser";
import { setPlatform } from "@aurelia/testing";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
  pretendToBeVisual: true,
});

global.window = dom.window as unknown as Window & typeof globalThis;
global.document = dom.window.document;

global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;

export function bootstrapTestEnvironment() {
  const platform = new BrowserPlatform(dom.window as unknown as typeof globalThis);
  setPlatform(platform);
  BrowserPlatform.set(globalThis, platform);
}

export async function waitFor(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}
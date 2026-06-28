import { COLOR_DATA, FAMILY_ORDER, FAMILY_COLORS } from './colors';
import template from './webview.html';

export function buildWebview(): string {
  return template
    .replace('__COLORS_JSON__',   JSON.stringify(COLOR_DATA))
    .replace('__FAMILY_ORDER__',  JSON.stringify(FAMILY_ORDER))
    .replace('__FAMILY_COLORS__', JSON.stringify(FAMILY_COLORS));
}

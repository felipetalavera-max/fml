// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in book.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in book.html (see the examples there: swap-a, hop, spin, tilt, breathe, ...).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Fundamentos: dos clases de puntos, una frontera y la cota de generalización.
    reset(P('M240 120L300 96L330 40L360 96L560 30') + [[262, 60], [300, 44], [392, 44], [440, 30]].map(([x, y]) => C(x, y, 7)).join('') +
      [[280, 140], [350, 130], [420, 112], [500, 96]].map(([x, y]) => C(x, y, 7, 'a')).join('') + Tx(380, 164, 'm ≥ (1/ε) log(|H|/δ)', 22)),
    // 2 Clasificación: un separador con su margen.
    reset(P('M250 150L550 40') + P('M250 118L550 8', 'a') + P('M270 172L570 62', 'a') + [[300, 50], [360, 30], [420, 22]].map(([x, y]) => C(x, y, 7)).join('') +
      [[400, 150], [470, 130], [530, 112]].map(([x, y]) => C(x, y, 7, 'a')).join('')),
    // 3 Otras tareas supervisadas: una lista ordenada y una recta de regresión.
    reset([110, 84, 58, 32].map((w, i) => P(`M250 ${36 + i * 34}h${w}`)).join('') + P('M400 150L560 40', 'a') +
      [[410, 130], [440, 128], [470, 96], [505, 88], [540, 46]].map(([x, y]) => C(x, y, 6)).join('')),
    // 4 Otros análisis y escenarios: estados, transiciones y una recompensa que viaja.
    reset(C(280, 90, 26) + C(420, 50, 26, 'a') + C(540, 120, 26, 'a') + P('M305 82L395 58') + P('M444 62L518 106') + P('M514 126L306 98', 'a') +
      `<circle class="t hop" r="7" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M305 82L395 58')"/>` + Tx(452, 150, '+1', 24)),
  ];
})();

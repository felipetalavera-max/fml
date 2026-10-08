window.TIMINGS = {
 "intro": {
  "dur": 12.408,
  "marks": {
   "sub": 4.935
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo siete."
   ],
   [
    2.161,
    "Estimaci\u00f3n contra aproximaci\u00f3n."
   ],
   [
    4.935,
    "Hasta aqu\u00ed, el conjunto de hip\u00f3tesis ven\u00eda dado."
   ],
   [
    8.958,
    "Ahora, la pregunta es c\u00f3mo elegirlo."
   ]
  ]
 },
 "problema": {
  "dur": 52.824,
  "marks": {
   "data": 5.156,
   "bay": 9.492,
   "h1": 21.966,
   "h4": 31.602,
   "h8": 36.536,
   "trade": 46.432
  },
  "cues": [
   [
    0.102,
    "Elegir el conjunto de hip\u00f3tesis H es el problema de selecci\u00f3n de modelo."
   ],
   [
    5.156,
    "Un ejemplo: cien puntos etiquetados sobre un segmento."
   ],
   [
    9.492,
    "La etiqueta m\u00e1s probable es positiva en dos tramos, y cada etiqueta se invierte con probabilidad de diez por ciento."
   ],
   [
    16.849,
    "Ese diez por ciento es el error de Bayes: ninguna hip\u00f3tesis lo mejora."
   ],
   [
    21.966,
    "Primer intento: un conjunto pobre, con solo las dos hip\u00f3tesis constantes."
   ],
   [
    27.839,
    "La elegida falla casi la mitad de las veces."
   ],
   [
    31.602,
    "Con hip\u00f3tesis de ocho tramos, el error baja a menos de la mitad."
   ],
   [
    36.536,
    "Con ciento veintiocho tramos, la hip\u00f3tesis casi no falla en la muestra, pero su error de generalizaci\u00f3n es casi cinco veces mayor: memoriz\u00f3 el ruido."
   ],
   [
    46.432,
    "Un conjunto rico puede contener al clasificador de Bayes, pero aprender con \u00e9l es m\u00e1s dif\u00edcil."
   ]
  ]
 },
 "descomp": {
  "dur": 51.696,
  "marks": {
   "exc": 3.906,
   "best": 9.18,
   "est": 12.878,
   "app": 22.695,
   "num": 33.346,
   "hid": 40.833,
   "bound": 47.266
  },
  "cues": [
   [
    0.102,
    "Para ordenar esto, el error se parte en dos."
   ],
   [
    3.906,
    "El exceso de error de una hip\u00f3tesis es lo que le sobra respecto del error de Bayes."
   ],
   [
    9.18,
    "En medio se pone la mejor hip\u00f3tesis del conjunto."
   ],
   [
    12.878,
    "La primera parte es el error de estimaci\u00f3n: cu\u00e1nto peor es la hip\u00f3tesis elegida que la mejor de H."
   ],
   [
    19.57,
    "Depende de la muestra y del algoritmo."
   ],
   [
    22.695,
    "La segunda es el error de aproximaci\u00f3n: cu\u00e1nto le falta a la mejor de H para llegar al error de Bayes."
   ],
   [
    29.44,
    "Es una propiedad del conjunto: mide su riqueza."
   ],
   [
    33.346,
    "En el ejemplo de ocho tramos, la estimaci\u00f3n vale cinco cent\u00e9simas, y la aproximaci\u00f3n, siete y media."
   ],
   [
    40.833,
    "Pero el error de aproximaci\u00f3n no se puede medir: depende de la distribuci\u00f3n, que no se conoce."
   ],
   [
    47.266,
    "El de estimaci\u00f3n, en cambio, a veces se puede acotar."
   ]
  ]
 },
 "crece": {
  "dur": 46.752,
  "marks": {
   "nest": 2.617,
   "app": 10.99,
   "est": 21.81,
   "sum": 29.036,
   "min": 34.089,
   "how": 39.675
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 pasa al agrandar H?"
   ],
   [
    2.617,
    "Se toma una familia de conjuntos anidados, cada uno dentro del siguiente; aqu\u00ed, de uno a ciento veintiocho tramos."
   ],
   [
    10.99,
    "El error de aproximaci\u00f3n baja: cada conjunto m\u00e1s grande llega m\u00e1s cerca del clasificador de Bayes."
   ],
   [
    17.865,
    "Con treinta y dos tramos ya lo contiene, y vale cero."
   ],
   [
    21.81,
    "El error de estimaci\u00f3n hace lo contrario: con m\u00e1s hip\u00f3tesis entre las que elegir y la misma muestra, sube."
   ],
   [
    29.036,
    "La suma, el exceso de error, baja primero y sube despu\u00e9s."
   ],
   [
    34.089,
    "Su m\u00ednimo est\u00e1 en un conjunto intermedio: aqu\u00ed, el de diecis\u00e9is tramos."
   ],
   [
    39.675,
    "Ese es el conjunto que convendr\u00eda elegir."
   ],
   [
    43.125,
    "Pero ninguna de estas curvas se ve desde la muestra."
   ]
  ]
 },
 "q1": {
  "dur": 6.072,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfEn cu\u00e1l de los tres conjuntos es mayor el error de estimaci\u00f3n?"
   ]
  ]
 },
 "erm": {
  "dur": 59.592,
  "marks": {
   "def": 5.037,
   "all": 9.076,
   "erm": 19.766,
   "best": 22.695,
   "band": 27.448,
   "prop": 32.109,
   "cota": 38.711,
   "bad": 43.073,
   "np": 55.339
  },
  "cues": [
   [
    0.102,
    "El algoritmo m\u00e1s directo es la minimizaci\u00f3n del riesgo emp\u00edrico, o ERM: devolver la hip\u00f3tesis de H con menor error en la muestra."
   ],
   [
    9.076,
    "Aqu\u00ed est\u00e1n las doscientas cincuenta y seis hip\u00f3tesis de ocho tramos."
   ],
   [
    13.568,
    "Hacia la derecha, su error de generalizaci\u00f3n; hacia arriba, su error emp\u00edrico."
   ],
   [
    19.766,
    "ERM elige la m\u00e1s baja."
   ],
   [
    22.695,
    "La mejor de H es la que est\u00e1 m\u00e1s a la izquierda, y no es la misma."
   ],
   [
    27.448,
    "Pero ninguna hip\u00f3tesis se aleja de la diagonal m\u00e1s que cierta brecha."
   ],
   [
    32.109,
    "Por eso, el error de estimaci\u00f3n de ERM es, como mucho, dos veces esa brecha."
   ],
   [
    38.711,
    "Y esa brecha es justo lo que acotan los cap\u00edtulos anteriores."
   ],
   [
    43.073,
    "Aun as\u00ed, ERM suele rendir mal, porque ignora la complejidad de H."
   ],
   [
    48.854,
    "Si H es pobre, el error de aproximaci\u00f3n es grande; si es rico, la cota se afloja."
   ],
   [
    55.339,
    "Adem\u00e1s, calcular su soluci\u00f3n suele ser intratable."
   ]
  ]
 },
 "srm": {
  "dur": 54.528,
  "marks": {
   "union": 5.638,
   "bound": 12.8,
   "obj": 25.391,
   "emp": 28.919,
   "pen": 35.716,
   "kstar": 38.086,
   "cmp": 46.146
  },
  "cues": [
   [
    0.102,
    "La minimizaci\u00f3n del riesgo estructural, o SRM, corrige eso."
   ],
   [
    5.638,
    "Se parte de un conjunto muy rico, escrito como uni\u00f3n de conjuntos anidados de complejidad creciente."
   ],
   [
    12.8,
    "Para todos a la vez vale una cota: el error de generalizaci\u00f3n no supera al error emp\u00edrico, m\u00e1s la complejidad de Rademacher del conjunto que contiene a la hip\u00f3tesis, m\u00e1s un t\u00e9rmino que crece con el \u00edndice k."
   ],
   [
    25.391,
    "Esa suma es el objetivo de SRM."
   ],
   [
    28.919,
    "En el ejemplo, el error emp\u00edrico de la soluci\u00f3n de ERM en cada conjunto baja al crecer k."
   ],
   [
    35.716,
    "La penalizaci\u00f3n sube."
   ],
   [
    38.086,
    "SRM elige el \u00edndice y la hip\u00f3tesis que minimizan la suma: aqu\u00ed, k igual a cuatro, con ocho tramos."
   ],
   [
    46.146,
    "Su error de generalizaci\u00f3n es menor que el de los dos extremos, y queda cerca del m\u00ednimo real, que estaba en k igual a cinco."
   ]
  ]
 },
 "q2": {
  "dur": 6.216,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Con otra muestra, \u00bfqu\u00e9 conjunto elige SRM?"
   ]
  ]
 },
 "garantia": {
  "dur": 57.24,
  "marks": {
   "thm": 2.943,
   "star": 17.448,
   "oracle": 21.927,
   "price": 29.518,
   "bars": 38.06,
   "but": 43.425,
   "cost": 51.901
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 garant\u00eda tiene esa elecci\u00f3n?"
   ],
   [
    2.943,
    "El teorema dice que, con probabilidad alta, el error de la hip\u00f3tesis de SRM no supera al de cualquier hip\u00f3tesis de H, m\u00e1s dos veces la complejidad de su conjunto, m\u00e1s el t\u00e9rmino de su \u00edndice, m\u00e1s un t\u00e9rmino de confianza."
   ],
   [
    17.448,
    "Vale, en particular, para la mejor hip\u00f3tesis de H."
   ],
   [
    21.927,
    "Si un or\u00e1culo dijera en qu\u00e9 conjunto est\u00e1, bastar\u00eda aplicar ERM ah\u00ed, y la cota ser\u00eda casi la misma."
   ],
   [
    29.518,
    "La diferencia es un solo t\u00e9rmino: la ra\u00edz del logaritmo de k sobre m."
   ],
   [
    34.779,
    "Ese es todo el precio de no conocer k."
   ],
   [
    38.06,
    "En el ejemplo es peque\u00f1o frente al resto, y todos bajan al crecer la muestra."
   ],
   [
    43.425,
    "SRM tiene dos l\u00edmites."
   ],
   [
    46.55,
    "Descomponer H en conjuntos de complejidad controlada es una hip\u00f3tesis fuerte."
   ],
   [
    51.901,
    "Y hay que resolver ERM para muchos \u00edndices, lo que suele ser intratable."
   ]
  ]
 },
 "wrap": {
  "dur": 24.432,
  "marks": {
   "w1": 1.823,
   "w2": 6.667,
   "w3": 11.237,
   "w4": 15.625
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "El exceso de error es la suma del error de estimaci\u00f3n y el de aproximaci\u00f3n."
   ],
   [
    6.667,
    "Al agrandar H, la aproximaci\u00f3n baja y la estimaci\u00f3n sube."
   ],
   [
    11.237,
    "ERM minimiza el error emp\u00edrico, pero ignora la complejidad de H."
   ],
   [
    15.625,
    "SRM le suma una penalizaci\u00f3n que crece con k, y elige el m\u00ednimo."
   ],
   [
    21.185,
    "Ahora, la pr\u00e1ctica del cap\u00edtulo."
   ]
  ]
 },
 "final1": {
  "dur": 6.648,
  "marks": {},
  "cues": [
   [
    0.102,
    "Pr\u00e1ctica del cap\u00edtulo."
   ],
   [
    2.396,
    "Para cada frase, decidir si es verdadera o falsa."
   ]
  ]
 },
 "final2": {
  "dur": 5.808,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfCu\u00e1l de los dos conjuntos elige SRM?"
   ]
  ]
 },
 "finish": {
  "dur": 4.272,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo siete."
   ]
  ]
 }
};

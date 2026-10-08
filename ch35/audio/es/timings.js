window.TIMINGS = {
 "intro": {
  "dur": 12.72,
  "marks": {
   "sub": 6.198
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta y cinco."
   ],
   [
    2.526,
    "Aprender sin modelo: T D y Q-learning."
   ],
   [
    6.198,
    "Cuando no se conocen las transiciones ni las recompensas, los valores se estiman a partir de la experiencia."
   ]
  ]
 },
 "model": {
  "dur": 30.168,
  "marks": {
   "hide": 3.919,
   "walk": 8.802,
   "two": 14.909,
   "mb": 17.109,
   "mf": 22.995,
   "ql": 27.122
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, el modelo del entorno era un dato."
   ],
   [
    3.919,
    "Ahora no se conocen las probabilidades de transici\u00f3n ni las recompensas."
   ],
   [
    8.802,
    "El agente solo puede actuar y observar: a qu\u00e9 estado llega, y qu\u00e9 recompensa recibe."
   ],
   [
    14.909,
    "Hay dos enfoques."
   ],
   [
    17.109,
    "Con modelo: primero se estima el modelo del entorno, y con \u00e9l se busca la pol\u00edtica."
   ],
   [
    22.995,
    "Sin modelo: se aprende la pol\u00edtica directamente."
   ],
   [
    27.122,
    "A esta familia pertenece Q-learning."
   ]
  ]
 },
 "sa": {
  "dur": 45.24,
  "marks": {
   "mean": 3.919,
   "upd": 10.117,
   "cond": 17.331,
   "lln": 28.346,
   "fix": 34.987
  },
  "cues": [
   [
    0.102,
    "La herramienta viene de la aproximaci\u00f3n estoc\u00e1stica."
   ],
   [
    3.919,
    "El caso m\u00e1s simple: estimar la esperanza de una variable a partir de valores observados."
   ],
   [
    10.117,
    "Cada valor nuevo corrige la estimaci\u00f3n: se le suma alfa por la diferencia entre el valor observado y la estimaci\u00f3n."
   ],
   [
    17.331,
    "Teorema diecisiete punto catorce: si los pasos alfa suman infinito, y sus cuadrados suman una cantidad finita, la estimaci\u00f3n converge casi seguramente a la esperanza."
   ],
   [
    28.346,
    "Con alfa igual a uno sobre la cantidad de valores vistos, es la ley fuerte de los grandes n\u00fameros."
   ],
   [
    34.987,
    "La misma receta halla el punto fijo de una funci\u00f3n que solo se observa con ruido: si es una contracci\u00f3n, el teorema diecisiete punto diecisiete da la convergencia."
   ]
  ]
 },
 "td": {
  "dur": 65.208,
  "marks": {
   "bel": 7.721,
   "upd": 15.781,
   "err": 23.62,
   "s1": 28.177,
   "s2": 36.12,
   "s3": 42.109,
   "more": 48.646,
   "lim": 53.177,
   "ex": 58.971
  },
  "cues": [
   [
    0.102,
    "Primer algoritmo: T D cero."
   ],
   [
    3.06,
    "Eval\u00faa una pol\u00edtica dada: aqu\u00ed, buscar y llevar."
   ],
   [
    7.721,
    "Por la ecuaci\u00f3n de Bellman, el valor de un estado es una esperanza: la recompensa, m\u00e1s gamma por el valor del estado siguiente."
   ],
   [
    15.781,
    "Cada paso del agente da una muestra de esa esperanza, y el valor del estado se corrige hacia ella, con un paso alfa."
   ],
   [
    23.62,
    "La diferencia entre la muestra y el valor actual es la diferencia temporal."
   ],
   [
    28.177,
    "Primer paso: de inicio a otro, recompensa cero."
   ],
   [
    32.747,
    "La diferencia es cero: nada cambia."
   ],
   [
    36.12,
    "Segundo: recompensa tres."
   ],
   [
    39.232,
    "El valor de otro sube a tres."
   ],
   [
    42.109,
    "Tercero: la muestra vale dos punto cuatro, y el valor de inicio avanza una parte del camino."
   ],
   [
    48.646,
    "Y as\u00ed, paso a paso, con alfa cada vez m\u00e1s chico."
   ],
   [
    53.177,
    "Tras cuatro mil pasos: dos punto siete seis, y tres punto cuatro seis."
   ],
   [
    58.971,
    "Cerca de los valores exactos: dos punto siete tres, y tres punto cuatro ocho."
   ]
  ]
 },
 "q1": {
  "dur": 7.488,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Un paso de T D cero, a mano."
   ],
   [
    4.935,
    "\u00bfD\u00f3nde queda el valor de inicio?"
   ]
  ]
 },
 "ql": {
  "dur": 68.88,
  "marks": {
   "tab": 10.404,
   "upd": 15.508,
   "act": 25.742,
   "run": 34.87,
   "lim": 37.839,
   "opt": 44.323,
   "pol": 50.781,
   "thm": 56.081
  },
  "cues": [
   [
    0.102,
    "Segundo algoritmo: Q-learning."
   ],
   [
    3.06,
    "No eval\u00faa una pol\u00edtica: estima directamente Q estrella, la funci\u00f3n \u00f3ptima de valor de estado y acci\u00f3n."
   ],
   [
    10.404,
    "La estimaci\u00f3n es una tabla: una celda por cada par de estado y acci\u00f3n."
   ],
   [
    15.508,
    "La actualizaci\u00f3n repite la idea de T D cero: la celda del par visitado se corrige hacia la recompensa, m\u00e1s gamma por el m\u00e1ximo de la fila del estado al que se lleg\u00f3."
   ],
   [
    25.742,
    "Las acciones se eligen con una pol\u00edtica \u00e9psilon voraz: casi siempre la de mayor valor en la tabla; con probabilidad \u00e9psilon, una al azar."
   ],
   [
    34.87,
    "Las celdas se corrigen paso a paso."
   ],
   [
    37.839,
    "Tras cuatro mil pasos: tres punto nueve cuatro, cuatro punto cinco nueve, y cinco."
   ],
   [
    44.323,
    "Los valores \u00f3ptimos: tres punto nueve uno, cuatro punto cinco siete, y cinco."
   ],
   [
    50.781,
    "El m\u00e1ximo de cada fila da la pol\u00edtica: en el otro estado, recoger."
   ],
   [
    56.081,
    "Teorema diecisiete punto dieciocho: con las mismas condiciones sobre los pasos de cada par, Q-learning converge a Q estrella con probabilidad uno."
   ],
   [
    65.065,
    "Eso exige visitar cada par infinitas veces."
   ]
  ]
 },
 "q2": {
  "dur": 9.072,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El agente busc\u00f3, y lleg\u00f3 al otro estado."
   ],
   [
    5.547,
    "\u00bfQu\u00e9 celda da el m\u00e1ximo de la actualizaci\u00f3n?"
   ]
  ]
 },
 "sarsa": {
  "dur": 55.512,
  "marks": {
   "off": 6.797,
   "sarsa": 16.875,
   "ex": 23.112,
   "q": 29.987,
   "s": 35.104,
   "conv": 39.883,
   "run": 49.115
  },
  "cues": [
   [
    0.102,
    "Un algoritmo as\u00ed tiene dos piezas: la pol\u00edtica con la que act\u00faa, y la regla con la que actualiza."
   ],
   [
    6.797,
    "En Q-learning la regla usa el m\u00e1ximo, sin mirar qu\u00e9 acci\u00f3n tomar\u00e1 la pol\u00edtica: es off-policy."
   ],
   [
    13.359,
    "Mejora una pol\u00edtica mientras act\u00faa con otra."
   ],
   [
    16.875,
    "SARSA es la variante on-policy: usa la acci\u00f3n que la pol\u00edtica elige en el estado siguiente."
   ],
   [
    23.112,
    "El mismo paso, con las dos reglas."
   ],
   [
    26.51,
    "La pol\u00edtica explora, y elige llevar."
   ],
   [
    29.987,
    "Q-learning toma el m\u00e1ximo: la celda sube a tres punto cuatro cero."
   ],
   [
    35.104,
    "SARSA toma la celda de llevar: baja a tres punto dos ocho."
   ],
   [
    39.883,
    "Por eso la convergencia de SARSA depende de la pol\u00edtica: adem\u00e1s de elegir todas las acciones infinitas veces, debe volverse voraz en el l\u00edmite."
   ],
   [
    49.115,
    "Aqu\u00ed, con un \u00e9psilon que decrece, su tabla tambi\u00e9n queda cerca de los valores \u00f3ptimos."
   ]
  ]
 },
 "more": {
  "dur": 41.928,
  "marks": {
   "n": 0.102,
   "lam": 11.914,
   "l0": 18.984,
   "l1": 22.643,
   "e": 26.693,
   "big": 33.411
  },
  "cues": [
   [
    0.102,
    "T D cero y Q-learning solo usan la recompensa inmediata."
   ],
   [
    4.492,
    "Se pueden usar varios pasos: n recompensas descontadas, y despu\u00e9s el valor del estado al que se llega."
   ],
   [
    11.914,
    "T D lambda no elige un n: los mezcla todos, con pesos que decaen geom\u00e9tricamente seg\u00fan lambda."
   ],
   [
    18.984,
    "Con lambda cero, coincide con T D cero."
   ],
   [
    22.643,
    "Con lambda uno, es la recompensa futura total."
   ],
   [
    26.693,
    "El seudoc\u00f3digo del libro usa un peso por estado: crece al visitarlo, y decae despu\u00e9s."
   ],
   [
    33.411,
    "Y cuando los estados son demasiados para una tabla, el valor se aproxima con una funci\u00f3n de pocos par\u00e1metros: un problema de regresi\u00f3n."
   ]
  ]
 },
 "wrap": {
  "dur": 31.824,
  "marks": {
   "w1": 1.823,
   "w2": 8.672,
   "w3": 12.839,
   "w4": 22.305
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Sin modelo, las esperanzas de las ecuaciones de Bellman se estiman con muestras, y con pasos que se achican."
   ],
   [
    8.672,
    "T D cero eval\u00faa una pol\u00edtica con la diferencia temporal."
   ],
   [
    12.839,
    "Q-learning estima Q estrella con el m\u00e1ximo del estado siguiente: es off-policy."
   ],
   [
    18.346,
    "SARSA usa la acci\u00f3n elegida: es on-policy."
   ],
   [
    22.305,
    "T D lambda mezcla retornos de varios pasos."
   ],
   [
    25.964,
    "Con este cap\u00edtulo termina el libro."
   ],
   [
    28.815,
    "Ahora, la \u00faltima pr\u00e1ctica."
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
  "dur": 5.616,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una actualizaci\u00f3n de Q-learning, a mano."
   ]
  ]
 },
 "finish": {
  "dur": 5.928,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo treinta y cinco, el \u00faltimo del libro."
   ]
  ]
 }
};

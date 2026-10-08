window.TIMINGS = {
 "intro": {
  "dur": 11.88,
  "marks": {
   "sub": 6.12
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta y tres."
   ],
   [
    2.539,
    "Procesos de decisi\u00f3n de Markov y pol\u00edticas."
   ],
   [
    6.12,
    "Un agente act\u00faa, recibe recompensas, y busca la mejor forma de elegir."
   ]
  ]
 },
 "esc": {
  "dur": 46.08,
  "marks": {
   "act": 8.047,
   "back": 9.284,
   "nolab": 14.805,
   "imm": 19.661,
   "expl": 25.352,
   "dist": 31.758,
   "plan": 37.396,
   "learn": 42.812
  },
  "cues": [
   [
    0.102,
    "Un escenario distinto del supervisado: el aprendizaje por refuerzo."
   ],
   [
    5.117,
    "Un agente interact\u00faa con su entorno."
   ],
   [
    8.047,
    "Elige una acci\u00f3n, y el entorno le responde con dos datos: su nuevo estado y una recompensa."
   ],
   [
    14.805,
    "No recibe una muestra etiquetada: re\u00fane informaci\u00f3n al actuar."
   ],
   [
    19.661,
    "Y solo le llega la recompensa inmediata de la \u00faltima acci\u00f3n, no la de largo plazo."
   ],
   [
    25.352,
    "De ah\u00ed un dilema: explorar estados y acciones desconocidos, o explotar lo que ya sabe."
   ],
   [
    31.758,
    "Tampoco hay una distribuci\u00f3n fija: la pol\u00edtica elegida define lo que se observa."
   ],
   [
    37.396,
    "Si el agente conoce el modelo del entorno, el problema es de planificaci\u00f3n."
   ],
   [
    42.812,
    "Si no lo conoce, es de aprendizaje."
   ]
  ]
 },
 "mdp": {
  "dur": 50.112,
  "marks": {
   "st": 5.82,
   "ac": 15.013,
   "pr": 20.391,
   "rw": 31.732,
   "mk": 39.896,
   "fin": 45.964
  },
  "cues": [
   [
    0.102,
    "El modelo m\u00e1s usado para el entorno es el proceso de decisi\u00f3n de Markov, o M D P."
   ],
   [
    5.82,
    "Tiene un conjunto de estados, con un estado inicial."
   ],
   [
    9.883,
    "Aqu\u00ed, los dos del ejemplo del libro: un robot que junta pelotas."
   ],
   [
    15.013,
    "Tiene un conjunto de acciones: aqu\u00ed, buscar, llevar y recoger."
   ],
   [
    20.391,
    "Tiene probabilidades de transici\u00f3n: dados el estado y la acci\u00f3n, a qu\u00e9 estado se llega."
   ],
   [
    26.654,
    "Al buscar, se pasa al otro estado con probabilidad cero punto nueve."
   ],
   [
    31.732,
    "Y tiene recompensas, que tambi\u00e9n dependen del estado y de la acci\u00f3n."
   ],
   [
    36.536,
    "Llevar puede dar tres, o costar uno."
   ],
   [
    39.896,
    "Es de Markov porque todo eso depende solo del estado actual, no de la historia completa."
   ],
   [
    45.964,
    "Y es finito si los estados y las acciones son finitos."
   ]
  ]
 },
 "pol": {
  "dur": 55.368,
  "marks": {
   "pol": 3.737,
   "det": 9.701,
   "stat": 18.06,
   "walk": 22.409,
   "disc": 32.07,
   "shr": 42.109,
   "ret": 45.99,
   "fh": 49.375
  },
  "cues": [
   [
    0.102,
    "El agente tiene que decidir qu\u00e9 hacer en cada estado."
   ],
   [
    3.737,
    "Eso es una pol\u00edtica: a cada estado le asigna una distribuci\u00f3n sobre las acciones."
   ],
   [
    9.701,
    "Es determinista si en cada estado elige una sola acci\u00f3n."
   ],
   [
    13.919,
    "Esta busca en el inicio, y lleva en el otro estado."
   ],
   [
    18.06,
    "Y es estacionaria: la elecci\u00f3n no depende del tiempo."
   ],
   [
    22.409,
    "Ahora el agente camina."
   ],
   [
    24.961,
    "En cada paso aplica la pol\u00edtica, cambia de estado seg\u00fan las probabilidades, y recibe una recompensa."
   ],
   [
    32.07,
    "Con horizonte infinito, cada recompensa se multiplica por una potencia de gamma, el factor de descuento, menor que uno: aqu\u00ed, cero punto ocho."
   ],
   [
    42.109,
    "Las primeras recompensas pesan m\u00e1s que las tard\u00edas."
   ],
   [
    45.99,
    "La suma es el retorno de la trayectoria."
   ],
   [
    49.375,
    "Con horizonte finito, se suman las recompensas hasta el \u00faltimo paso, sin descuento."
   ]
  ]
 },
 "q1": {
  "dur": 9.768,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Otra trayectoria, con el mismo descuento."
   ],
   [
    5.443,
    "\u00bfQu\u00e9 recompensa se multiplica por cero punto sesenta y cuatro?"
   ]
  ]
 },
 "val": {
  "dur": 29.856,
  "marks": {
   "many": 6.133,
   "conv": 10.56,
   "def": 13.034,
   "ini": 20.247,
   "oth": 25.911
  },
  "cues": [
   [
    0.102,
    "Otra trayectoria con la misma pol\u00edtica da otro retorno: las transiciones son al azar."
   ],
   [
    6.133,
    "Se repite muchas veces desde el mismo estado, y se promedia."
   ],
   [
    10.56,
    "El promedio se estabiliza."
   ],
   [
    13.034,
    "Ese n\u00famero estima el valor de la pol\u00edtica en el estado: el retorno esperado al empezar ah\u00ed y seguir la pol\u00edtica."
   ],
   [
    20.247,
    "Desde el inicio, con cinco mil trayectorias, da cerca de dos punto siete."
   ],
   [
    25.911,
    "Desde el otro estado, cerca de tres punto cinco."
   ]
  ]
 },
 "bell": {
  "dur": 52.344,
  "marks": {
   "split": 2.747,
   "two": 22.188,
   "mat": 26.732,
   "thm": 35.0,
   "solve": 41.51,
   "chk": 48.763
  },
  "cues": [
   [
    0.102,
    "Pero no hace falta simular."
   ],
   [
    2.747,
    "El retorno se parte en dos: la primera recompensa, m\u00e1s gamma por el retorno desde el estado siguiente."
   ],
   [
    10.0,
    "Al tomar esperanzas sale la proposici\u00f3n diecisiete punto nueve, las ecuaciones de Bellman: el valor de un estado es su recompensa esperada, m\u00e1s gamma por el promedio de los valores de los estados siguientes."
   ],
   [
    22.188,
    "En el ejemplo son dos ecuaciones lineales con dos inc\u00f3gnitas."
   ],
   [
    26.732,
    "En forma matricial: V es igual a R, m\u00e1s gamma por P por V, con P, la matriz de transici\u00f3n de la pol\u00edtica."
   ],
   [
    35.0,
    "Teorema diecisiete punto diez: en un M D P finito, el sistema tiene soluci\u00f3n \u00fanica."
   ],
   [
    41.51,
    "Se resuelve, y cada estado recibe su valor: dos punto siete tres, y tres punto cuatro ocho."
   ],
   [
    48.763,
    "Los promedios simulados hab\u00edan quedado cerca."
   ]
  ]
 },
 "q2": {
  "dur": 8.208,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "La ecuaci\u00f3n de Bellman del estado inicio."
   ],
   [
    5.039,
    "\u00bfQu\u00e9 flecha aporta el t\u00e9rmino marcado?"
   ]
  ]
 },
 "imp": {
  "dur": 48.24,
  "marks": {
   "q": 2.513,
   "bars": 11.55,
   "alt": 17.513,
   "thm": 24.714,
   "sw": 37.76,
   "new": 41.771
  },
  "cues": [
   [
    0.102,
    "\u00bfConvendr\u00eda otra acci\u00f3n?"
   ],
   [
    2.513,
    "Para medirlo est\u00e1 la funci\u00f3n de valor de estado y acci\u00f3n, Q: el retorno esperado al tomar una acci\u00f3n en un estado, y despu\u00e9s seguir la pol\u00edtica."
   ],
   [
    11.55,
    "En el otro estado, llevar vale tres punto cuatro ocho: lo mismo que la pol\u00edtica."
   ],
   [
    17.513,
    "Recoger una vez, y despu\u00e9s volver a la pol\u00edtica, vale tres punto siete nueve."
   ],
   [
    23.267,
    "M\u00e1s."
   ],
   [
    24.714,
    "Teorema diecisiete punto seis, de mejora de la pol\u00edtica: si, medida con ese Q, una pol\u00edtica nueva vale al menos lo mismo en cada estado, entonces su valor es al menos igual en todos los estados."
   ],
   [
    37.76,
    "Se cambia la pol\u00edtica: recoger en el otro estado."
   ],
   [
    41.771,
    "Se resuelve su sistema, y los dos valores suben: a tres punto nueve uno, y a cinco."
   ]
  ]
 },
 "opt": {
  "dur": 48.696,
  "marks": {
   "def": 2.708,
   "cond": 8.008,
   "chk": 17.63,
   "ex": 27.122,
   "star": 33.854,
   "nl": 45.56
  },
  "cues": [
   [
    0.102,
    "\u00bfHasta d\u00f3nde se puede mejorar?"
   ],
   [
    2.708,
    "Una pol\u00edtica es \u00f3ptima si su valor es m\u00e1ximo en todos los estados a la vez."
   ],
   [
    8.008,
    "Teorema diecisiete punto siete, la condici\u00f3n de optimalidad de Bellman: una pol\u00edtica es \u00f3ptima si y solo si cada acci\u00f3n que elige maximiza su propio Q."
   ],
   [
    17.63,
    "La pol\u00edtica nueva la cumple: en el otro estado, recoger vale cinco, y llevar, cuatro punto cinco siete."
   ],
   [
    25.339,
    "Es \u00f3ptima."
   ],
   [
    27.122,
    "Teorema diecisiete punto ocho: todo M D P finito admite una pol\u00edtica \u00f3ptima determinista."
   ],
   [
    33.854,
    "Sus valores cumplen otras ecuaciones de Bellman: el valor \u00f3ptimo de un estado es el m\u00e1ximo, sobre las acciones, de la recompensa esperada m\u00e1s gamma por el valor esperado del estado siguiente."
   ],
   [
    45.56,
    "Por ese m\u00e1ximo, ya no es lineal."
   ]
  ]
 },
 "wrap": {
  "dur": 28.728,
  "marks": {
   "w1": 1.823,
   "w2": 8.151,
   "w3": 14.323,
   "w4": 19.714
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un M D P: estados, acciones, probabilidades de transici\u00f3n y recompensas."
   ],
   [
    8.151,
    "Una pol\u00edtica elige la acci\u00f3n en cada estado, y su valor es el retorno descontado esperado."
   ],
   [
    14.323,
    "Las ecuaciones de Bellman dan ese valor como soluci\u00f3n \u00fanica de un sistema lineal."
   ],
   [
    19.714,
    "Y una pol\u00edtica es \u00f3ptima si y solo si cada acci\u00f3n que elige maximiza su funci\u00f3n Q."
   ],
   [
    25.495,
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
  "dur": 4.464,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una cuenta con descuento."
   ]
  ]
 },
 "finish": {
  "dur": 4.68,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo treinta y tres."
   ]
  ]
 }
};

window.TIMINGS = {
 "intro": {
  "dur": 12.192,
  "marks": {
   "sub": 6.576
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta y cuatro."
   ],
   [
    2.487,
    "Planificaci\u00f3n: iterar valores y pol\u00edticas."
   ],
   [
    6.576,
    "Con el modelo del entorno conocido, tres formas de calcular la pol\u00edtica \u00f3ptima."
   ]
  ]
 },
 "plan": {
  "dur": 27.72,
  "marks": {
   "know": 6.719,
   "plan": 14.05,
   "three": 20.417,
   "a1": 22.37,
   "a2": 23.893,
   "a3": 25.495
  },
  "cues": [
   [
    0.102,
    "Las ecuaciones del valor \u00f3ptimo quedaron sin resolver: llevan un m\u00e1ximo, y no son lineales."
   ],
   [
    6.719,
    "Aqu\u00ed se supone conocido el modelo del entorno: las probabilidades de transici\u00f3n y las recompensas esperadas."
   ],
   [
    14.05,
    "Entonces no hay nada que aprender: hallar la pol\u00edtica \u00f3ptima es un problema de planificaci\u00f3n."
   ],
   [
    20.417,
    "El libro da tres algoritmos: iteraci\u00f3n de valores, iteraci\u00f3n de pol\u00edticas, y programaci\u00f3n lineal."
   ]
  ]
 },
 "vi": {
  "dur": 44.76,
  "marks": {
   "phi": 4.974,
   "start": 16.914,
   "r1": 21.419,
   "r2": 24.648,
   "more": 29.323,
   "lim": 33.138,
   "pol": 39.102
  },
  "cues": [
   [
    0.102,
    "La iteraci\u00f3n de valores usa esas ecuaciones como regla de actualizaci\u00f3n."
   ],
   [
    4.974,
    "El operador fi toma un vector de valores y devuelve otro: en cada estado, el m\u00e1ximo, sobre las acciones, de la recompensa esperada m\u00e1s gamma por el valor esperado del estado siguiente."
   ],
   [
    16.914,
    "Se parte de un vector cualquiera: aqu\u00ed, cero y cero."
   ],
   [
    21.419,
    "Se aplica fi: cero, y uno."
   ],
   [
    24.648,
    "Otra vez: cero punto siete dos, y uno punto ocho."
   ],
   [
    29.323,
    "Y se sigue."
   ],
   [
    31.107,
    "Los valores suben ronda a ronda, hacia tres punto nueve uno, y cinco: los valores \u00f3ptimos del cap\u00edtulo anterior."
   ],
   [
    39.102,
    "Las acciones que dan el m\u00e1ximo definen una pol\u00edtica: buscar, y recoger."
   ]
  ]
 },
 "q1": {
  "dur": 7.92,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Una ronda m\u00e1s, a mano."
   ],
   [
    4.622,
    "\u00bfQu\u00e9 flecha da el m\u00e1ximo en el otro estado?"
   ]
  ]
 },
 "conv": {
  "dur": 58.776,
  "marks": {
   "lip": 2.07,
   "fix": 12.578,
   "thm": 16.823,
   "plot": 24.31,
   "rate": 29.674,
   "other": 33.49,
   "stop": 36.706,
   "it": 45.586,
   "it2": 50.508,
   "log": 53.984
  },
  "cues": [
   [
    0.102,
    "\u00bfPor qu\u00e9 converge?"
   ],
   [
    2.07,
    "Porque fi es una contracci\u00f3n: al aplicarla a dos vectores, su distancia, medida por la mayor diferencia entre coordenadas, se multiplica a lo sumo por gamma."
   ],
   [
    12.578,
    "Y el valor \u00f3ptimo es su punto fijo: fi lo deja igual."
   ],
   [
    16.823,
    "De ah\u00ed el teorema diecisiete punto once: desde cualquier valor inicial, la sucesi\u00f3n converge al valor \u00f3ptimo."
   ],
   [
    24.31,
    "Esta es la distancia al valor \u00f3ptimo, en escala logar\u00edtmica: una recta."
   ],
   [
    29.674,
    "En cada ronda se multiplica por cero punto ocho."
   ],
   [
    33.49,
    "Desde otro inicio, tambi\u00e9n baja."
   ],
   [
    36.706,
    "El algoritmo se detiene cuando una ronda cambia los valores en menos de un umbral."
   ],
   [
    41.849,
    "Eso garantiza un error de a lo sumo \u00e9psilon."
   ],
   [
    45.586,
    "Para \u00e9psilon cero punto uno, el ciclo da diecisiete vueltas."
   ],
   [
    50.508,
    "Para cero punto cero uno, veintisiete."
   ],
   [
    53.984,
    "El n\u00famero de iteraciones crece como el logaritmo de uno sobre \u00e9psilon."
   ]
  ]
 },
 "pi": {
  "dur": 54.024,
  "marks": {
   "start": 4.349,
   "ev": 9.01,
   "v1": 14.675,
   "im": 18.828,
   "sw": 27.786,
   "ev2": 31.133,
   "v2": 33.021,
   "im2": 36.133,
   "thm": 40.677,
   "fin": 48.333
  },
  "cues": [
   [
    0.102,
    "La iteraci\u00f3n de pol\u00edticas trabaja con pol\u00edticas completas."
   ],
   [
    4.349,
    "Parte de una pol\u00edtica cualquiera: aqu\u00ed, buscar y llevar."
   ],
   [
    9.01,
    "Primero la eval\u00faa: resuelve su sistema lineal, como en el cap\u00edtulo anterior."
   ],
   [
    14.675,
    "Dos punto siete tres, y tres punto cuatro ocho."
   ],
   [
    18.828,
    "Despu\u00e9s la mejora de forma voraz: en cada estado elige la acci\u00f3n que maximiza el lado derecho de las ecuaciones de Bellman, con esos valores."
   ],
   [
    27.786,
    "En el otro estado, cambia a recoger."
   ],
   [
    31.133,
    "Eval\u00faa la pol\u00edtica nueva: tres punto nueve uno, y cinco."
   ],
   [
    36.133,
    "Intenta mejorarla, y no cambia: el algoritmo termina."
   ],
   [
    40.677,
    "Teorema diecisiete punto doce: los valores no bajan de una pol\u00edtica a la siguiente, y nunca superan el \u00f3ptimo."
   ],
   [
    48.333,
    "Y como hay un n\u00famero finito de pol\u00edticas, el n\u00famero de iteraciones est\u00e1 acotado."
   ]
  ]
 },
 "q2": {
  "dur": 5.256,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfCu\u00e1ndo se detiene la iteraci\u00f3n de pol\u00edticas?"
   ]
  ]
 },
 "cmp": {
  "dur": 33.504,
  "marks": {
   "same": 1.875,
   "vi": 7.266,
   "pi": 10.391,
   "thm": 14.141,
   "few": 23.88,
   "cost": 26.849
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1l conviene?"
   ],
   [
    1.875,
    "Las dos, desde el mismo inicio: los valores de la pol\u00edtica de partida."
   ],
   [
    7.266,
    "La iteraci\u00f3n de valores sube de a poco."
   ],
   [
    10.391,
    "La de pol\u00edticas llega aqu\u00ed al \u00f3ptimo en un paso."
   ],
   [
    14.141,
    "Teorema diecisiete punto trece: con el mismo inicio, en cada iteraci\u00f3n, los valores de la iteraci\u00f3n de pol\u00edticas son al menos los de la iteraci\u00f3n de valores."
   ],
   [
    23.88,
    "Converge en menos iteraciones."
   ],
   [
    26.849,
    "Pero cada una exige resolver un sistema lineal: cuesta m\u00e1s que una ronda de la iteraci\u00f3n de valores."
   ]
  ]
 },
 "lp": {
  "dur": 50.952,
  "marks": {
   "eq": 3.464,
   "c1": 18.815,
   "b1": 23.398,
   "c2": 24.219,
   "c3": 24.961,
   "reg": 26.628,
   "obj": 28.711,
   "vx": 35.664,
   "al": 40.534,
   "sol": 44.466
  },
  "cues": [
   [
    0.102,
    "Tercera v\u00eda: la programaci\u00f3n lineal."
   ],
   [
    3.464,
    "Cada ecuaci\u00f3n del valor \u00f3ptimo es un m\u00e1ximo."
   ],
   [
    6.914,
    "Equivale a buscar los valores m\u00e1s chicos que cumplan una desigualdad por cada estado y cada acci\u00f3n: el valor del estado, al menos la recompensa esperada m\u00e1s gamma por el valor esperado del siguiente."
   ],
   [
    18.815,
    "En el ejemplo son tres."
   ],
   [
    21.302,
    "Cada una descarta medio plano: buscar, llevar, y recoger."
   ],
   [
    26.628,
    "Queda esta regi\u00f3n."
   ],
   [
    28.711,
    "Se minimiza una suma de los valores con pesos positivos: la recta baja hasta apoyarse en un v\u00e9rtice."
   ],
   [
    35.664,
    "Tres punto nueve uno, y cinco: otra vez el valor \u00f3ptimo."
   ],
   [
    40.534,
    "Con otros pesos positivos, el mismo v\u00e9rtice."
   ],
   [
    44.466,
    "Y un programa lineal se resuelve con m\u00e9todos generales, como el s\u00edmplex o los de punto interior."
   ]
  ]
 },
 "wrap": {
  "dur": 25.848,
  "marks": {
   "w1": 1.823,
   "w2": 6.289,
   "w3": 11.406,
   "w4": 18.268
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Planificar es hallar la pol\u00edtica \u00f3ptima con el modelo conocido."
   ],
   [
    6.289,
    "La iteraci\u00f3n de valores aplica una contracci\u00f3n hasta acercarse a su punto fijo."
   ],
   [
    11.406,
    "La iteraci\u00f3n de pol\u00edticas alterna evaluaci\u00f3n y mejora: menos iteraciones, pero m\u00e1s costosas."
   ],
   [
    18.268,
    "Y el valor \u00f3ptimo tambi\u00e9n es la soluci\u00f3n de un programa lineal."
   ],
   [
    22.604,
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
  "dur": 6.288,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una ronda de la iteraci\u00f3n de valores en el ejemplo del libro."
   ]
  ]
 },
 "finish": {
  "dur": 4.608,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo treinta y cuatro."
   ]
  ]
 }
};

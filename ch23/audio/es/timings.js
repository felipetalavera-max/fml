window.TIMINGS = {
 "intro": {
  "dur": 12.816,
  "marks": {
   "sub": 5.807
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintitr\u00e9s."
   ],
   [
    2.435,
    "Regresi\u00f3n: cotas de generalizaci\u00f3n."
   ],
   [
    5.807,
    "Cuando la etiqueta es un n\u00famero, el error se mide por su tama\u00f1o, y las garant\u00edas ya conocidas se adaptan."
   ]
  ]
 },
 "reg": {
  "dur": 32.976,
  "marks": {
   "pts": 4.661,
   "hyp": 9.102,
   "res": 12.122,
   "one": 18.945,
   "lossf": 21.419,
   "dif": 25.82
  },
  "cues": [
   [
    0.102,
    "En regresi\u00f3n, la etiqueta de cada punto es un n\u00famero real."
   ],
   [
    4.661,
    "Cada punto de la muestra tiene una entrada x y una etiqueta y."
   ],
   [
    9.102,
    "Una hip\u00f3tesis h propone un valor para cada x."
   ],
   [
    12.122,
    "Acertar exactamente ser\u00eda pedir demasiado."
   ],
   [
    15.716,
    "Lo que cuenta es la distancia entre lo predicho y lo correcto: el residuo de cada punto."
   ],
   [
    21.419,
    "Una funci\u00f3n de p\u00e9rdida convierte esa distancia en un costo."
   ],
   [
    25.82,
    "Esa es la diferencia con la clasificaci\u00f3n: no importa si los dos valores coinciden, sino cu\u00e1nto difieren."
   ]
  ]
 },
 "loss": {
  "dur": 54.84,
  "marks": {
   "sq": 2.667,
   "lp": 9.974,
   "emp": 17.018,
   "move": 27.539,
   "gen": 32.708,
   "bnd": 42.448,
   "m4": 48.438
  },
  "cues": [
   [
    0.102,
    "La p\u00e9rdida m\u00e1s usada es la cuadr\u00e1tica: el residuo al cuadrado."
   ],
   [
    4.922,
    "En el dibujo, el \u00e1rea de un cuadrado levantado sobre cada residuo."
   ],
   [
    9.974,
    "M\u00e1s en general, la p\u00e9rdida L p eleva el residuo a una potencia p, mayor o igual que uno."
   ],
   [
    17.018,
    "El error emp\u00edrico es el promedio de las p\u00e9rdidas sobre la muestra."
   ],
   [
    21.38,
    "Con la cuadr\u00e1tica, el error cuadr\u00e1tico medio: aqu\u00ed, cero punto cero siete."
   ],
   [
    27.539,
    "Si la hip\u00f3tesis cambia, cambian los cuadrados, y con ellos el error."
   ],
   [
    32.708,
    "El error de generalizaci\u00f3n es la esperanza de la p\u00e9rdida sobre la distribuci\u00f3n."
   ],
   [
    37.917,
    "En este modelo se puede calcular: cero punto cero seis."
   ],
   [
    42.448,
    "Las cotas necesitan un supuesto: que la p\u00e9rdida est\u00e9 acotada por una constante M."
   ],
   [
    48.438,
    "Aqu\u00ed ning\u00fan residuo supera dos, as\u00ed que M es cuatro: el \u00e1rea del marco completo."
   ]
  ]
 },
 "q1": {
  "dur": 10.56,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres muestras de tres puntos, frente a la misma hip\u00f3tesis."
   ],
   [
    6.354,
    "\u00bfEn cu\u00e1l es mayor el error emp\u00edrico con la p\u00e9rdida cuadr\u00e1tica?"
   ]
  ]
 },
 "fin": {
  "dur": 45.504,
  "marks": {
   "H": 3.071,
   "bars": 5.977,
   "tick": 8.854,
   "hoef": 12.175,
   "union": 18.516,
   "thm": 22.031,
   "val": 28.854,
   "more": 33.594,
   "occam": 38.398
  },
  "cues": [
   [
    0.102,
    "Primero, un conjunto finito de hip\u00f3tesis: aqu\u00ed, veinticinco rectas."
   ],
   [
    5.977,
    "Cada una tiene su error emp\u00edrico, la barra, y su error de generalizaci\u00f3n, la marca."
   ],
   [
    12.175,
    "Como la p\u00e9rdida vive entre cero y M, la desigualdad de Hoeffding controla la diferencia para una hip\u00f3tesis, y la cota de la uni\u00f3n, para todas a la vez."
   ],
   [
    22.031,
    "Resulta el teorema once punto uno: el mismo t\u00e9rmino del cap\u00edtulo tres, multiplicado por M."
   ],
   [
    28.854,
    "Con doce puntos vale dos punto cero cuatro: garantiza poco."
   ],
   [
    33.594,
    "Con mil doscientos, cien veces m\u00e1s, es diez veces menor."
   ],
   [
    38.398,
    "Y crece con el logaritmo del tama\u00f1o de H: a igual error emp\u00edrico, conviene el conjunto m\u00e1s chico."
   ]
  ]
 },
 "rad": {
  "dur": 54.936,
  "marks": {
   "fam": 10.13,
   "lip": 14.323,
   "prop": 26.953,
   "thm": 31.237,
   "lpm": 39.883,
   "p2": 46.615,
   "p1": 51.81
  },
  "cues": [
   [
    0.102,
    "Con infinitas hip\u00f3tesis, como todas las rectas, hace falta otra medida."
   ],
   [
    5.859,
    "La complejidad de Rademacher, del cap\u00edtulo cuatro, sigue sirviendo, pero aplicada a la familia de las p\u00e9rdidas, no a H."
   ],
   [
    14.323,
    "El puente es el lema de contracci\u00f3n de Talagrand, ya usado en las cotas por margen."
   ],
   [
    19.896,
    "Si la p\u00e9rdida, como funci\u00f3n de la predicci\u00f3n, es mu Lipschitz, es decir, su pendiente nunca supera mu, la complejidad de las p\u00e9rdidas es a lo sumo mu por la de H."
   ],
   [
    31.237,
    "De ah\u00ed sale el teorema once punto tres: error emp\u00edrico, m\u00e1s dos mu por la complejidad de H, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    39.883,
    "Para una p\u00e9rdida L p con residuos acotados por M, mu es p por M elevado a p menos uno."
   ],
   [
    46.615,
    "Con la cuadr\u00e1tica, aqu\u00ed, mu es cuatro: la pendiente en el borde."
   ],
   [
    51.81,
    "Con p igual a uno, mu es uno."
   ]
  ]
 },
 "pd": {
  "dur": 50.208,
  "marks": {
   "wit": 15.182,
   "ab": 19.688,
   "four": 25.286,
   "g1": 35.599,
   "g2": 36.784,
   "g3": 38.164,
   "g4": 39.466,
   "def": 41.458,
   "vc": 46.042
  },
  "cues": [
   [
    0.102,
    "Calcular la complejidad de Rademacher puede ser costoso."
   ],
   [
    4.206,
    "En clasificaci\u00f3n, la alternativa fue combinatoria: fragmentar, y la dimensi\u00f3n VC."
   ],
   [
    10.846,
    "Pero una funci\u00f3n con valores reales no reparte etiquetas."
   ],
   [
    15.182,
    "La idea es asociar a cada punto un umbral: su testigo."
   ],
   [
    19.688,
    "Una funci\u00f3n marca m\u00e1s si pasa por encima del testigo, y menos si pasa por debajo."
   ],
   [
    25.286,
    "Un conjunto queda fragmentado si, para algunos testigos, la familia logra todas las combinaciones."
   ],
   [
    32.266,
    "Con dos puntos son cuatro, y las rectas las logran: arriba y arriba, arriba y abajo, abajo y arriba, abajo y abajo."
   ],
   [
    41.458,
    "La pseudo-dimensi\u00f3n es el tama\u00f1o del mayor conjunto fragmentado."
   ],
   [
    46.042,
    "Coincide con la dimensi\u00f3n VC de las funciones con umbral."
   ]
  ]
 },
 "q2": {
  "dur": 7.992,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntos con sus testigos."
   ],
   [
    4.688,
    "\u00bfQu\u00e9 combinaci\u00f3n no logra ninguna recta?"
   ]
  ]
 },
 "dim": {
  "dur": 45.768,
  "marks": {
   "l2": 1.771,
   "l3": 6.068,
   "hyp": 16.68,
   "vec": 23.451,
   "thm": 28.945,
   "grow": 38.06
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1nto vale?"
   ],
   [
    1.771,
    "Para las rectas sobre un eje, dos puntos se fragmentan."
   ],
   [
    6.068,
    "Con tres, siempre falla alguna combinaci\u00f3n: aqu\u00ed, ninguna recta pasa por debajo, por encima y por debajo."
   ],
   [
    13.945,
    "Su pseudo-dimensi\u00f3n es dos."
   ],
   [
    16.68,
    "Es el teorema once punto seis: los hiperplanos en dimensi\u00f3n N tienen pseudo-dimensi\u00f3n N m\u00e1s uno."
   ],
   [
    23.451,
    "Y el once punto siete: la de un espacio vectorial de funciones es su dimensi\u00f3n."
   ],
   [
    28.945,
    "Con ella llega la \u00faltima cota, el teorema once punto ocho."
   ],
   [
    33.594,
    "Si la familia de p\u00e9rdidas tiene pseudo-dimensi\u00f3n d, al error emp\u00edrico se le suma un t\u00e9rmino que crece con d y se achica con m, y el de confianza."
   ],
   [
    42.643,
    "Los dos, multiplicados por M."
   ]
  ]
 },
 "wrap": {
  "dur": 30.456,
  "marks": {
   "w1": 1.823,
   "w2": 8.32,
   "w3": 15.221,
   "w4": 21.107
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "En regresi\u00f3n las etiquetas son n\u00fameros, y una p\u00e9rdida acotada por M mide la magnitud del error."
   ],
   [
    8.32,
    "Con H finito, Hoeffding y la cota de la uni\u00f3n dan la garant\u00eda de clasificaci\u00f3n, multiplicada por M."
   ],
   [
    15.221,
    "Con Rademacher, una p\u00e9rdida mu Lipschitz aporta, a lo sumo, un factor mu."
   ],
   [
    21.107,
    "Y la pseudo-dimensi\u00f3n extiende la dimensi\u00f3n VC con testigos: su cota crece con d."
   ],
   [
    27.227,
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
 "finish": {
  "dur": 4.584,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintitr\u00e9s."
   ]
  ]
 }
};

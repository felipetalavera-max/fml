window.TIMINGS = {
 "intro": {
  "dur": 11.76,
  "marks": {
   "sub": 5.456
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo cinco."
   ],
   [
    2.161,
    "Funci\u00f3n de crecimiento y dimensi\u00f3n VC."
   ],
   [
    5.456,
    "Para medir un conjunto de hip\u00f3tesis, basta contar de cu\u00e1ntas maneras puede colorear unos puntos."
   ]
  ]
 },
 "dicot": {
  "dur": 49.032,
  "marks": {
   "pts": 7.461,
   "line": 10.977,
   "move": 16.276,
   "eight": 26.38,
   "col": 31.888,
   "def": 36.784
  },
  "cues": [
   [
    0.102,
    "Calcular la complejidad de Rademacher puede ser costoso."
   ],
   [
    4.206,
    "Hay una medida m\u00e1s simple: contar."
   ],
   [
    7.461,
    "Se toman tres puntos, sin etiquetas."
   ],
   [
    10.977,
    "Una recta los clasifica: m\u00e1s uno de un lado, menos uno del otro."
   ],
   [
    16.276,
    "Rectas hay infinitas, pero sobre estos puntos solo importa c\u00f3mo quedan coloreados."
   ],
   [
    22.344,
    "Cada manera distinta de colorearlos es una dicotom\u00eda."
   ],
   [
    26.38,
    "Tres puntos se pueden colorear de ocho maneras, y las rectas logran las ocho."
   ],
   [
    31.888,
    "Con tres puntos alineados, en cambio, solo logran seis."
   ],
   [
    36.784,
    "La funci\u00f3n de crecimiento se queda con el mejor caso: el mayor n\u00famero de dicotom\u00edas que el conjunto logra sobre m puntos."
   ],
   [
    44.688,
    "No depende de la distribuci\u00f3n: es pura combinatoria."
   ]
  ]
 },
 "massart": {
  "dur": 47.064,
  "marks": {
   "sweep": 3.073,
   "mas": 10.872,
   "cor": 20.651,
   "bound": 28.854,
   "thr": 35.3,
   "allf": 41.289
  },
  "cues": [
   [
    0.102,
    "\u00bfDe qu\u00e9 sirve contar dicotom\u00edas?"
   ],
   [
    3.073,
    "Los umbrales del cap\u00edtulo anterior son infinitos, pero sobre ocho puntos solo producen nueve vectores de signos distintos."
   ],
   [
    10.872,
    "El lema de Massart dice que, para un conjunto finito de vectores, la mejor correlaci\u00f3n con signos al azar crece apenas como la ra\u00edz del logaritmo de su tama\u00f1o."
   ],
   [
    20.651,
    "De ah\u00ed sale que la complejidad de Rademacher es a lo sumo la ra\u00edz de dos por el logaritmo de la funci\u00f3n de crecimiento, dividido entre m."
   ],
   [
    28.854,
    "Y con el teorema del cap\u00edtulo anterior, una cota de generalizaci\u00f3n que solo cuenta dicotom\u00edas."
   ],
   [
    35.3,
    "Para los umbrales, con m m\u00e1s uno dicotom\u00edas, ese t\u00e9rmino baja al crecer m."
   ],
   [
    41.289,
    "Pero si el conjunto logra las dos a la m dicotom\u00edas, el t\u00e9rmino no baja nunca."
   ]
  ]
 },
 "q1": {
  "dur": 6.336,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 manera de etiquetar no es una dicotom\u00eda de los intervalos?"
   ]
  ]
 },
 "vc": {
  "dur": 49.8,
  "marks": {
   "shat": 4.661,
   "four": 10.339,
   "diag": 17.487,
   "inside": 25.286,
   "dim": 32.904,
   "some": 44.089
  },
  "cues": [
   [
    0.102,
    "Con tres puntos, las rectas logran todas las dicotom\u00edas."
   ],
   [
    4.661,
    "Cuando eso pasa, se dice que el conjunto de hip\u00f3tesis fragmenta a esos puntos."
   ],
   [
    10.339,
    "\u00bfY con cuatro puntos?"
   ],
   [
    12.539,
    "Hay diecis\u00e9is maneras de colorearlos, y las rectas logran catorce."
   ],
   [
    17.487,
    "Fallan las dos que pintan cada diagonal de un color: ninguna recta deja una diagonal de un lado y la otra del otro."
   ],
   [
    25.286,
    "Si un punto queda dentro del tri\u00e1ngulo de los otros tres, tampoco: no se puede separar ese punto de los que lo rodean."
   ],
   [
    32.904,
    "Ning\u00fan conjunto de cuatro puntos queda fragmentado."
   ],
   [
    36.797,
    "La dimensi\u00f3n VC es el tama\u00f1o del mayor conjunto que se puede fragmentar: para las rectas del plano, tres."
   ],
   [
    44.089,
    "Basta con que exista un conjunto de ese tama\u00f1o: no hace falta que sean todos."
   ]
  ]
 },
 "ejemplos": {
  "dur": 48.768,
  "marks": {
   "int2": 3.307,
   "int3": 8.451,
   "rect4": 18.555,
   "rect5": 26.263,
   "rule": 40.69
  },
  "cues": [
   [
    0.102,
    "As\u00ed se calcula en otros conjuntos."
   ],
   [
    3.307,
    "Intervalos en la recta: con dos puntos se logran las cuatro dicotom\u00edas."
   ],
   [
    8.451,
    "Con tres, nunca se logra m\u00e1s, menos, m\u00e1s: un intervalo no puede saltarse el punto del medio."
   ],
   [
    15.703,
    "Dimensi\u00f3n VC: dos."
   ],
   [
    18.555,
    "Rect\u00e1ngulos alineados a los ejes: cuatro puntos en rombo quedan fragmentados, con sus diecis\u00e9is dicotom\u00edas."
   ],
   [
    26.263,
    "Con cinco puntos, cuatro bastan para fijar el rect\u00e1ngulo m\u00e1s chico que los contiene a todos, y el quinto queda dentro."
   ],
   [
    33.971,
    "Pintar ese de azul y los dem\u00e1s de salm\u00f3n es imposible."
   ],
   [
    37.8,
    "Dimensi\u00f3n VC: cuatro."
   ],
   [
    40.69,
    "La receta es siempre la misma: mostrar un conjunto de d puntos fragmentado, y probar que ninguno de d m\u00e1s uno lo est\u00e1."
   ]
  ]
 },
 "q2": {
  "dur": 4.776,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 punto no se puede dejar fuera?"
   ]
  ]
 },
 "infinita": {
  "dur": 44.088,
  "marks": {
   "poly": 3.75,
   "tan": 10.638,
   "inf": 19.635,
   "sin": 25.13,
   "freq": 30.534,
   "par": 36.589
  },
  "cues": [
   [
    0.102,
    "La dimensi\u00f3n VC tambi\u00e9n puede ser infinita."
   ],
   [
    3.75,
    "Pol\u00edgonos convexos: con los puntos sobre un c\u00edrculo, basta usar los positivos como v\u00e9rtices."
   ],
   [
    10.638,
    "Y si los positivos son mayor\u00eda, los lados se apoyan en los negativos."
   ],
   [
    15.794,
    "Con d lados se fragmentan dos d m\u00e1s uno puntos."
   ],
   [
    19.635,
    "Sin l\u00edmite de lados, cualquier cantidad de puntos: dimensi\u00f3n infinita."
   ],
   [
    25.13,
    "Otro caso: las funciones seno, con un solo par\u00e1metro, la frecuencia."
   ],
   [
    30.534,
    "Eligiendo la frecuencia se logra cualquier dicotom\u00eda de estos puntos, y de cuantos se quiera."
   ],
   [
    36.589,
    "En las rectas, la dimensi\u00f3n VC coincid\u00eda con el n\u00famero de par\u00e1metros."
   ],
   [
    41.875,
    "En general, no."
   ]
  ]
 },
 "sauer": {
  "dur": 59.688,
  "marks": {
   "all": 3.06,
   "lemma": 9.466,
   "split": 20.286,
   "poly": 27.253,
   "two": 35.56,
   "bound": 40.833,
   "ratio": 53.034
  },
  "cues": [
   [
    0.102,
    "Falta unir las dos medidas."
   ],
   [
    3.06,
    "Colorear m puntos de todas las maneras da dos a la m dicotom\u00edas: crecimiento exponencial."
   ],
   [
    9.466,
    "El lema de Sauer dice que, si la dimensi\u00f3n VC es d, la funci\u00f3n de crecimiento es a lo sumo la suma de los n\u00fameros combinatorios de m sobre i, con i desde cero hasta d."
   ],
   [
    20.286,
    "Hasta m igual a d, eso es dos a la m."
   ],
   [
    24.18,
    "Despu\u00e9s, la curva se despega."
   ],
   [
    27.253,
    "Para m mayor o igual que d, esa suma es a lo sumo e por m sobre d, todo elevado a la d: un polinomio de grado d."
   ],
   [
    35.56,
    "Solo hay dos comportamientos: polinomial, o exponencial para siempre."
   ],
   [
    40.833,
    "Al reemplazar en la cota anterior, el error de generalizaci\u00f3n es a lo sumo el emp\u00edrico, m\u00e1s la ra\u00edz de dos d por el logaritmo de e m sobre d, dividido entre m, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    53.034,
    "Lo que importa es el cociente entre m y d: hacen falta muchos m\u00e1s datos que dimensi\u00f3n VC."
   ]
  ]
 },
 "wrap": {
  "dur": 31.536,
  "marks": {
   "w1": 1.823,
   "w2": 8.151,
   "w3": 13.802,
   "w4": 21.328
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "La funci\u00f3n de crecimiento cuenta el mayor n\u00famero de dicotom\u00edas que el conjunto logra sobre m puntos."
   ],
   [
    8.151,
    "La dimensi\u00f3n VC es el tama\u00f1o del mayor conjunto de puntos que se puede fragmentar."
   ],
   [
    13.802,
    "Por el lema de Sauer, con dimensi\u00f3n VC finita las dicotom\u00edas crecen como un polinomio, no como dos a la m."
   ],
   [
    21.328,
    "Y eso da una cota de generalizaci\u00f3n que depende del cociente entre el tama\u00f1o de la muestra y la dimensi\u00f3n VC."
   ],
   [
    28.307,
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
  "dur": 5.472,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfCu\u00e1ntas dicotom\u00edas permite el lema de Sauer?"
   ]
  ]
 },
 "finish": {
  "dur": 4.344,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo cinco."
   ]
  ]
 }
};

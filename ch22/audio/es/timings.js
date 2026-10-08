window.TIMINGS = {
 "intro": {
  "dur": 12.696,
  "marks": {
   "sub": 6.315
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintid\u00f3s."
   ],
   [
    2.37,
    "Ranking bipartito, A U C y preferencias."
   ],
   [
    6.315,
    "Ordenar positivos antes que negativos, medir ese orden y construirlo con comparaciones."
   ]
  ]
 },
 "bip": {
  "dur": 35.088,
  "marks": {
   "two": 3.331,
   "goal": 6.224,
   "samp": 11.55,
   "grid": 17.995,
   "err": 26.654,
   "cnt": 30.729
  },
  "cues": [
   [
    0.102,
    "Un caso frecuente de ranking tiene solo dos clases: puntos positivos y negativos."
   ],
   [
    6.224,
    "Se busca una puntuaci\u00f3n h que deje a los positivos por encima de los negativos."
   ],
   [
    11.55,
    "La muestra ya no son pares: son m positivos de una distribuci\u00f3n y n negativos de otra."
   ],
   [
    17.995,
    "Los pares se forman despu\u00e9s: cada positivo con cada negativo."
   ],
   [
    22.917,
    "Aqu\u00ed, cinco por siete: treinta y cinco."
   ],
   [
    26.654,
    "El error emp\u00edrico es la fracci\u00f3n de esos pares que queda mal ordenada: siete de treinta y cinco, es decir, cero punto dos."
   ]
  ]
 },
 "q1": {
  "dur": 8.712,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntuaciones distintas sobre seis puntos."
   ],
   [
    5.417,
    "\u00bfEn cu\u00e1l el error de ranking es dos de nueve?"
   ]
  ]
 },
 "rb": {
  "dur": 50.088,
  "marks": {
   "fac": 7.331,
   "h": 14.974,
   "upd": 20.482,
   "cells": 26.68,
   "cost": 30.716,
   "ada": 33.529,
   "min": 43.672
  },
  "cues": [
   [
    0.102,
    "Con mil positivos y mil negativos habr\u00eda un mill\u00f3n de pares, y RankBoost reparte peso sobre los pares."
   ],
   [
    7.331,
    "Pero en el caso bipartito su distribuci\u00f3n se factoriza: el peso de un par es el peso de su positivo por el de su negativo."
   ],
   [
    14.974,
    "Un ranker base, aqu\u00ed un umbral sobre la puntuaci\u00f3n, vale uno a su derecha."
   ],
   [
    20.482,
    "Al actualizar, los positivos con valor uno pierden peso y los negativos con valor uno lo ganan."
   ],
   [
    26.68,
    "La cuadr\u00edcula entera sale de doce n\u00fameros, no de treinta y cinco: una ronda cuesta m m\u00e1s n."
   ],
   [
    33.529,
    "Y hay una relaci\u00f3n con AdaBoost: su funci\u00f3n objetivo suma dos t\u00e9rminos, uno de los positivos y otro de los negativos; la de RankBoost los multiplica."
   ],
   [
    43.672,
    "Si entre las hip\u00f3tesis base est\u00e1 la constante, un m\u00ednimo de la primera tambi\u00e9n lo es de la segunda."
   ]
  ]
 },
 "roc": {
  "dur": 50.256,
  "marks": {
   "thr": 6.406,
   "sweep": 11.159,
   "end": 26.549,
   "area": 29.596,
   "auc": 42.669
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se informa la calidad de un ranking bipartito?"
   ],
   [
    3.984,
    "Con la curva ROC."
   ],
   [
    6.406,
    "Se fija un umbral: lo que queda por encima se predice positivo."
   ],
   [
    11.159,
    "El umbral baja desde el extremo m\u00e1s alto."
   ],
   [
    14.596,
    "Cada positivo que cruza es un escal\u00f3n hacia arriba: sube la tasa de verdaderos positivos."
   ],
   [
    20.951,
    "Cada negativo, un escal\u00f3n a la derecha: sube la de falsos positivos."
   ],
   [
    26.549,
    "Al final todo se predice positivo."
   ],
   [
    29.596,
    "El \u00e1rea bajo la curva, o A U C, se puede contar."
   ],
   [
    33.919,
    "Cada celda es un par, y queda bajo la curva justo cuando el umbral cruz\u00f3 antes al positivo que al negativo: cuando el par est\u00e1 bien ordenado."
   ],
   [
    42.669,
    "Por eso el A U C es uno menos el error de ranking: aqu\u00ed, veintiocho de treinta y cinco, cero punto ocho."
   ]
  ]
 },
 "med": {
  "dur": 45.84,
  "marks": {
   "fix": 3.516,
   "slide": 8.529,
   "move": 16.549,
   "top": 22.513,
   "p5": 30.508,
   "dcg": 32.995,
   "ndcg": 41.484
  },
  "cues": [
   [
    0.102,
    "El A U C no es el error de clasificaci\u00f3n."
   ],
   [
    3.516,
    "Con este umbral fijo, el clasificador falla en tres puntos de doce."
   ],
   [
    8.529,
    "Si este positivo baja, sigue fallando en tres, pero pierde pares: el A U C cae a cero punto setenta y uno."
   ],
   [
    16.549,
    "Al rev\u00e9s, mover el umbral cambia el error y no el A U C, que solo mira el orden."
   ],
   [
    22.513,
    "Otros criterios miran el comienzo de la lista."
   ],
   [
    26.029,
    "La precisi\u00f3n en los n primeros es la fracci\u00f3n de positivos entre esos puestos: aqu\u00ed, tres de cinco."
   ],
   [
    32.995,
    "El DCG, o ganancia acumulada con descuento, suma la relevancia de cada elemento con factores que se achican al bajar en la lista."
   ],
   [
    41.484,
    "Y el NDCG lo divide por el DCG del orden ideal."
   ]
  ]
 },
 "pref": {
  "dur": 43.704,
  "marks": {
   "s1": 8.711,
   "s2": 17.578,
   "arr": 20.43,
   "cyc": 26.51,
   "tgt": 30.859,
   "loss": 36.107,
   "lh": 40.0
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, una puntuaci\u00f3n ordenaba todo de una vez."
   ],
   [
    4.388,
    "El escenario basado en preferencias trabaja en dos etapas."
   ],
   [
    8.711,
    "Primero se aprende, con un clasificador sobre pares, una funci\u00f3n de preferencia: dados u y v, dice cu\u00e1l va antes."
   ],
   [
    17.578,
    "Despu\u00e9s llega un conjunto concreto para ordenar, y se consulta esa funci\u00f3n par por par."
   ],
   [
    23.555,
    "Cada flecha va del preferido al otro."
   ],
   [
    26.51,
    "Nada obliga a que sea transitiva: aqu\u00ed hay un ciclo."
   ],
   [
    30.859,
    "El orden deseado es bipartito: los positivos antes que los negativos."
   ],
   [
    36.107,
    "La p\u00e9rdida es la fracci\u00f3n de pares en desacuerdo con \u00e9l."
   ],
   [
    40.0,
    "La funci\u00f3n de preferencia falla en uno de quince."
   ]
  ]
 },
 "deg": {
  "dur": 52.272,
  "marks": {
   "deg": 3.268,
   "sort": 7.096,
   "tie": 9.388,
   "res": 16.055,
   "bnd": 24.609,
   "call": 31.094,
   "low": 35.326,
   "adv": 46.562
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se pasa de las flechas a un orden?"
   ],
   [
    3.268,
    "Lo natural es contar victorias: el grado de cada elemento, y ordenar por grados."
   ],
   [
    9.388,
    "Los tres del ciclo empatan, y una regla fija los desempata: aqu\u00ed, el orden alfab\u00e9tico."
   ],
   [
    16.055,
    "As\u00ed E, que es positivo, queda detr\u00e1s de A y de B: dos pares en desacuerdo, el doble que la funci\u00f3n de preferencia."
   ],
   [
    24.609,
    "Es justo la garant\u00eda del algoritmo: su p\u00e9rdida esperada es a lo sumo dos veces la de h."
   ],
   [
    31.094,
    "Y consulta todos los pares: quince llamadas."
   ],
   [
    35.326,
    "Ese factor dos no se puede mejorar sin azar: seg\u00fan el teorema diez punto cinco, para todo algoritmo determinista hay una distribuci\u00f3n donde su regret es al menos el doble del de h."
   ],
   [
    46.562,
    "Basta un ciclo, y elegir el orden deseado en contra de lo que devuelva el algoritmo."
   ]
  ]
 },
 "q2": {
  "dur": 9.264,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Otra funci\u00f3n de preferencia, sobre cinco elementos."
   ],
   [
    6.094,
    "\u00bfCu\u00e1l queda primero al ordenar por grados?"
   ]
  ]
 },
 "qs": {
  "dur": 48.264,
  "marks": {
   "piv": 8.88,
   "part": 12.721,
   "rec": 21.016,
   "done": 24.974,
   "run": 28.659,
   "exp": 35.391,
   "eq": 39.531,
   "reg": 45.339
  },
  "cues": [
   [
    0.102,
    "Para bajar de ese factor dos hace falta azar."
   ],
   [
    3.802,
    "El algoritmo es QuickSort, con la funci\u00f3n de preferencia como comparaci\u00f3n."
   ],
   [
    8.88,
    "Se elige un pivote al azar: aqu\u00ed sali\u00f3 E."
   ],
   [
    12.721,
    "Los que le ganan a E pasan a su izquierda; los dem\u00e1s, a su derecha."
   ],
   [
    17.721,
    "Solo se consult\u00f3 a h contra el pivote."
   ],
   [
    21.016,
    "Y se repite en cada lado, con un pivote nuevo."
   ],
   [
    24.974,
    "Listo: ocho llamadas en lugar de quince."
   ],
   [
    28.659,
    "En esta ejecuci\u00f3n queda un par en desacuerdo."
   ],
   [
    32.018,
    "Con otros pivotes pueden ser cero o dos."
   ],
   [
    35.391,
    "En promedio sobre los pivotes, exactamente uno."
   ],
   [
    39.531,
    "Es la garant\u00eda: la p\u00e9rdida esperada de QuickSort es igual a la de h, sin el factor dos, y su regret es a lo sumo el de h."
   ]
  ]
 },
 "wrap": {
  "dur": 32.424,
  "marks": {
   "w1": 1.823,
   "w2": 9.167,
   "w3": 14.297,
   "w4": 20.742
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "En el ranking bipartito la muestra son positivos y negativos, y el error se cuenta sobre los m por n pares."
   ],
   [
    9.167,
    "RankBoost factoriza su distribuci\u00f3n: m m\u00e1s n pesos por ronda."
   ],
   [
    14.297,
    "El A U C, el \u00e1rea bajo la curva ROC, es la fracci\u00f3n de pares bien ordenados."
   ],
   [
    20.742,
    "Con preferencias, ordenar por grados garantiza un factor dos, y QuickSort aleatorizado iguala en esperanza la p\u00e9rdida de h."
   ],
   [
    29.18,
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
  "dur": 4.536,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintid\u00f3s."
   ]
  ]
 }
};

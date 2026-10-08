window.TIMINGS = {
 "intro": {
  "dur": 10.824,
  "marks": {
   "sub": 5.508
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintiuno."
   ],
   [
    2.292,
    "Ranking con SVM y RankBoost."
   ],
   [
    5.508,
    "Ordenar en lugar de clasificar: aprender una puntuaci\u00f3n a partir de pares."
   ]
  ]
 },
 "rank": {
  "dur": 30.672,
  "marks": {
   "top": 4.803,
   "list": 10.898,
   "h": 16.602,
   "sort": 23.75,
   "other": 27.292
  },
  "cues": [
   [
    0.102,
    "Un buscador no puede mostrar todo lo que un clasificador marcar\u00eda como relevante: quien consulta mira solo los primeros resultados."
   ],
   [
    8.555,
    "Por eso importa el orden."
   ],
   [
    10.898,
    "Aqu\u00ed hay ocho resultados de una b\u00fasqueda, cada uno con dos caracter\u00edsticas."
   ],
   [
    16.602,
    "En el escenario basado en puntuaciones, la hip\u00f3tesis es una funci\u00f3n h que asigna un n\u00famero a cada elemento."
   ],
   [
    23.75,
    "Ordenar es poner primero al de mayor puntuaci\u00f3n."
   ],
   [
    27.292,
    "Otra funci\u00f3n de puntuaci\u00f3n da otro orden."
   ]
  ]
 },
 "pares": {
  "dur": 45.648,
  "marks": {
   "pair": 2.839,
   "lab": 7.24,
   "arcs": 17.227,
   "col": 21.992,
   "err": 26.901,
   "tr": 32.24,
   "cyc": 37.839
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se sabe si un orden es bueno?"
   ],
   [
    2.839,
    "La muestra no trae una etiqueta por elemento, sino por par."
   ],
   [
    7.24,
    "Cada par, x y x prima, lleva m\u00e1s uno si x prima debe ir antes, menos uno si debe ir antes x, y cero si no hay preferencia."
   ],
   [
    17.227,
    "Aqu\u00ed hay doce pares: el punto marca al que debe ir primero."
   ],
   [
    21.992,
    "Un par queda en verde si h lo ordena bien, y en rojo si lo invierte."
   ],
   [
    26.901,
    "El error emp\u00edrico es la fracci\u00f3n de pares mal ordenados: cuatro de doce."
   ],
   [
    32.24,
    "Una diferencia con la clasificaci\u00f3n: las preferencias no tienen que ser transitivas."
   ],
   [
    37.839,
    "Si forman un ciclo, ninguna puntuaci\u00f3n acierta los tres pares, porque el orden que induce h siempre es transitivo."
   ]
  ]
 },
 "q1": {
  "dur": 8.256,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Ahora h punt\u00faa por popularidad."
   ],
   [
    4.987,
    "\u00bfCu\u00e1l de estos tres pares queda invertido?"
   ]
  ]
 },
 "cota": {
  "dur": 49.248,
  "marks": {
   "mar": 2.852,
   "neg": 10.534,
   "rho": 14.31,
   "thm": 22.799,
   "rad": 30.156,
   "two": 33.581,
   "conf": 39.883,
   "trade": 42.474
  },
  "cues": [
   [
    0.102,
    "\u00bfY el error sobre pares nuevos?"
   ],
   [
    2.852,
    "Como en clasificaci\u00f3n, se mira el margen de cada par: la diferencia de puntuaciones, con el signo de su etiqueta."
   ],
   [
    10.534,
    "Los m\u00e1rgenes negativos son los pares invertidos."
   ],
   [
    14.31,
    "Se fija un margen ro, y se cuentan los pares que no lo alcanzan: los mal ordenados, y los bien ordenados con poca confianza."
   ],
   [
    22.799,
    "El teorema diez punto uno acota el error de generalizaci\u00f3n con la p\u00e9rdida de margen emp\u00edrica, que es a lo sumo esa fracci\u00f3n; m\u00e1s un t\u00e9rmino de complejidad de Rademacher dividido por ro, que ahora suma dos partes: una sobre los primeros elementos de los pares, y otra sobre los segundos; m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    42.474,
    "Es el compromiso de siempre: un ro grande achica la complejidad, pero deja m\u00e1s pares bajo el margen."
   ]
  ]
 },
 "svm": {
  "dur": 39.432,
  "marks": {
   "lin": 3.073,
   "dif": 9.232,
   "y": 13.464,
   "svm": 15.664,
   "obj": 19.792,
   "line": 22.669,
   "res": 25.573,
   "ker": 30.078
  },
  "cues": [
   [
    0.102,
    "De esa cota sale un algoritmo."
   ],
   [
    3.073,
    "Con una puntuaci\u00f3n lineal, el margen de un par es w por la diferencia de sus dos vectores."
   ],
   [
    9.232,
    "Entonces cada par se convierte en un punto: su vector diferencia, con la etiqueta del par."
   ],
   [
    15.664,
    "Y el problema es exactamente una SVM sobre esos puntos: minimizar la norma de w m\u00e1s las holguras, con una recta que pasa por el origen."
   ],
   [
    25.573,
    "Aqu\u00ed separa los doce pares: ninguno queda invertido."
   ],
   [
    30.078,
    "Como toda SVM, admite kernels: basta la matriz de productos entre vectores diferencia, que se escribe con cuatro evaluaciones del kernel."
   ]
  ]
 },
 "rb1": {
  "dur": 52.536,
  "marks": {
   "d": 8.945,
   "h": 15.612,
   "three": 23.073,
   "plus": 25.638,
   "minus": 26.641,
   "zero": 27.526,
   "pick": 34.622,
   "alpha": 40.026,
   "upd": 44.779,
   "z": 50.495
  },
  "cues": [
   [
    0.102,
    "La otra v\u00eda es el boosting."
   ],
   [
    2.682,
    "RankBoost combina rankers base, como AdaBoost combinaba clasificadores d\u00e9biles."
   ],
   [
    8.945,
    "Mantiene una distribuci\u00f3n sobre los pares, uniforme al comienzo: es el grosor de cada arco."
   ],
   [
    15.612,
    "Un ranker base vale uno o cero."
   ],
   [
    18.594,
    "Este vale uno si la popularidad supera cinco punto cinco."
   ],
   [
    23.073,
    "Cada par cae en uno de tres casos: bien ordenado, invertido, o empatado."
   ],
   [
    29.154,
    "\u00c9psilon m\u00e1s, \u00e9psilon menos y \u00e9psilon cero son los pesos de cada grupo."
   ],
   [
    34.622,
    "Se elige el ranker con mayor diferencia entre \u00e9psilon m\u00e1s y \u00e9psilon menos."
   ],
   [
    40.026,
    "Su peso alfa es la mitad del logaritmo del cociente entre los dos."
   ],
   [
    44.779,
    "Y se actualiza la distribuci\u00f3n: los pares invertidos engordan, los bien ordenados adelgazan, y Z normaliza."
   ]
  ]
 },
 "q2": {
  "dur": 11.16,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El ranker de la segunda ronda vale uno si la coincidencia supera cinco punto cinco."
   ],
   [
    7.747,
    "\u00bfA cu\u00e1l de estos pares le sube m\u00e1s el peso?"
   ]
  ]
 },
 "rb2": {
  "dur": 44.4,
  "marks": {
   "r1": 5.078,
   "r2": 12.331,
   "r3": 16.667,
   "r4": 21.732,
   "thm": 26.914,
   "exp": 32.292,
   "alpha": 40.039
  },
  "cues": [
   [
    0.102,
    "La puntuaci\u00f3n final es la suma de los rankers, cada uno con su alfa."
   ],
   [
    5.078,
    "Tras la primera ronda fallan seis pares: uno invertido y cinco empatados, que tambi\u00e9n cuentan como error."
   ],
   [
    12.331,
    "La segunda ronda usa la coincidencia: quedan tres."
   ],
   [
    16.667,
    "La tercera vuelve a la popularidad, con otro umbral: queda uno."
   ],
   [
    21.732,
    "Y con la cuarta, ninguno: la lista ordena bien los doce pares."
   ],
   [
    26.914,
    "El teorema diez punto tres lo explica: el error emp\u00edrico es a lo sumo el producto de los Z, y ese producto decae exponencialmente si cada ranker ordena bien m\u00e1s peso del que invierte, con una ventaja m\u00ednima gama."
   ],
   [
    40.039,
    "De hecho, alfa es el valor que hace m\u00ednimo cada Z."
   ]
  ]
 },
 "rb3": {
  "dur": 38.712,
  "marks": {
   "f": 4.779,
   "coord": 13.633,
   "step": 17.943,
   "mar": 24.154,
   "t": 31.211
  },
  "cues": [
   [
    0.102,
    "Igual que AdaBoost, RankBoost es un descenso por coordenadas."
   ],
   [
    4.779,
    "La funci\u00f3n objetivo suma, sobre los pares, la exponencial de menos el margen: una cota convexa del n\u00famero de pares mal ordenados."
   ],
   [
    13.633,
    "Cada ronda elige una coordenada, es decir, un ranker base, y avanza hasta el m\u00ednimo en esa direcci\u00f3n."
   ],
   [
    21.263,
    "Ese paso es exactamente alfa."
   ],
   [
    24.154,
    "Para generalizar vale la cota por margen, aplicada a la combinaci\u00f3n dividida por la suma de los alfas."
   ],
   [
    31.211,
    "El n\u00famero de rondas no aparece: solo el margen, el tama\u00f1o de la muestra y la complejidad de los rankers base."
   ]
  ]
 },
 "wrap": {
  "dur": 27.504,
  "marks": {
   "w1": 1.823,
   "w2": 7.773,
   "w3": 13.229,
   "w4": 18.268
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "En ranking se aprende una puntuaci\u00f3n, y el error es la fracci\u00f3n de pares mal ordenados."
   ],
   [
    7.773,
    "La cota por margen es la de clasificaci\u00f3n, con la complejidad de Rademacher sobre los dos elementos del par."
   ],
   [
    13.229,
    "Ranking con SVM es una SVM sobre los vectores diferencia."
   ],
   [
    18.268,
    "RankBoost reparte peso sobre los pares, y lo concentra en los que quedan mal ordenados."
   ],
   [
    24.258,
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
  "dur": 4.392,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintiuno."
   ]
  ]
 }
};

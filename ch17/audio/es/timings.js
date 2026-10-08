window.TIMINGS = {
 "intro": {
  "dur": 12.048,
  "marks": {
   "sub": 4.57
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo diecisiete."
   ],
   [
    2.461,
    "Perceptron y Winnow."
   ],
   [
    4.57,
    "Dos algoritmos en l\u00ednea para clasificar con un hiperplano: uno corrige sumando, y el otro, multiplicando."
   ]
  ]
 },
 "algo": {
  "dur": 41.136,
  "marks": {
   "w": 5.013,
   "pred": 14.896,
   "ok": 23.112,
   "upd": 26.159,
   "turn": 31.263,
   "run": 35.677
  },
  "cues": [
   [
    0.102,
    "Ahora, el algoritmo en l\u00ednea aprende un clasificador lineal."
   ],
   [
    5.013,
    "El Perceptron mantiene un vector de pesos, w, que empieza en cero."
   ],
   [
    10.3,
    "Su hiperplano pasa por el origen, y es perpendicular a w."
   ],
   [
    14.896,
    "En cada ronda llega un punto, y la predicci\u00f3n es el signo del producto de w por ese punto: de qu\u00e9 lado de la recta cae."
   ],
   [
    23.112,
    "Si acierta, w no cambia."
   ],
   [
    26.159,
    "Si falla, se le suma a w el punto multiplicado por su etiqueta."
   ],
   [
    31.263,
    "La recta gira, y ese punto queda mejor clasificado."
   ],
   [
    35.677,
    "Otro error, otra suma."
   ],
   [
    38.242,
    "Solo los errores mueven la recta."
   ]
  ]
 },
 "sgd": {
  "dur": 33.36,
  "marks": {
   "loss": 2.617,
   "F": 9.076,
   "sub": 13.568,
   "step": 19.128,
   "plot": 27.839
  },
  "cues": [
   [
    0.102,
    "\u00bfPor qu\u00e9 sumar justo eso?"
   ],
   [
    2.617,
    "A cada punto se le cobra cu\u00e1nto queda del lado equivocado: cero, si est\u00e1 bien clasificado."
   ],
   [
    9.076,
    "El promedio de esas p\u00e9rdidas es una funci\u00f3n convexa de w."
   ],
   [
    13.568,
    "Para un punto mal clasificado, su subgradiente es menos la etiqueta por el punto."
   ],
   [
    19.128,
    "Dar un paso contra ese subgradiente es, exactamente, la actualizaci\u00f3n del Perceptron: un descenso por subgradiente estoc\u00e1stico."
   ],
   [
    27.839,
    "En el ejemplo, la p\u00e9rdida promedio llega a cero tras siete actualizaciones."
   ]
  ]
 },
 "q1": {
  "dur": 7.344,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Con este vector w, \u00bfcu\u00e1l de los tres puntos marcados obliga a actualizar?"
   ]
  ]
 },
 "cota": {
  "dur": 45.432,
  "marks": {
   "r": 2.643,
   "rho": 9.779,
   "thm": 17.852,
   "num": 24.766,
   "run": 27.096,
   "dim": 33.776,
   "svm": 39.492
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1ntas veces puede fallar?"
   ],
   [
    2.643,
    "Bastan dos n\u00fameros."
   ],
   [
    5.052,
    "El radio r: ning\u00fan punto est\u00e1 a m\u00e1s de r del origen."
   ],
   [
    9.779,
    "Y el margen rho: alg\u00fan hiperplano por el origen separa las clases, y deja a todos los puntos a distancia rho, o m\u00e1s."
   ],
   [
    17.852,
    "Entonces, el Perceptron hace, a lo sumo, r cuadrado sobre rho cuadrado actualizaciones."
   ],
   [
    24.766,
    "Aqu\u00ed, veintiuna."
   ],
   [
    27.096,
    "Al recorrer la muestra una y otra vez, actualiza siete veces, y despu\u00e9s no falla m\u00e1s."
   ],
   [
    33.776,
    "La cota no depende de la dimensi\u00f3n, igual que la cota por margen de las SVM."
   ],
   [
    39.492,
    "Pero el Perceptron se queda con el primer separador que encuentra, no con el de margen m\u00e1ximo."
   ]
  ]
 },
 "prueba": {
  "dur": 35.736,
  "marks": {
   "lin": 3.516,
   "root": 12.591,
   "cs": 20.872,
   "cross": 24.232
  },
  "cues": [
   [
    0.102,
    "La idea de la prueba cabe en una gr\u00e1fica."
   ],
   [
    3.516,
    "Se sigue el producto de w con el vector separador, de norma uno."
   ],
   [
    8.594,
    "Cada actualizaci\u00f3n lo aumenta, al menos, en rho."
   ],
   [
    12.591,
    "La norma de w, en cambio, crece despacio: tras M actualizaciones, no pasa de r por la ra\u00edz de M."
   ],
   [
    20.872,
    "Y ese producto nunca supera a la norma."
   ],
   [
    24.232,
    "Una recta que sube no puede quedar siempre debajo de una ra\u00edz: se cruzan cuando M vale r cuadrado sobre rho cuadrado."
   ],
   [
    32.148,
    "M\u00e1s all\u00e1, no puede haber actualizaciones."
   ]
  ]
 },
 "q2": {
  "dur": 7.584,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Con este radio y este margen, \u00bfcu\u00e1l es la cota de actualizaciones del Perceptron?"
   ]
  ]
 },
 "nosep": {
  "dur": 41.76,
  "marks": {
   "noise": 3.477,
   "run": 7.305,
   "thm": 11.185,
   "bound": 23.008,
   "num": 30.977,
   "sep": 37.865
  },
  "cues": [
   [
    0.102,
    "\u00bfY si ning\u00fan hiperplano separa los datos?"
   ],
   [
    3.477,
    "Con dos puntos del lado equivocado, el Perceptron no converge: la recta sigue oscilando, pasada tras pasada."
   ],
   [
    11.185,
    "Aun as\u00ed, hay una cota."
   ],
   [
    13.802,
    "Se elige un vector de norma uno y un margen rho, y a cada punto se le cobra su p\u00e9rdida de bisagra: cu\u00e1nto le falta para respetar ese margen."
   ],
   [
    23.008,
    "Las actualizaciones son, a lo sumo, el cuadrado de r sobre rho, m\u00e1s la ra\u00edz de la suma de esas p\u00e9rdidas."
   ],
   [
    30.977,
    "En tres pasadas hubo diecisiete; la cota, con el separador de antes, permite ochenta y nueve."
   ],
   [
    37.865,
    "Sin p\u00e9rdidas, es la cota del caso separable."
   ]
  ]
 },
 "dual": {
  "dur": 41.976,
  "marks": {
   "sum": 2.617,
   "alpha": 9.323,
   "inner": 20.534,
   "ker": 24.219,
   "circ": 27.747,
   "svm": 36.706
  },
  "cues": [
   [
    0.102,
    "Otra forma de ver lo mismo."
   ],
   [
    2.617,
    "El vector w es la suma de los puntos que provocaron una actualizaci\u00f3n, cada uno con su etiqueta."
   ],
   [
    9.323,
    "Basta guardar cu\u00e1ntas veces actualiz\u00f3 cada punto: su coeficiente alfa."
   ],
   [
    14.753,
    "Los que tienen alfa mayor que cero hacen de vectores de soporte, como en las SVM."
   ],
   [
    20.534,
    "Y la predicci\u00f3n solo usa productos internos."
   ],
   [
    24.219,
    "Entonces, se pueden cambiar por un kernel."
   ],
   [
    27.747,
    "Con un kernel polinomial de grado dos, el Perceptron separa estos datos, que ninguna recta separa, con seis actualizaciones."
   ],
   [
    36.706,
    "Y su garant\u00eda de error esperado tiene la misma forma que la de las SVM."
   ]
  ]
 },
 "winnow": {
  "dur": 68.16,
  "marks": {
   "w": 4.974,
   "pred": 15.104,
   "upd": 19.531,
   "run": 33.385,
   "cnt": 42.552,
   "thm": 49.844,
   "cmp": 55.69
  },
  "cues": [
   [
    0.102,
    "El segundo algoritmo, Winnow, cambia la suma por un producto."
   ],
   [
    4.974,
    "Los pesos son positivos, suman uno, y empiezan iguales."
   ],
   [
    9.974,
    "Aqu\u00ed hay treinta y dos caracter\u00edsticas, que valen m\u00e1s uno o menos uno."
   ],
   [
    15.104,
    "La predicci\u00f3n es la misma: el signo de w por x."
   ],
   [
    19.531,
    "Pero si falla, cada peso se multiplica por una exponencial: crece si su coordenada coincid\u00eda con la etiqueta, y se encoge si no."
   ],
   [
    27.839,
    "Despu\u00e9s, se normaliza."
   ],
   [
    30.456,
    "Es la idea de la mayor\u00eda ponderada."
   ],
   [
    33.385,
    "En esta secuencia, la etiqueta depende solo de tres caracter\u00edsticas."
   ],
   [
    38.568,
    "Tras doscientas rondas, el peso qued\u00f3 concentrado en esas tres, con diecinueve actualizaciones."
   ],
   [
    45.326,
    "El Perceptron, sobre la misma secuencia, hace cuarenta."
   ],
   [
    49.844,
    "La cota tiene la misma forma, con otras normas, y un factor logaritmo de N."
   ],
   [
    55.69,
    "Aqu\u00ed da sesenta y dos, contra noventa y seis del Perceptron."
   ],
   [
    60.221,
    "Winnow conviene cuando pocas caracter\u00edsticas importan entre muchas; si la soluci\u00f3n no es rala, conviene el Perceptron."
   ]
  ]
 },
 "wrap": {
  "dur": 30.792,
  "marks": {
   "w1": 1.823,
   "w2": 9.362,
   "w3": 17.344,
   "w4": 22.617
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "El Perceptron predice con el signo de w por x, y solo cuando falla le suma a w el punto con su etiqueta."
   ],
   [
    9.362,
    "Con margen rho y radio r, hace a lo sumo r cuadrado sobre rho cuadrado actualizaciones, sin importar la dimensi\u00f3n."
   ],
   [
    17.344,
    "Su forma dual solo usa productos internos, as\u00ed que admite kernels."
   ],
   [
    22.617,
    "Winnow actualiza multiplicando, y conviene cuando la soluci\u00f3n es rala."
   ],
   [
    27.552,
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
    "Ese fue el cap\u00edtulo diecisiete."
   ]
  ]
 }
};

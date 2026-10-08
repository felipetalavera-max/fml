window.TIMINGS = {
 "intro": {
  "dur": 10.848,
  "marks": {
   "sub": 5.339
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo tres."
   ],
   [
    2.188,
    "Garant\u00edas con hip\u00f3tesis finitas."
   ],
   [
    5.339,
    "Cuando las hip\u00f3tesis se pueden contar, contarlas basta para obtener una garant\u00eda."
   ]
  ]
 },
 "consistente": {
  "dur": 57.144,
  "marks": {
   "line": 8.333,
   "hyps": 12.591,
   "c": 22.5,
   "sample": 25.391,
   "cross": 28.451,
   "left": 32.396,
   "bars": 40.716,
   "eps": 46.758,
   "bad": 49.714,
   "more": 53.099
  },
  "cues": [
   [
    0.102,
    "La garant\u00eda de los rect\u00e1ngulos sali\u00f3 de su geometr\u00eda."
   ],
   [
    3.815,
    "Ahora se busca una que no dependa de la forma de las hip\u00f3tesis."
   ],
   [
    8.333,
    "Un ejemplo sencillo: los puntos viven en un segmento."
   ],
   [
    12.591,
    "El conjunto de hip\u00f3tesis tiene cincuenta umbrales."
   ],
   [
    16.458,
    "Cada umbral etiqueta con uno lo que queda a su derecha, y con cero lo que queda a su izquierda."
   ],
   [
    22.5,
    "El concepto es uno de ellos."
   ],
   [
    25.391,
    "Llega una muestra de diez puntos."
   ],
   [
    28.451,
    "Se descartan los umbrales que se equivocan en alg\u00fan punto."
   ],
   [
    32.396,
    "Quedan los consistentes: los que no cometen errores en la muestra."
   ],
   [
    37.044,
    "El algoritmo devuelve uno cualquiera de ellos."
   ],
   [
    40.716,
    "Pero no todos son igual de buenos: cada barra es el error de generalizaci\u00f3n de un umbral."
   ],
   [
    46.758,
    "Con una tolerancia \u00e9psilon de cero punto uno, todav\u00eda sobreviven tres umbrales malos."
   ],
   [
    53.099,
    "Con setenta puntos, solo quedan umbrales buenos."
   ]
  ]
 },
 "cota": {
  "dur": 61.44,
  "marks": {
   "one": 3.464,
   "gap": 7.5,
   "surv": 14.349,
   "pow": 18.711,
   "union": 24.219,
   "delta": 38.984,
   "bound": 43.724,
   "num": 49.935,
   "free": 57.266
  },
  "cues": [
   [
    0.102,
    "\u00bfPor qu\u00e9 desaparecen las hip\u00f3tesis malas?"
   ],
   [
    3.464,
    "Se toma una sola, con error mayor que \u00e9psilon."
   ],
   [
    7.5,
    "Se equivoca en todo este tramo, as\u00ed que cada punto nuevo la delata con probabilidad mayor que \u00e9psilon."
   ],
   [
    14.349,
    "Para seguir siendo consistente tiene que esquivar los m puntos."
   ],
   [
    18.711,
    "La probabilidad de lograrlo es a lo sumo uno menos \u00e9psilon, elevado a m."
   ],
   [
    24.219,
    "No se sabe qu\u00e9 hip\u00f3tesis devolver\u00e1 el algoritmo, as\u00ed que la cota debe valer para todas a la vez."
   ],
   [
    30.638,
    "Las malas son, como mucho, tantas como hay en el conjunto, y sus probabilidades se suman: es la cota de la uni\u00f3n."
   ],
   [
    38.984,
    "Al exigir que esa suma no pase de delta, se despeja el tama\u00f1o de la muestra: uno sobre \u00e9psilon, por el logaritmo del n\u00famero de hip\u00f3tesis m\u00e1s el logaritmo de uno sobre delta."
   ],
   [
    49.935,
    "Con cincuenta umbrales, \u00e9psilon cero punto uno y delta cero punto cero cinco, bastan setenta puntos."
   ],
   [
    57.266,
    "El argumento solo us\u00f3 que las hip\u00f3tesis se pueden contar."
   ]
  ]
 },
 "conj": {
  "dur": 66.456,
  "marks": {
   "ex": 3.698,
   "lits": 9.987,
   "pos": 19.714,
   "kill": 23.971,
   "rest": 31.641,
   "neg": 34.675,
   "result": 39.362,
   "count": 49.31,
   "num": 58.151
  },
  "cues": [
   [
    0.102,
    "El teorema sirve para cualquier conjunto finito."
   ],
   [
    3.698,
    "Ahora, cada dato es un vector de seis bits con una etiqueta, positiva o negativa."
   ],
   [
    9.987,
    "El concepto es una conjunci\u00f3n de literales."
   ],
   [
    13.555,
    "Un literal es una variable o su negaci\u00f3n: al principio, los doce son candidatos."
   ],
   [
    19.714,
    "Un ejemplo positivo cumple todos los literales del concepto."
   ],
   [
    23.971,
    "Entonces, donde tiene un cero, se descarta la variable; donde tiene un uno, se descarta su negaci\u00f3n."
   ],
   [
    31.641,
    "Lo mismo con los dem\u00e1s positivos."
   ],
   [
    34.675,
    "Los negativos no se usan: no dicen cu\u00e1l de sus bits falla."
   ],
   [
    39.362,
    "Quedan cuatro literales: no equis uno, equis dos, equis cinco y equis seis."
   ],
   [
    45.938,
    "Su conjunci\u00f3n es consistente con la muestra."
   ],
   [
    49.31,
    "\u00bfCu\u00e1ntas conjunciones hay?"
   ],
   [
    51.615,
    "Cada variable puede aparecer tal cual, negada, o no aparecer: tres elevado a n."
   ],
   [
    58.151,
    "Con diez variables, \u00e9psilon cero punto uno y delta cero punto cero dos, la cota pide ciento cuarenta y nueve ejemplos."
   ]
  ]
 },
 "q1": {
  "dur": 7.248,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Llega otro ejemplo positivo."
   ],
   [
    4.74,
    "\u00bfQu\u00e9 literal se descarta?"
   ]
  ]
 },
 "tamano": {
  "dur": 37.656,
  "marks": {
   "form": 3.815,
   "conj": 8.529,
   "univ": 16.94,
   "exp": 24.323,
   "big": 27.904,
   "not": 33.867
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1nto cuesta un conjunto de hip\u00f3tesis m\u00e1s grande?"
   ],
   [
    3.815,
    "En la cota, el n\u00famero de hip\u00f3tesis entra dentro de un logaritmo."
   ],
   [
    8.529,
    "En las conjunciones, duplicar las variables eleva al cuadrado el n\u00famero de hip\u00f3tesis, pero la muestra necesaria ni siquiera se duplica."
   ],
   [
    16.94,
    "Pero hay un l\u00edmite."
   ],
   [
    18.971,
    "La clase universal contiene todas las maneras de etiquetar los vectores de n bits."
   ],
   [
    24.323,
    "Su logaritmo crece como dos elevado a n."
   ],
   [
    27.904,
    "La muestra necesaria se vuelve exponencial, y el teorema deja de dar una garant\u00eda \u00fatil."
   ],
   [
    33.867,
    "De hecho, esa clase no es PAC-aprendible."
   ]
  ]
 },
 "inconsistente": {
  "dur": 75.792,
  "marks": {
   "c2": 7.747,
   "sample": 11.771,
   "dots": 17.174,
   "true": 22.669,
   "hoef": 26.172,
   "all": 33.047,
   "bound": 42.148,
   "band": 53.359,
   "m200": 55.859,
   "m800": 60.026,
   "price": 62.266,
   "occam": 69.18
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, el concepto era una de las hip\u00f3tesis."
   ],
   [
    4.271,
    "En la pr\u00e1ctica, lo usual es que no lo sea."
   ],
   [
    7.747,
    "Aqu\u00ed el concepto tiene un tramo de ceros entre los unos."
   ],
   [
    11.771,
    "Ning\u00fan umbral acierta en toda la muestra: no hay hip\u00f3tesis consistente."
   ],
   [
    17.174,
    "Aun as\u00ed, cada umbral tiene su error emp\u00edrico: un punto por hip\u00f3tesis."
   ],
   [
    22.669,
    "Y su error de generalizaci\u00f3n: la curva."
   ],
   [
    26.172,
    "Para una hip\u00f3tesis fija, la desigualdad de Hoeffding garantiza que difieren poco, con alta probabilidad."
   ],
   [
    33.047,
    "Pero el algoritmo elige mirando la muestra: hace falta una garant\u00eda para todas a la vez."
   ],
   [
    39.206,
    "De nuevo, la cota de la uni\u00f3n."
   ],
   [
    42.148,
    "Con probabilidad de al menos uno menos delta, para toda hip\u00f3tesis, el error de generalizaci\u00f3n es a lo sumo el error emp\u00edrico m\u00e1s un t\u00e9rmino que depende del n\u00famero de hip\u00f3tesis y de m."
   ],
   [
    53.359,
    "Es el ancho de esta banda."
   ],
   [
    55.859,
    "Con cuatro veces m\u00e1s datos, la banda mide la mitad."
   ],
   [
    60.026,
    "Y otra vez la mitad."
   ],
   [
    62.266,
    "Ese es el precio: la cota ya no baja como uno sobre m, sino como uno sobre la ra\u00edz de m."
   ],
   [
    69.18,
    "Y a igual error emp\u00edrico, conviene el conjunto de hip\u00f3tesis m\u00e1s peque\u00f1o: la navaja de Occam."
   ]
  ]
 },
 "q2": {
  "dur": 5.184,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 hip\u00f3tesis tiene la mejor garant\u00eda?"
   ]
  ]
 },
 "escenarios": {
  "dur": 57.672,
  "marks": {
   "det": 2.826,
   "stoch": 10.638,
   "bayes": 20.898,
   "noise": 28.203,
   "rstar": 35.925,
   "val": 42.005,
   "zero": 45.0,
   "agn": 48.516
  },
  "cues": [
   [
    0.102,
    "Queda un supuesto por revisar."
   ],
   [
    2.826,
    "Hasta ahora, cada punto ten\u00eda una \u00fanica etiqueta, fijada por una funci\u00f3n: es el escenario determinista."
   ],
   [
    10.638,
    "En muchos problemas reales, un mismo punto puede aparecer con cualquiera de las dos etiquetas, cada una con cierta probabilidad: es el escenario estoc\u00e1stico."
   ],
   [
    20.898,
    "Lo mejor que se puede hacer es predecir, en cada punto, la etiqueta m\u00e1s probable: es el clasificador de Bayes."
   ],
   [
    28.203,
    "Aun as\u00ed se equivoca, con la probabilidad de la etiqueta menos probable."
   ],
   [
    33.294,
    "Ese es el ruido en el punto."
   ],
   [
    35.925,
    "El ruido promedio es el error de Bayes: el m\u00ednimo que puede alcanzar cualquier hip\u00f3tesis."
   ],
   [
    42.005,
    "Aqu\u00ed, cero punto dieciocho."
   ],
   [
    45.0,
    "En el escenario determinista, vale cero."
   ],
   [
    48.516,
    "Por eso la definici\u00f3n PAC se adapta: se pide quedar a menos de \u00e9psilon de la mejor hip\u00f3tesis del conjunto."
   ],
   [
    55.312,
    "Es el PAC agn\u00f3stico."
   ]
  ]
 },
 "wrap": {
  "dur": 32.136,
  "marks": {
   "w1": 1.823,
   "w2": 9.583,
   "w3": 15.703,
   "w4": 23.724
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Con un conjunto finito y una hip\u00f3tesis consistente, la muestra necesaria crece con el logaritmo del n\u00famero de hip\u00f3tesis."
   ],
   [
    9.583,
    "La clave es la cota de la uni\u00f3n: una garant\u00eda que vale para todas las hip\u00f3tesis a la vez."
   ],
   [
    15.703,
    "Sin consistencia, el error de generalizaci\u00f3n es a lo sumo el emp\u00edrico m\u00e1s un t\u00e9rmino que baja como uno sobre la ra\u00edz de m."
   ],
   [
    23.724,
    "Con etiquetas aleatorias, ninguna hip\u00f3tesis baja del error de Bayes."
   ],
   [
    28.893,
    "Ahora, la pr\u00e1ctica del cap\u00edtulo."
   ]
  ]
 },
 "final1": {
  "dur": 5.64,
  "marks": {},
  "cues": [
   [
    0.102,
    "Pr\u00e1ctica del cap\u00edtulo."
   ],
   [
    2.396,
    "Para cada frase, elegir el caso."
   ]
  ]
 },
 "final2": {
  "dur": 4.776,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfHasta d\u00f3nde puede bajar el error?"
   ]
  ]
 },
 "finish": {
  "dur": 4.296,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo tres."
   ]
  ]
 }
};

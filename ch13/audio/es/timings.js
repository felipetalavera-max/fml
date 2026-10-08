window.TIMINGS = {
 "intro": {
  "dur": 14.64,
  "marks": {
   "sub": 5.755
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo trece."
   ],
   [
    2.148,
    "Kernels de secuencias y mapas aproximados."
   ],
   [
    5.755,
    "Un kernel tambi\u00e9n puede comparar cadenas de s\u00edmbolos."
   ],
   [
    9.675,
    "Y cuando la muestra es enorme, se puede aproximar con cosenos al azar."
   ]
  ]
 },
 "cad": {
  "dur": 41.448,
  "marks": {
   "x": 9.232,
   "win": 17.617,
   "y": 23.099,
   "prod": 25.43,
   "sum": 28.438,
   "pds": 35.365
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, los kernels comparaban vectores."
   ],
   [
    3.919,
    "Pero muchas veces los datos son secuencias: prote\u00ednas, o textos."
   ],
   [
    9.232,
    "\u00bfC\u00f3mo medir el parecido entre dos cadenas?"
   ],
   [
    12.526,
    "Una idea: mirar los bigramas, los pares de s\u00edmbolos seguidos."
   ],
   [
    17.617,
    "En la primera cadena hay cuatro, y se cuenta cu\u00e1ntas veces aparece cada uno."
   ],
   [
    23.099,
    "Lo mismo en la segunda."
   ],
   [
    25.43,
    "Para cada bigrama se multiplican los dos conteos, y se suma todo."
   ],
   [
    30.299,
    "Da seis: ese es el kernel de bigramas entre las dos cadenas."
   ],
   [
    35.365,
    "Es el producto interno de dos vectores de conteos."
   ],
   [
    39.141,
    "Por eso es PDS."
   ]
  ]
 },
 "trans": {
  "dur": 43.8,
  "marks": {
   "st": 5.456,
   "tr": 6.953,
   "lab": 8.841,
   "ini": 14.779,
   "pair": 22.734,
   "p1": 28.555,
   "p2": 35.052,
   "sum": 38.945
  },
  "cues": [
   [
    0.102,
    "Para definir kernels de este tipo en general se usan transductores ponderados."
   ],
   [
    5.456,
    "Un transductor tiene estados y transiciones."
   ],
   [
    8.841,
    "Cada transici\u00f3n lee un s\u00edmbolo de entrada, escribe uno de salida y lleva un peso."
   ],
   [
    14.779,
    "El c\u00edrculo grueso es el estado inicial."
   ],
   [
    18.138,
    "Los c\u00edrculos dobles son estados finales, con su propio peso."
   ],
   [
    22.734,
    "Dado un par de cadenas, se buscan los caminos que leen la primera y escriben la segunda."
   ],
   [
    28.555,
    "A lo largo del camino se multiplican los pesos, incluido el del estado final: veinticuatro."
   ],
   [
    35.052,
    "Hay un segundo camino, con peso treinta y seis."
   ],
   [
    38.945,
    "El peso del par es la suma sobre todos los caminos: sesenta."
   ]
  ]
 },
 "q1": {
  "dur": 7.512,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "La entrada es b b, y la salida es b a."
   ],
   [
    4.779,
    "\u00bfEn qu\u00e9 estado termina el camino?"
   ]
  ]
 },
 "big": {
  "dur": 37.176,
  "marks": {
   "x": 6.016,
   "loop": 8.333,
   "emit": 12.214,
   "rest": 18.698,
   "all": 22.617,
   "count": 26.732
  },
  "cues": [
   [
    0.102,
    "Este otro transductor cuenta bigramas."
   ],
   [
    3.438,
    "Todos sus pesos valen uno."
   ],
   [
    6.016,
    "Recibe una cadena."
   ],
   [
    8.333,
    "En el estado inicial lee s\u00edmbolos sin escribir nada."
   ],
   [
    12.214,
    "Despu\u00e9s avanza dos pasos, y ah\u00ed copia a la salida los dos s\u00edmbolos que lee: un bigrama."
   ],
   [
    18.698,
    "El resto lo lee, otra vez, sin escribir."
   ],
   [
    22.617,
    "Hay un camino por cada lugar donde puede empezar el bigrama."
   ],
   [
    26.732,
    "Dos de esos caminos escriben a b."
   ],
   [
    29.714,
    "As\u00ed, el peso que el transductor da a una cadena y a un bigrama es el n\u00famero de veces que el bigrama aparece en la cadena."
   ]
  ]
 },
 "pds": {
  "dur": 52.992,
  "marks": {
   "def": 1.86,
   "when": 6.55,
   "inv": 10.794,
   "comp": 17.292,
   "thm": 24.727,
   "z": 29.31,
   "six": 37.552,
   "alg": 41.497
  },
  "cues": [
   [
    0.102,
    "Un kernel de secuencias es racional cuando su valor es el peso que alg\u00fan transductor da al par de cadenas."
   ],
   [
    6.55,
    "\u00bfY cu\u00e1ndo es PDS?"
   ],
   [
    8.828,
    "Hay una receta."
   ],
   [
    10.794,
    "Se toma un transductor cualquiera, T, y su inverso, que intercambia entradas y salidas."
   ],
   [
    17.292,
    "Se componen: lo que escribe el primero es lo que lee el segundo, y se suma sobre todas las cadenas intermedias."
   ],
   [
    24.727,
    "El teorema dice que esa composici\u00f3n siempre es un kernel PDS."
   ],
   [
    29.31,
    "Con el transductor de bigramas, la cadena intermedia recorre los bigramas, y cada uno aporta el producto de los dos conteos."
   ],
   [
    37.552,
    "Da seis: el kernel de bigramas del comienzo."
   ],
   [
    41.497,
    "Y hay un algoritmo general para calcularlo: componer transductores y sumar los pesos de los caminos."
   ],
   [
    48.19,
    "El tiempo es proporcional al producto de los largos de las dos cadenas."
   ]
  ]
 },
 "costo": {
  "dur": 34.008,
  "marks": {
   "gram": 3.021,
   "big": 13.164,
   "exp": 16.979,
   "psi": 26.628
  },
  "cues": [
   [
    0.102,
    "Segunda parte: el costo."
   ],
   [
    3.021,
    "Un algoritmo con kernels eval\u00faa el kernel en cada par de puntos de la muestra."
   ],
   [
    8.268,
    "Con m puntos, la matriz de Gram tiene m al cuadrado valores."
   ],
   [
    13.164,
    "Con cien mil puntos, son diez mil millones."
   ],
   [
    16.979,
    "Con vectores de caracter\u00edsticas expl\u00edcitos alcanzar\u00eda una tabla de m filas."
   ],
   [
    22.448,
    "Pero el mapa del kernel gaussiano tiene dimensi\u00f3n infinita."
   ],
   [
    26.628,
    "La salida es un mapa aproximado, con pocas coordenadas, cuyo producto interno sea casi igual al kernel."
   ]
  ]
 },
 "boch": {
  "dur": 50.376,
  "marks": {
   "shift": 3.867,
   "boch": 12.76,
   "exp": 21.029,
   "p": 29.128,
   "one": 33.398,
   "more": 37.331,
   "ten": 40.43,
   "hun": 44.688,
   "many": 47.331
  },
  "cues": [
   [
    0.102,
    "Para una familia de kernels hay una receta directa."
   ],
   [
    3.867,
    "Son los invariantes por traslaci\u00f3n: solo dependen de la diferencia entre los dos puntos."
   ],
   [
    9.857,
    "El gaussiano es uno de ellos."
   ],
   [
    12.76,
    "El teorema de Bochner dice que un kernel as\u00ed es PDS exactamente cuando es la transformada de Fourier de una medida no negativa."
   ],
   [
    21.029,
    "Dicho de otro modo: el kernel es la esperanza de un coseno, cuya frecuencia omega se sortea con una distribuci\u00f3n p."
   ],
   [
    29.128,
    "Para el kernel gaussiano, p es tambi\u00e9n una gaussiana."
   ],
   [
    33.398,
    "Se sortea una frecuencia: sale un coseno."
   ],
   [
    37.331,
    "Se sortean m\u00e1s, y se promedian."
   ],
   [
    40.43,
    "Con diez cosenos, el promedio ya insin\u00faa la campana."
   ],
   [
    44.688,
    "Con cien, se le acerca."
   ],
   [
    47.331,
    "Con mil, casi no se distinguen."
   ]
  ]
 },
 "q2": {
  "dur": 7.176,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres promedios de cosenos al azar."
   ],
   [
    4.831,
    "\u00bfCu\u00e1l usa m\u00e1s cosenos?"
   ]
  ]
 },
 "conc": {
  "dur": 42.0,
  "marks": {
   "psi": 3.19,
   "dot": 9.622,
   "err": 17.526,
   "down": 23.398,
   "thm": 26.51,
   "use": 33.997
  },
  "cues": [
   [
    0.102,
    "Esos cosenos se guardan en un vector."
   ],
   [
    3.19,
    "Por cada frecuencia sorteada lleva dos coordenadas: el coseno y el seno de omega por x."
   ],
   [
    9.622,
    "El producto interno de dos de estos vectores es, justamente, el promedio de cosenos: aproxima al kernel."
   ],
   [
    17.526,
    "\u00bfQu\u00e9 tan bien?"
   ],
   [
    19.258,
    "Cada punto es el error m\u00e1ximo de un sorteo distinto."
   ],
   [
    23.398,
    "Al crecer D, el error baja."
   ],
   [
    26.51,
    "Y el teorema lo garantiza: la probabilidad de que el error supere \u00e9psilon, en alg\u00fan par de puntos, decrece exponencialmente con D."
   ],
   [
    33.997,
    "Con ese vector alcanza una SVM lineal, y la tabla ya no tiene m al cuadrado valores, sino m por dos D."
   ]
  ]
 },
 "wrap": {
  "dur": 32.928,
  "marks": {
   "w1": 1.823,
   "w2": 7.578,
   "w3": 14.948,
   "w4": 22.917
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un kernel tambi\u00e9n compara cadenas: el de bigramas multiplica conteos y suma."
   ],
   [
    7.578,
    "Un transductor ponderado da a cada par de cadenas la suma, sobre sus caminos, del producto de los pesos."
   ],
   [
    14.948,
    "Un kernel racional es el que define un transductor, y es PDS si ese transductor es la composici\u00f3n de otro con su inverso."
   ],
   [
    22.917,
    "Y un kernel invariante por traslaci\u00f3n es un promedio de cosenos: con D frecuencias al azar se aproxima, mejor cuanto mayor es D."
   ],
   [
    29.935,
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
  "dur": 4.248,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo trece."
   ]
  ]
 }
};

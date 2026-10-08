window.TIMINGS = {
 "intro": {
  "dur": 12.216,
  "marks": {
   "sub": 5.742
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veinte."
   ],
   [
    2.188,
    "Multiclase agregado y predicci\u00f3n estructurada."
   ],
   [
    5.742,
    "Varias clases, resueltas con clasificadores binarios; y salidas que tienen estructura."
   ]
  ]
 },
 "ova": {
  "dur": 51.672,
  "marks": {
   "c1": 8.359,
   "c2": 13.789,
   "c3": 15.26,
   "amb": 17.591,
   "arg": 28.008,
   "cal": 32.969,
   "same": 40.352,
   "cost": 47.956
  },
  "cues": [
   [
    0.102,
    "El cap\u00edtulo anterior resolv\u00eda todas las clases en un solo problema."
   ],
   [
    4.753,
    "Otra v\u00eda es reducirlo a problemas binarios."
   ],
   [
    8.359,
    "La t\u00e9cnica uno contra todos entrena un clasificador por clase: la uno contra el resto, la dos contra el resto, y la tres contra el resto."
   ],
   [
    17.591,
    "Juntos dejan zonas ambiguas: en unas, ninguno dice s\u00ed; en otras, dicen s\u00ed dos a la vez."
   ],
   [
    24.987,
    "Cuatro puntos de la muestra caen ah\u00ed."
   ],
   [
    28.008,
    "Por eso se comparan las puntuaciones, y se predice la clase de la mayor."
   ],
   [
    32.969,
    "Pero cada una se aprendi\u00f3 por separado, y nada asegura que sean comparables: es el problema de calibraci\u00f3n."
   ],
   [
    40.352,
    "Si la primera se multiplica por cuatro, su clasificador binario no cambia, y la predicci\u00f3n cambia en dos puntos."
   ],
   [
    47.956,
    "El costo: k clasificadores binarios."
   ]
  ]
 },
 "ovo": {
  "dur": 49.128,
  "marks": {
   "d1": 8.268,
   "d2": 9.896,
   "d3": 11.458,
   "n": 13.841,
   "vote": 19.375,
   "tie": 23.815,
   "cal": 26.797,
   "data": 31.576,
   "tr": 35.703,
   "te": 44.323
  },
  "cues": [
   [
    0.102,
    "La alternativa es uno contra uno: un clasificador por cada par de clases, entrenado solo con los puntos de ese par."
   ],
   [
    8.268,
    "La uno contra la dos, la uno contra la tres, y la dos contra la tres."
   ],
   [
    13.841,
    "Son k por k menos uno sobre dos: con diez clases, cuarenta y cinco."
   ],
   [
    19.375,
    "Cada duelo da un voto, y gana la clase con m\u00e1s votos."
   ],
   [
    23.815,
    "Solo en este tri\u00e1ngulo hay empate."
   ],
   [
    26.797,
    "Aqu\u00ed no se comparan puntuaciones: no hay problema de calibraci\u00f3n."
   ],
   [
    31.576,
    "A cambio, cada clasificador ve menos datos."
   ],
   [
    35.703,
    "Por eso, si el costo de entrenar crece como el cuadrado de la muestra, como en una SVM, uno contra uno resulta m\u00e1s barato."
   ],
   [
    44.323,
    "Al predecir, en cambio, eval\u00faa m\u00e1s clasificadores."
   ]
  ]
 },
 "q1": {
  "dur": 10.104,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntos nuevos, cada uno con el resultado de sus tres duelos."
   ],
   [
    6.875,
    "\u00bfEn cu\u00e1l gana la votaci\u00f3n la clase tres?"
   ]
  ]
 },
 "ecoc": {
  "dur": 38.952,
  "marks": {
   "mat": 6.25,
   "word": 11.862,
   "col": 15.43,
   "x": 21.562,
   "cmp": 27.266,
   "min": 33.763
  },
  "cues": [
   [
    0.102,
    "Las dos t\u00e9cnicas son casos de una idea m\u00e1s general: los c\u00f3digos correctores de errores."
   ],
   [
    6.25,
    "Una matriz, con una fila por clase y una columna por clasificador binario."
   ],
   [
    11.862,
    "Cada fila es la palabra de c\u00f3digo de su clase."
   ],
   [
    15.43,
    "Cada columna define un problema binario: las clases con m\u00e1s uno, contra las dem\u00e1s."
   ],
   [
    21.562,
    "Para un punto nuevo, los seis clasificadores responden, y forman una palabra."
   ],
   [
    27.266,
    "Se la compara con cada fila, contando las posiciones en que difieren: la distancia de Hamming."
   ],
   [
    33.763,
    "Se predice la clase m\u00e1s cercana: aqu\u00ed la tres, a distancia uno."
   ]
  ]
 },
 "ecoc2": {
  "dur": 42.936,
  "marks": {
   "code": 2.76,
   "flip": 10.221,
   "near": 14.701,
   "two": 21.328,
   "ova": 28.958,
   "ovo": 35.99
  },
  "cues": [
   [
    0.102,
    "\u00bfPor qu\u00e9 correctores de errores?"
   ],
   [
    2.76,
    "En este otro c\u00f3digo, de cuatro clases y siete columnas, dos filas cualesquiera difieren en cuatro posiciones."
   ],
   [
    10.221,
    "Si un clasificador se equivoca con un punto de la clase uno, cambia un bit, y la palabra sigue m\u00e1s cerca de su fila: a distancia uno, contra tres o m\u00e1s de las otras."
   ],
   [
    21.328,
    "En general, con distancia m\u00ednima d se corrigen hasta la parte entera de d menos uno, sobre dos, errores."
   ],
   [
    28.958,
    "Uno contra todos es el c\u00f3digo con m\u00e1s uno en la diagonal: distancia m\u00ednima dos, no corrige ninguno."
   ],
   [
    35.99,
    "Uno contra uno agrega un tercer s\u00edmbolo, el cero, para las clases que no participan en cada duelo."
   ]
  ]
 },
 "q2": {
  "dur": 9.288,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El mismo c\u00f3digo de cuatro clases."
   ],
   [
    4.87,
    "Llega esta palabra."
   ],
   [
    7.057,
    "\u00bfQu\u00e9 clase se predice?"
   ]
  ]
 },
 "estr": {
  "dur": 40.68,
  "marks": {
   "tags": 7.565,
   "lab": 13.893,
   "count": 17.526,
   "big": 21.393,
   "dep": 24.779,
   "loss": 30.768,
   "ham": 32.617
  },
  "cues": [
   [
    0.102,
    "Hay problemas donde la salida no es una clase suelta, sino un objeto con estructura: una secuencia, un \u00e1rbol."
   ],
   [
    7.565,
    "Por ejemplo, etiquetar cada palabra de una oraci\u00f3n como sustantivo, verbo o adjetivo."
   ],
   [
    13.893,
    "La etiqueta de la oraci\u00f3n es la secuencia completa."
   ],
   [
    17.526,
    "Con cinco palabras hay doscientas cuarenta y tres secuencias posibles; con veinte, m\u00e1s de tres mil millones."
   ],
   [
    24.779,
    "Adem\u00e1s, las partes dependen entre s\u00ed: dos verbos seguidos son poco probables."
   ],
   [
    30.768,
    "Y no todo error pesa igual: la p\u00e9rdida suele ser la distancia de Hamming, el n\u00famero de etiquetas equivocadas."
   ],
   [
    38.242,
    "Aqu\u00ed, una de cinco."
   ]
  ]
 },
 "viterbi": {
  "dur": 46.776,
  "marks": {
   "phi": 3.398,
   "fac": 9.648,
   "e": 14.661,
   "t": 17.383,
   "dp": 20.69,
   "col": 25.469,
   "back": 31.393,
   "best": 34.753,
   "ops": 41.823
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se predice entre tantas secuencias?"
   ],
   [
    3.398,
    "La hip\u00f3tesis punt\u00faa cada par de entrada y salida, y predice la salida de mayor puntuaci\u00f3n."
   ],
   [
    9.648,
    "La clave: las caracter\u00edsticas se descomponen en factores locales."
   ],
   [
    14.661,
    "Cu\u00e1nto le queda cada etiqueta a cada palabra, y cu\u00e1nto se llevan dos etiquetas vecinas."
   ],
   [
    20.69,
    "Entonces el m\u00e1ximo sale por programaci\u00f3n din\u00e1mica, con el algoritmo de Viterbi: columna por columna, cada nodo guarda la mejor puntuaci\u00f3n de un camino que llega hasta \u00e9l."
   ],
   [
    31.393,
    "Al final se vuelve atr\u00e1s desde el mejor nodo."
   ],
   [
    34.753,
    "El mejor camino suma diecinueve: lee vino como sustantivo, aunque por s\u00ed sola puntuaba m\u00e1s como verbo."
   ],
   [
    41.823,
    "Treinta y seis sumas, en lugar de doscientas cuarenta y tres secuencias."
   ]
  ]
 },
 "alg": {
  "dur": 38.64,
  "marks": {
   "svm": 4.219,
   "m3n": 10.052,
   "bar": 14.115,
   "poly": 19.531,
   "st": 24.466,
   "crf": 30.638
  },
  "cues": [
   [
    0.102,
    "Para aprender w se adapta la SVM multiclase."
   ],
   [
    4.219,
    "All\u00ed, la salida correcta deb\u00eda superar a cada una de las otras por un margen de uno."
   ],
   [
    10.052,
    "Las redes de Markov de margen m\u00e1ximo cambian ese uno por la p\u00e9rdida: cuantas m\u00e1s etiquetas equivocadas tiene una secuencia, m\u00e1s margen se le exige."
   ],
   [
    19.531,
    "Con salidas en cadena o en \u00e1rbol, se resuelve en tiempo polinomial."
   ],
   [
    24.466,
    "La SVM estructural, en cambio, multiplica la violaci\u00f3n del margen por la p\u00e9rdida."
   ],
   [
    30.638,
    "Y los campos aleatorios condicionales reemplazan el m\u00e1ximo por una versi\u00f3n suave: el logaritmo de una suma de exponenciales."
   ]
  ]
 },
 "wrap": {
  "dur": 32.376,
  "marks": {
   "w1": 1.823,
   "w2": 9.479,
   "w3": 14.518,
   "w4": 20.716
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Uno contra todos entrena k clasificadores y predice la mayor puntuaci\u00f3n, aunque las puntuaciones pueden no ser comparables."
   ],
   [
    9.479,
    "Uno contra uno entrena uno por par de clases, y decide por votos."
   ],
   [
    14.518,
    "Los dos son c\u00f3digos correctores de errores: se predice la clase de la palabra m\u00e1s cercana."
   ],
   [
    20.716,
    "En predicci\u00f3n estructurada hay exponencialmente muchas salidas, pero los factores locales permiten hallar la mejor con programaci\u00f3n din\u00e1mica."
   ],
   [
    29.141,
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
  "dur": 4.296,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veinte."
   ]
  ]
 }
};

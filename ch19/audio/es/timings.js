window.TIMINGS = {
 "intro": {
  "dur": 11.904,
  "marks": {
   "sub": 6.888
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo diecinueve."
   ],
   [
    2.396,
    "Clasificaci\u00f3n multiclase: cotas y algoritmos directos."
   ],
   [
    6.888,
    "Con m\u00e1s de dos clases cambian el margen, la cota y los algoritmos."
   ]
  ]
 },
 "prob": {
  "dur": 40.344,
  "marks": {
   "k": 3.945,
   "mono": 10.378,
   "multi": 16.198,
   "dif": 22.318,
   "d2": 27.63,
   "d3": 33.529
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, toda la clasificaci\u00f3n fue binaria."
   ],
   [
    3.945,
    "En la pr\u00e1ctica suele haber m\u00e1s clases: el tema de un documento, la palabra dicha en un audio."
   ],
   [
    10.378,
    "En el caso mono-etiqueta, cada punto lleva una sola clase, de k posibles."
   ],
   [
    16.198,
    "En el multi-etiqueta puede llevar varias: un documento de deportes y de negocios a la vez."
   ],
   [
    22.318,
    "Hay dificultades propias: el n\u00famero de clases entra en el costo de c\u00f3mputo."
   ],
   [
    27.63,
    "Las clases pueden estar desbalanceadas: algunas, con muy pocos ejemplos."
   ],
   [
    33.529,
    "Y puede haber jerarqu\u00edas: confundir b\u00e9isbol con deportes es menos grave que confundirlo con pol\u00edtica."
   ]
  ]
 },
 "marg": {
  "dur": 52.488,
  "marks": {
   "sc": 3.542,
   "probe": 8.568,
   "arg": 13.125,
   "reg": 16.341,
   "mg": 21.497,
   "p1": 27.552,
   "p2": 34.232,
   "p3": 39.896,
   "err": 48.125
  },
  "cues": [
   [
    0.102,
    "En binario bastaba el signo de una funci\u00f3n."
   ],
   [
    3.542,
    "Ahora, la hip\u00f3tesis da una puntuaci\u00f3n a cada par de punto y clase."
   ],
   [
    8.568,
    "Para este punto, tres puntuaciones: una barra por clase."
   ],
   [
    13.125,
    "Se predice la clase de mayor puntuaci\u00f3n."
   ],
   [
    16.341,
    "Al recorrer el plano, la ganadora cambia, y quedan tres regiones."
   ],
   [
    21.497,
    "El margen de un punto etiquetado es la puntuaci\u00f3n de su clase, menos la mayor de las otras."
   ],
   [
    27.552,
    "Este punto, de la clase uno, queda lejos de la frontera: margen tres punto cuarenta y uno."
   ],
   [
    34.232,
    "Este, de la clase dos, pasa por poco: cero punto noventa y dos."
   ],
   [
    39.896,
    "Y este, de la clase uno, cay\u00f3 en la regi\u00f3n de la dos: su margen es negativo, menos uno punto noventa y tres."
   ],
   [
    48.125,
    "La hip\u00f3tesis se equivoca justo cuando el margen no es positivo."
   ]
  ]
 },
 "q1": {
  "dur": 10.32,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntos nuevos, cada uno con su clase verdadera y sus tres puntuaciones."
   ],
   [
    7.617,
    "\u00bfEn cu\u00e1l el margen es negativo?"
   ]
  ]
 },
 "cota": {
  "dur": 47.256,
  "marks": {
   "bin": 4.948,
   "thm": 13.073,
   "k": 15.378,
   "pi": 20.885,
   "ker": 25.755,
   "b1": 30.924,
   "b2": 35.534,
   "b3": 38.919,
   "need": 42.943
  },
  "cues": [
   [
    0.102,
    "Con ese margen, la cota del cap\u00edtulo diez se repite casi igual."
   ],
   [
    4.948,
    "En binario era la p\u00e9rdida de margen emp\u00edrica, m\u00e1s dos sobre ro por la complejidad de Rademacher, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    13.073,
    "En multiclase, el mismo esquema, con una diferencia: el t\u00e9rmino de complejidad lleva el factor cuatro k sobre ro."
   ],
   [
    20.885,
    "Y la complejidad es la de las funciones de puntuaci\u00f3n, con la clase fija."
   ],
   [
    25.755,
    "Con kernels, ese t\u00e9rmino queda proporcional a k sobre la ra\u00edz de m."
   ],
   [
    30.924,
    "Con diez mil ejemplos y tres clases, vale cero punto doce."
   ],
   [
    35.534,
    "Con diez clases, cero punto cuarenta."
   ],
   [
    38.919,
    "Con cien, cuatro: la cota ya no dice nada."
   ],
   [
    42.943,
    "M\u00e1s clases piden m\u00e1s datos, o m\u00e1rgenes m\u00e1s grandes."
   ]
  ]
 },
 "svm": {
  "dur": 43.776,
  "marks": {
   "w": 3.073,
   "obj": 7.383,
   "con": 15.651,
   "xi": 23.659,
   "s1": 29.089,
   "s2": 35.182,
   "size": 38.776
  },
  "cues": [
   [
    0.102,
    "De esa cota sale un algoritmo."
   ],
   [
    3.073,
    "La SVM multiclase aprende un vector de pesos por clase."
   ],
   [
    7.383,
    "Como en la binaria, se minimiza la norma de los pesos, ahora sumada sobre las clases, m\u00e1s C por la suma de las holguras."
   ],
   [
    15.651,
    "La restricci\u00f3n: la puntuaci\u00f3n de la clase correcta debe superar a la de cada una de las otras por al menos uno, salvo la holgura."
   ],
   [
    23.659,
    "Entonces, la holgura de un punto es lo que le falta a su margen para llegar a uno."
   ],
   [
    29.089,
    "Aqu\u00ed, solo dos puntos la necesitan: el mal clasificado, con dos punto noventa y tres, y este otro, con cero punto cero ocho."
   ],
   [
    38.776,
    "Es un solo problema cuadr\u00e1tico, pero su tama\u00f1o crece con m por k."
   ]
  ]
 },
 "boost": {
  "dur": 44.016,
  "marks": {
   "split": 4.909,
   "row": 11.901,
   "sp": 16.784,
   "ada": 20.729,
   "base": 27.513,
   "miss": 34.727,
   "cost": 39.961
  },
  "cues": [
   [
    0.102,
    "El boosting tambi\u00e9n tiene su versi\u00f3n multiclase: AdaBoost eme hache."
   ],
   [
    4.909,
    "Cada punto se parte en k ejemplos binarios, uno por clase, que preguntan: \u00bfes de esta clase?"
   ],
   [
    11.901,
    "La respuesta es m\u00e1s uno para la suya, y menos uno para las dem\u00e1s."
   ],
   [
    16.784,
    "De dieciocho puntos salen cincuenta y cuatro ejemplos."
   ],
   [
    20.729,
    "Sobre esa muestra se corre el AdaBoost de siempre, con una distribuci\u00f3n sobre los pares de punto y clase."
   ],
   [
    27.513,
    "Aqu\u00ed, el primer clasificador base corta el plano y dice, de cada lado, s\u00ed o no a cada clase."
   ],
   [
    34.727,
    "Falla doce de los cincuenta y cuatro pares, y esos pasan a pesar m\u00e1s."
   ],
   [
    39.961,
    "El costo es el de AdaBoost con m por k ejemplos."
   ]
  ]
 },
 "arbol": {
  "dur": 53.64,
  "marks": {
   "root": 3.958,
   "q1": 11.094,
   "leaf": 17.812,
   "q2": 23.424,
   "q3": 28.438,
   "zero": 32.07,
   "over": 39.414,
   "g": 42.591,
   "prune": 47.956
  },
  "cues": [
   [
    0.102,
    "El tercer algoritmo directo es el \u00e1rbol de decisi\u00f3n."
   ],
   [
    3.958,
    "Se empieza con un solo nodo: una hoja con la clase mayoritaria, que falla once de dieciocho puntos."
   ],
   [
    11.094,
    "Se la parte con una pregunta sobre una coordenada: \u00bfequis dos es menor que cuatro punto setenta y cinco?"
   ],
   [
    17.812,
    "Cada respuesta lleva a una hoja nueva, con la etiqueta de la mayor\u00eda de su regi\u00f3n."
   ],
   [
    23.424,
    "Otra pregunta separa la clase uno de la dos, y queda un solo error."
   ],
   [
    28.438,
    "Para aislarlo hacen falta dos preguntas m\u00e1s."
   ],
   [
    32.07,
    "Cinco hojas, cero errores, y una franja entera para un solo punto: un \u00e1rbol grande sobreajusta."
   ],
   [
    39.414,
    "Por eso se lo hace crecer y despu\u00e9s se poda."
   ],
   [
    42.591,
    "Se minimiza la impureza de las hojas, m\u00e1s lambda por el n\u00famero de hojas."
   ],
   [
    47.956,
    "Con lambda igual a uno, conviene colapsar esa rama: tres hojas y un error."
   ]
  ]
 },
 "impur": {
  "dur": 52.68,
  "marks": {
   "imp": 6.875,
   "f1": 13.125,
   "f2": 14.922,
   "f3": 15.846,
   "gain": 21.068,
   "sweep": 28.828,
   "best": 33.151,
   "stuck": 38.268,
   "pref": 48.047
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se elige cada pregunta?"
   ],
   [
    2.982,
    "De forma voraz: la que m\u00e1s baja la impureza."
   ],
   [
    6.875,
    "La impureza de un nodo mide cu\u00e1n mezcladas est\u00e1n sus clases."
   ],
   [
    11.328,
    "Hay tres medidas usuales: el error de clasificaci\u00f3n, la entrop\u00eda, y el \u00edndice de Gini."
   ],
   [
    17.995,
    "Las tres valen cero en un nodo puro."
   ],
   [
    21.068,
    "La baja de un corte es la impureza del nodo, menos el promedio de las de sus dos hijos, ponderado por sus tama\u00f1os."
   ],
   [
    28.828,
    "Se prueban todos los cortes, en las dos coordenadas."
   ],
   [
    33.151,
    "En la ra\u00edz gana este: el \u00edndice de Gini baja cero punto treinta."
   ],
   [
    38.268,
    "Pero en este otro nodo, ning\u00fan corte baja el error de clasificaci\u00f3n; el \u00edndice de Gini, en cambio, baja un poco, y el \u00e1rbol puede seguir."
   ],
   [
    48.047,
    "Por eso, en la pr\u00e1ctica, se prefieren Gini y la entrop\u00eda."
   ]
  ]
 },
 "q2": {
  "dur": 7.392,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres cortes posibles para la ra\u00edz."
   ],
   [
    4.922,
    "\u00bfCu\u00e1l baja m\u00e1s la impureza?"
   ]
  ]
 },
 "wrap": {
  "dur": 31.8,
  "marks": {
   "w1": 1.823,
   "w2": 7.526,
   "w3": 14.661,
   "w4": 22.031
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "En multiclase, la hip\u00f3tesis da una puntuaci\u00f3n por clase, y predice la mayor."
   ],
   [
    7.526,
    "El margen compara la clase correcta con la mejor de las otras, y la cota de generalizaci\u00f3n paga un factor k."
   ],
   [
    14.661,
    "La SVM multiclase y AdaBoost eme hache resuelven un solo problema, cuyo tama\u00f1o crece con m por k."
   ],
   [
    22.031,
    "Un \u00e1rbol de decisi\u00f3n parte el espacio con preguntas elegidas de forma voraz, y despu\u00e9s se poda."
   ],
   [
    28.555,
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
  "dur": 4.512,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo diecinueve."
   ]
  ]
 }
};

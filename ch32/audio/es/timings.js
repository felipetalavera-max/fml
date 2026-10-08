window.TIMINGS = {
 "intro": {
  "dur": 9.096,
  "marks": {
   "sub": 5.104
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta y dos."
   ],
   [
    2.461,
    "Identificaci\u00f3n en el l\u00edmite."
   ],
   [
    5.104,
    "Acertar tarde o temprano, y no cambiar m\u00e1s."
   ]
  ]
 },
 "lim": {
  "dur": 68.064,
  "marks": {
   "tape": 3.477,
   "h1": 10.286,
   "h2": 14.336,
   "h3": 17.396,
   "h4": 20.13,
   "h5": 24.609,
   "h7": 28.099,
   "stay": 31.706,
   "pres": 34.701,
   "def": 42.409,
   "real": 50.091,
   "neg": 56.471
  },
  "cues": [
   [
    0.102,
    "Otro escenario para aprender aut\u00f3matas."
   ],
   [
    3.477,
    "El aprendiz recibe, una por una, cadenas del lenguaje objetivo: solo ejemplos positivos."
   ],
   [
    10.286,
    "Despu\u00e9s de cada una, propone una hip\u00f3tesis."
   ],
   [
    14.336,
    "Con la segunda cadena, la cambia."
   ],
   [
    17.396,
    "Con la tercera, otra vez."
   ],
   [
    20.13,
    "Con la cuarta no cambia, pero todav\u00eda no es el objetivo."
   ],
   [
    24.609,
    "Con la quinta y la sexta, cambia de nuevo."
   ],
   [
    28.099,
    "En la ronda siete, la hip\u00f3tesis ya es el lenguaje objetivo, y las cadenas que siguen no la cambian."
   ],
   [
    34.701,
    "Una presentaci\u00f3n positiva de un lenguaje es una sucesi\u00f3n infinita en la que aparecen todas sus cadenas, y solo ellas."
   ],
   [
    42.409,
    "El algoritmo identifica el lenguaje en el l\u00edmite si existe una ronda a partir de la cual su hip\u00f3tesis es siempre ese lenguaje."
   ],
   [
    50.091,
    "El marco no acota el n\u00famero de ejemplos ni el costo del algoritmo: por eso es menos realista."
   ],
   [
    56.471,
    "Y tambi\u00e9n aqu\u00ed hay un resultado negativo."
   ],
   [
    59.779,
    "Teorema diecis\u00e9is punto seis: los aut\u00f3matas deterministas no son identificables en el l\u00edmite a partir de ejemplos positivos."
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
    "Otra presentaci\u00f3n del mismo lenguaje."
   ],
   [
    4.987,
    "\u00bfDesde qu\u00e9 ronda la hip\u00f3tesis ya no cambia?"
   ]
  ]
 },
 "rev": {
  "dur": 55.56,
  "marks": {
   "rev": 7.617,
   "mir": 17.682,
   "def": 21.706,
   "bad": 28.516,
   "good": 34.596,
   "one": 45.742,
   "lang": 50.925
  },
  "cues": [
   [
    0.102,
    "Algunas subclases s\u00ed se pueden identificar en el l\u00edmite."
   ],
   [
    4.05,
    "Aqu\u00ed, la de los aut\u00f3matas reversibles."
   ],
   [
    7.617,
    "El reverso de un aut\u00f3mata se obtiene as\u00ed: el estado inicial pasa a ser final, los finales pasan a ser iniciales, y cada transici\u00f3n cambia de sentido."
   ],
   [
    17.682,
    "Acepta las mismas cadenas, le\u00eddas al rev\u00e9s."
   ],
   [
    21.706,
    "Definici\u00f3n diecis\u00e9is punto siete: un aut\u00f3mata es reversible si \u00e9l y su reverso son deterministas."
   ],
   [
    28.516,
    "Este no lo es: en el reverso, de un mismo estado salen dos transiciones con b."
   ],
   [
    34.596,
    "Este otro s\u00ed."
   ],
   [
    36.628,
    "Cada flecha doble son dos transiciones opuestas con el mismo s\u00edmbolo."
   ],
   [
    41.354,
    "Acepta las cadenas con un n\u00famero par de a y un n\u00famero par de b."
   ],
   [
    45.742,
    "Una consecuencia: un aut\u00f3mata reversible tiene un \u00fanico estado final."
   ],
   [
    50.925,
    "Y un lenguaje es reversible si lo acepta alg\u00fan aut\u00f3mata reversible."
   ]
  ]
 },
 "pt": {
  "dur": 50.04,
  "marks": {
   "tree": 9.18,
   "grow": 16.029,
   "cnt": 21.615,
   "part": 29.688,
   "merge": 34.076,
   "quo": 39.701
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se infiere un aut\u00f3mata a partir de cadenas?"
   ],
   [
    3.828,
    "La mayor\u00eda de los algoritmos sigue un mismo esquema: la partici\u00f3n de estados."
   ],
   [
    9.18,
    "Se parte de un \u00e1rbol que acepta exactamente las cadenas de la muestra: el aut\u00f3mata \u00e1rbol de prefijos."
   ],
   [
    16.029,
    "Cada cadena dibuja su camino desde la ra\u00edz, y termina en un estado final."
   ],
   [
    21.615,
    "Con la muestra de la figura diecis\u00e9is punto siete del libro, de siete cadenas, salen quince estados: uno por prefijo."
   ],
   [
    29.688,
    "Se empieza con la partici\u00f3n trivial: cada estado es un bloque."
   ],
   [
    34.076,
    "En cada iteraci\u00f3n se fusionan bloques, hasta que no queda ninguna fusi\u00f3n posible."
   ],
   [
    39.701,
    "La partici\u00f3n final define el aut\u00f3mata inferido, el cociente: cada bloque es un estado, y hay una transici\u00f3n entre dos bloques si la hay entre dos de sus estados."
   ]
  ]
 },
 "merge": {
  "dur": 49.848,
  "marks": {
   "fin": 4.74,
   "n9": 13.32,
   "succ": 15.586,
   "pred": 27.253,
   "rest": 38.151,
   "end": 42.396
  },
  "cues": [
   [
    0.102,
    "El algoritmo para aut\u00f3matas reversibles fusiona por tres motivos."
   ],
   [
    4.74,
    "Primero: un aut\u00f3mata reversible tiene un \u00fanico estado final."
   ],
   [
    9.479,
    "Los siete estados finales se funden en un solo bloque."
   ],
   [
    13.32,
    "Quedan nueve bloques."
   ],
   [
    15.586,
    "Segundo motivo: de ese bloque salen dos transiciones con a, hacia dos estados distintos."
   ],
   [
    22.188,
    "El cociente no ser\u00eda determinista: esos dos estados se fusionan."
   ],
   [
    27.253,
    "Tercero: a un mismo bloque llegan dos transiciones con a, desde dos estados distintos."
   ],
   [
    33.633,
    "El reverso no ser\u00eda determinista: tambi\u00e9n se fusionan."
   ],
   [
    38.151,
    "Cada fusi\u00f3n puede crear violaciones nuevas, y se atienden una por una, hasta que no queda ninguna."
   ],
   [
    44.792,
    "En total, once fusiones."
   ],
   [
    47.578,
    "Quedan cuatro bloques."
   ]
  ]
 },
 "q2": {
  "dur": 9.912,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Una muestra de dos cadenas, con los estados finales ya fusionados."
   ],
   [
    6.953,
    "\u00bfQu\u00e9 estado se fusiona con el cero?"
   ]
  ]
 },
 "quo": {
  "dur": 38.664,
  "marks": {
   "blocks": 3.62,
   "edges": 6.862,
   "same": 9.857,
   "p": 14.948,
   "t": 21.836,
   "cost": 30.391
  },
  "cues": [
   [
    0.102,
    "La partici\u00f3n final da el aut\u00f3mata cociente."
   ],
   [
    3.62,
    "Cuatro bloques, cuatro estados."
   ],
   [
    6.862,
    "Las transiciones se heredan del \u00e1rbol."
   ],
   [
    9.857,
    "Es el aut\u00f3mata reversible de antes: el de las cadenas con un n\u00famero par de a y de b."
   ],
   [
    14.948,
    "Proposici\u00f3n diecis\u00e9is punto nueve: la partici\u00f3n final es la m\u00e1s fina para la cual el cociente es reversible."
   ],
   [
    21.836,
    "Teorema diecis\u00e9is punto diez: el lenguaje del aut\u00f3mata que devuelve el algoritmo es el menor lenguaje reversible que contiene la muestra."
   ],
   [
    30.391,
    "Y es r\u00e1pido: con una estructura de conjuntos disjuntos, el costo es casi lineal en la suma de los largos de las cadenas."
   ]
  ]
 },
 "thm": {
  "dur": 43.416,
  "marks": {
   "sl": 3.763,
   "six": 15.521,
   "N": 19.01,
   "after": 27.057,
   "t": 34.453
  },
  "cues": [
   [
    0.102,
    "Falta ver por qu\u00e9 esto identifica en el l\u00edmite."
   ],
   [
    3.763,
    "Proposici\u00f3n diecis\u00e9is punto ocho: todo lenguaje reversible tiene una muestra caracter\u00edstica finita."
   ],
   [
    10.729,
    "Un lenguaje reversible que la contiene, contiene al lenguaje entero."
   ],
   [
    15.521,
    "Para el del ejemplo, son seis cadenas."
   ],
   [
    19.01,
    "Como la presentaci\u00f3n muestra todas las cadenas del lenguaje, en alguna ronda ya aparecieron las seis: aqu\u00ed, en la s\u00e9ptima."
   ],
   [
    27.057,
    "Desde ah\u00ed, el menor lenguaje reversible que contiene lo visto es el objetivo, y la hip\u00f3tesis no cambia m\u00e1s."
   ],
   [
    34.453,
    "Teorema diecis\u00e9is punto once: el algoritmo identifica en el l\u00edmite cualquier lenguaje reversible, a partir de una presentaci\u00f3n positiva."
   ]
  ]
 },
 "wrap": {
  "dur": 32.688,
  "marks": {
   "w1": 1.823,
   "w2": 9.336,
   "w3": 15.729,
   "w4": 21.615
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Identificar en el l\u00edmite: tras un n\u00famero finito de ejemplos, la hip\u00f3tesis es el objetivo y no cambia m\u00e1s."
   ],
   [
    9.336,
    "Con ejemplos solo positivos, los aut\u00f3matas deterministas no son identificables en el l\u00edmite."
   ],
   [
    15.729,
    "Los reversibles s\u00ed: son aquellos en que el aut\u00f3mata y su reverso son deterministas."
   ],
   [
    21.615,
    "El algoritmo arma el \u00e1rbol de prefijos y fusiona estados: devuelve el menor lenguaje reversible que contiene la muestra."
   ],
   [
    29.453,
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
  "dur": 4.896,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una pregunta sobre el algoritmo."
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
    "Ese fue el cap\u00edtulo treinta y dos."
   ]
  ]
 }
};

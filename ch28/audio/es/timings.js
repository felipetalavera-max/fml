window.TIMINGS = {
 "intro": {
  "dur": 10.344,
  "marks": {
   "sub": 4.909
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintiocho."
   ],
   [
    2.357,
    "Estabilidad algor\u00edtmica."
   ],
   [
    4.909,
    "Garant\u00edas que dependen del algoritmo, y no solo del conjunto de hip\u00f3tesis."
   ]
  ]
 },
 "motiv": {
  "dur": 36.048,
  "marks": {
   "any": 8.737,
   "alg": 14.935,
   "loss": 23.464,
   "prop": 29.245
  },
  "cues": [
   [
    0.102,
    "Las cotas vistas hasta aqu\u00ed miden la complejidad del conjunto de hip\u00f3tesis: Rademacher, funci\u00f3n de crecimiento, dimensi\u00f3n VC."
   ],
   [
    8.737,
    "Valen para cualquier algoritmo que use ese conjunto: no importa cu\u00e1l hip\u00f3tesis devuelva."
   ],
   [
    14.935,
    "\u00bfY si se analiza el algoritmo?"
   ],
   [
    17.63,
    "Un algoritmo recibe una muestra S y devuelve una hip\u00f3tesis: h sub S."
   ],
   [
    23.464,
    "Se anota z a un ejemplo con su etiqueta, y se mide la p\u00e9rdida de h en z."
   ],
   [
    29.245,
    "La propiedad que se va a usar es la estabilidad: cu\u00e1nto cambia la hip\u00f3tesis cuando cambia un punto de la muestra."
   ]
  ]
 },
 "def": {
  "dur": 36.648,
  "marks": {
   "move": 5.651,
   "two": 9.141,
   "diff": 16.419,
   "beta": 20.938,
   "other": 29.01,
   "val": 34.635
  },
  "cues": [
   [
    0.102,
    "Se toman dos muestras, S y S prima, que difieren en un solo punto."
   ],
   [
    5.651,
    "Aqu\u00ed, un punto de S cambia de lugar."
   ],
   [
    9.141,
    "El algoritmo devuelve dos hip\u00f3tesis: h sub S, en \u00e1mbar, y h sub S prima, en rosa."
   ],
   [
    16.419,
    "En cada punto z se compara la p\u00e9rdida de una con la de la otra."
   ],
   [
    20.938,
    "El algoritmo es beta estable si esa diferencia nunca pasa de beta: para todo z, y para todo par de muestras as\u00ed."
   ],
   [
    29.01,
    "Al probar otros cambios de un punto, la mayor diferencia medida da una beta emp\u00edrica: aqu\u00ed, tres punto trece."
   ]
  ]
 },
 "q1": {
  "dur": 8.952,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres algoritmos, la misma muestra y el mismo cambio de un punto."
   ],
   [
    6.719,
    "\u00bfCu\u00e1l es el m\u00e1s estable?"
   ]
  ]
 },
 "gen": {
  "dur": 47.184,
  "marks": {
   "thm": 2.643,
   "b": 8.32,
   "conf": 9.128,
   "idea": 14.115,
   "rate": 29.427,
   "slow": 38.255,
   "const": 43.724
  },
  "cues": [
   [
    0.102,
    "\u00bfPara qu\u00e9 sirve la estabilidad?"
   ],
   [
    2.643,
    "El teorema catorce punto dos acota el error de generalizaci\u00f3n de h sub S con su error emp\u00edrico, m\u00e1s beta, m\u00e1s un t\u00e9rmino de confianza, que lleva el factor dos m beta m\u00e1s M."
   ],
   [
    14.115,
    "La idea: la diferencia entre los dos errores es una funci\u00f3n de la muestra."
   ],
   [
    19.206,
    "Si el algoritmo es estable, cambiar un punto la mueve poco, y la desigualdad de McDiarmid, la del cap\u00edtulo cuatro, la concentra alrededor de su media."
   ],
   [
    29.427,
    "Todo depende de c\u00f3mo cae beta con m."
   ],
   [
    32.747,
    "Si cae como uno sobre m, la holgura baja como uno sobre ra\u00edz de m."
   ],
   [
    38.255,
    "Si cae solo como uno sobre ra\u00edz de m, la holgura ya no tiende a cero."
   ],
   [
    43.724,
    "Y si beta no cae, la holgura crece."
   ]
  ]
 },
 "ker": {
  "dur": 47.832,
  "marks": {
   "obj": 2.8,
   "adm": 16.289,
   "prop": 25.573,
   "small": 33.698,
   "big": 38.164
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 algoritmos son estables?"
   ],
   [
    2.8,
    "Los de regularizaci\u00f3n con kernels: minimizan el error emp\u00edrico, m\u00e1s lambda por la norma al cuadrado de h en el espacio del kernel."
   ],
   [
    11.55,
    "K R R, S V R y SVM tienen esa forma."
   ],
   [
    16.289,
    "Se pide una p\u00e9rdida convexa y sigma admisible: si la predicci\u00f3n cambia, la p\u00e9rdida cambia, como mucho, sigma veces ese cambio."
   ],
   [
    25.573,
    "Entonces, la proposici\u00f3n catorce punto cuatro acota beta: sigma cuadrado por r cuadrado, sobre m por lambda."
   ],
   [
    33.698,
    "Con lambda casi cero, las dos hip\u00f3tesis se separan mucho."
   ],
   [
    38.164,
    "Con lambda grande, casi coinciden, y beta se achica."
   ],
   [
    42.747,
    "La cota es holgada, pero baja con lambda, igual que la beta medida."
   ]
  ]
 },
 "mm": {
  "dur": 34.224,
  "marks": {
   "m24": 6.367,
   "m48": 7.422,
   "m96": 8.451,
   "half": 10.312,
   "bound": 18.49,
   "cons": 23.164
  },
  "cues": [
   [
    0.102,
    "\u00bfY el tama\u00f1o de la muestra?"
   ],
   [
    2.5,
    "Con lambda fija en uno, la muestra crece: doce puntos, veinticuatro, cuarenta y ocho, noventa y seis."
   ],
   [
    10.312,
    "Cada vez que m se duplica, la beta medida baja cerca de la mitad: de cero punto cincuenta y dos a cero punto cero siete."
   ],
   [
    18.49,
    "La cota de la proposici\u00f3n cae igual: como uno sobre m."
   ],
   [
    23.164,
    "Y con beta de orden uno sobre m, el teorema garantiza que el error de generalizaci\u00f3n supera al emp\u00edrico, como mucho, en un t\u00e9rmino de orden uno sobre ra\u00edz de m."
   ]
  ]
 },
 "q2": {
  "dur": 8.976,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres casos, con la misma p\u00e9rdida y el mismo kernel."
   ],
   [
    6.133,
    "\u00bfEn cu\u00e1l es menor la cota de beta?"
   ]
  ]
 },
 "app": {
  "dur": 47.88,
  "marks": {
   "svr": 3.737,
   "krr": 12.057,
   "svm": 21.81,
   "cor": 26.992,
   "lem": 32.135,
   "bin": 39.896
  },
  "cues": [
   [
    0.102,
    "Tres algoritmos conocidos entran en este marco."
   ],
   [
    3.737,
    "S V R usa la p\u00e9rdida \u00e9psilon insensible."
   ],
   [
    7.721,
    "Su pendiente nunca pasa de uno: sigma vale uno."
   ],
   [
    12.057,
    "K R R usa la p\u00e9rdida cuadr\u00e1tica."
   ],
   [
    15.521,
    "Si est\u00e1 acotada por M, su pendiente no pasa de dos ra\u00edz de M: ese es su sigma."
   ],
   [
    21.81,
    "Y SVM usa la p\u00e9rdida bisagra: otra vez, sigma uno."
   ],
   [
    26.992,
    "Al poner cada beta en el teorema, sale una cota para cada algoritmo."
   ],
   [
    32.135,
    "Y la p\u00e9rdida queda acotada si las etiquetas lo est\u00e1n: un lema acota la hip\u00f3tesis con r por la ra\u00edz de B sobre lambda."
   ],
   [
    39.896,
    "Como la bisagra queda por encima de la p\u00e9rdida cero uno, la cota de SVM vale tambi\u00e9n para el error de clasificaci\u00f3n."
   ]
  ]
 },
 "disc": {
  "dur": 38.952,
  "marks": {
   "form": 2.474,
   "info": 9.141,
   "more": 13.906,
   "sweep": 19.036,
   "bias": 26.589,
   "fix": 32.148
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 papel juega lambda?"
   ],
   [
    2.474,
    "Las cotas de este cap\u00edtulo tienen la misma forma: de orden uno, sobre lambda por ra\u00edz de m."
   ],
   [
    9.141,
    "Solo informan si lambda es mucho mayor que uno sobre ra\u00edz de m."
   ],
   [
    13.906,
    "Con m\u00e1s datos, ese umbral baja, y se puede regularizar menos."
   ],
   [
    19.036,
    "M\u00e1s lambda es m\u00e1s estabilidad, y tambi\u00e9n una norma m\u00e1s chica: un conjunto de hip\u00f3tesis menos complejo."
   ],
   [
    26.589,
    "Pero en esta muestra el error emp\u00edrico sube: la hip\u00f3tesis se aleja de los datos."
   ],
   [
    32.148,
    "Una advertencia: el an\u00e1lisis supone un lambda fijo, que no cambia al cambiar un punto de la muestra."
   ]
  ]
 },
 "wrap": {
  "dur": 32.76,
  "marks": {
   "w1": 1.823,
   "w2": 10.104,
   "w3": 17.109,
   "w4": 24.206
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un algoritmo es beta estable si, al cambiar un punto de la muestra, la p\u00e9rdida de la hip\u00f3tesis que devuelve cambia a lo sumo beta."
   ],
   [
    10.104,
    "Con beta de orden uno sobre m, la estabilidad da una cota de generalizaci\u00f3n que depende del algoritmo."
   ],
   [
    17.109,
    "Los algoritmos de regularizaci\u00f3n con kernels son estables: su beta cae como uno sobre m por lambda."
   ],
   [
    24.206,
    "M\u00e1s lambda da m\u00e1s estabilidad, pero aleja la hip\u00f3tesis de los datos."
   ],
   [
    29.518,
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
  "dur": 4.56,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una cota para calcular."
   ]
  ]
 },
 "finish": {
  "dur": 4.488,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintiocho."
   ]
  ]
 }
};

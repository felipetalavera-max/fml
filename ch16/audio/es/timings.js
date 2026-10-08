window.TIMINGS = {
 "intro": {
  "dur": 12.576,
  "marks": {
   "sub": 5.664
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo diecis\u00e9is."
   ],
   [
    2.5,
    "Predicci\u00f3n con consejo de expertos."
   ],
   [
    5.664,
    "Aprender ronda a ronda, sin suponer nada sobre los datos, y quedar cerca del mejor experto."
   ]
  ]
 },
 "escenario": {
  "dur": 55.488,
  "marks": {
   "ronda": 6.38,
   "adv": 18.021,
   "exp": 23.776,
   "cnt": 34.661,
   "reg": 43.919
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, los datos sal\u00edan de una distribuci\u00f3n fija, y se entrenaba antes de predecir."
   ],
   [
    6.38,
    "En el aprendizaje en l\u00ednea no hay dos fases."
   ],
   [
    10.0,
    "Se juega por rondas: llega un punto, el algoritmo predice, se revela la etiqueta, y se paga una p\u00e9rdida."
   ],
   [
    18.021,
    "No se supone ninguna distribuci\u00f3n: la secuencia puede elegirla un adversario."
   ],
   [
    23.776,
    "En este cap\u00edtulo, adem\u00e1s, el algoritmo recibe en cada ronda el consejo de N expertos."
   ],
   [
    30.521,
    "Aqu\u00ed son ocho, y cada uno dice cero o uno."
   ],
   [
    34.661,
    "Tras diez rondas, cada experto tiene su cuenta de errores."
   ],
   [
    39.284,
    "El mejor, visto en retrospectiva, fall\u00f3 una sola vez."
   ],
   [
    43.919,
    "El algoritmo fall\u00f3 tres."
   ],
   [
    46.497,
    "La diferencia, dos, es el regret, o arrepentimiento: la p\u00e9rdida acumulada del algoritmo, menos la del mejor experto."
   ]
  ]
 },
 "halving": {
  "dur": 53.616,
  "marks": {
   "vote": 12.786,
   "e1": 18.099,
   "e2": 28.464,
   "thm": 33.06,
   "vc": 42.253
  },
  "cues": [
   [
    0.102,
    "Primero, el caso m\u00e1s simple, con la p\u00e9rdida cero-uno: alg\u00fan experto no se equivoca nunca."
   ],
   [
    7.122,
    "Es el caso realizable."
   ],
   [
    9.505,
    "\u00bfCu\u00e1ntos errores hacen falta para dar con \u00e9l?"
   ],
   [
    12.786,
    "El algoritmo Halving predice por voto de mayor\u00eda entre los expertos activos."
   ],
   [
    18.099,
    "Cuando falla, apaga a todos los que dieron el consejo equivocado."
   ],
   [
    22.865,
    "Como eran mayor\u00eda, se va al menos la mitad: de ocho, quedan tres."
   ],
   [
    28.464,
    "Segundo error: queda uno solo, y ese ya no falla."
   ],
   [
    33.06,
    "En general, Halving comete, a lo sumo, logaritmo en base dos de N errores."
   ],
   [
    39.375,
    "Con ocho expertos, tres."
   ],
   [
    42.253,
    "\u00bfSe puede bajar mucho m\u00e1s?"
   ],
   [
    44.792,
    "No por debajo de la dimensi\u00f3n VC: con un conjunto fragmentado de d puntos, un adversario le fuerza d errores a cualquier algoritmo."
   ]
  ]
 },
 "q1": {
  "dur": 8.448,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Halving acaba de fallar en esta ronda."
   ],
   [
    4.857,
    "\u00bfCu\u00e1l de los tres expertos marcados sigue activo?"
   ]
  ]
 },
 "wm": {
  "dur": 41.376,
  "marks": {
   "w": 5.156,
   "vote": 10.99,
   "beta": 16.536,
   "run": 26.081,
   "end": 34.44
  },
  "cues": [
   [
    0.102,
    "Si ning\u00fan experto es perfecto, apagar al primer error es demasiado."
   ],
   [
    5.156,
    "El algoritmo de mayor\u00eda ponderada le da a cada experto un peso, que empieza en uno."
   ],
   [
    10.99,
    "La predicci\u00f3n es el voto de mayor\u00eda, con cada voto multiplicado por su peso."
   ],
   [
    16.536,
    "Y cuando el algoritmo falla, el peso de cada experto que fall\u00f3 se multiplica por beta, un n\u00famero menor que uno."
   ],
   [
    23.867,
    "Aqu\u00ed, un medio."
   ],
   [
    26.081,
    "Es la idea multiplicativa de AdaBoost, ahora con pesos sobre expertos."
   ],
   [
    31.341,
    "Ronda a ronda, los que m\u00e1s fallan pierden voz, y el voto se inclina hacia los mejores."
   ],
   [
    37.721,
    "Con beta igual a cero, se recupera Halving."
   ]
  ]
 },
 "cota": {
  "dur": 40.824,
  "marks": {
   "pot": 2.93,
   "low": 13.698,
   "thm": 17.63,
   "num": 29.049,
   "any": 38.164
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1nto puede fallar este algoritmo?"
   ],
   [
    2.93,
    "La idea es seguir la suma de todos los pesos."
   ],
   [
    6.562,
    "Cada error del algoritmo le quita a esa suma, al menos, una fracci\u00f3n fija: aqu\u00ed, un cuarto."
   ],
   [
    13.698,
    "Pero la suma nunca baja del peso del mejor experto."
   ],
   [
    17.63,
    "Entre esos dos l\u00edmites sale la cota: los errores del algoritmo son, a lo sumo, un t\u00e9rmino que crece con el logaritmo de N, m\u00e1s una constante por los errores del mejor experto."
   ],
   [
    29.049,
    "En cien rondas, el mejor experto fall\u00f3 once veces, y el algoritmo, veintiuna."
   ],
   [
    35.208,
    "La cota permit\u00eda treinta y tres."
   ],
   [
    38.164,
    "Y vale para cualquier secuencia."
   ]
  ]
 },
 "q2": {
  "dur": 9.384,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Cinco expertos, con estos pesos y estos consejos."
   ],
   [
    6.445,
    "\u00bfQu\u00e9 predice la mayor\u00eda ponderada?"
   ]
  ]
 },
 "det": {
  "dur": 39.312,
  "marks": {
   "adv": 4.518,
   "two": 10.078,
   "run": 16.081,
   "half": 19.453,
   "reg": 24.792
  },
  "cues": [
   [
    0.102,
    "Pero hay un l\u00edmite."
   ],
   [
    2.135,
    "Estos algoritmos son deterministas: un adversario puede calcular qu\u00e9 van a predecir, y elegir la etiqueta contraria."
   ],
   [
    10.078,
    "Bastan dos expertos: uno que siempre dice cero, y otro que siempre dice uno."
   ],
   [
    16.081,
    "El algoritmo falla en todas las rondas."
   ],
   [
    19.453,
    "Y uno de los dos expertos acierta, al menos, la mitad de las veces."
   ],
   [
    24.792,
    "En cien rondas: cien errores contra cincuenta."
   ],
   [
    28.737,
    "El regret es la mitad de las rondas: crece linealmente."
   ],
   [
    33.164,
    "Con la p\u00e9rdida cero-uno, ning\u00fan algoritmo determinista lo evita en todas las secuencias."
   ]
  ]
 },
 "rwm": {
  "dur": 45.96,
  "marks": {
   "p": 2.409,
   "upd": 11.562,
   "adv": 16.523,
   "same": 22.344,
   "gap": 27.487,
   "thm": 30.586,
   "sub": 38.047
  },
  "cues": [
   [
    0.102,
    "La salida es sortear."
   ],
   [
    2.409,
    "La mayor\u00eda ponderada aleatorizada elige, en cada ronda, un solo experto, con probabilidad proporcional a su peso, y lo sigue."
   ],
   [
    11.562,
    "Despu\u00e9s, cada experto que fall\u00f3 ve su peso multiplicado por beta."
   ],
   [
    16.523,
    "El adversario puede conocer las probabilidades, pero no el resultado del sorteo."
   ],
   [
    22.344,
    "Sobre la misma secuencia de antes, la p\u00e9rdida esperada en cien rondas es cincuenta y uno: apenas uno m\u00e1s que el mejor experto."
   ],
   [
    30.586,
    "La garant\u00eda general: con el beta adecuado, el regret es, a lo sumo, dos por la ra\u00edz cuadrada de T por logaritmo de N."
   ],
   [
    38.047,
    "Crece como la ra\u00edz de T, as\u00ed que el regret por ronda tiende a cero."
   ],
   [
    43.021,
    "Y ese orden no se puede mejorar."
   ]
  ]
 },
 "ewa": {
  "dur": 48.096,
  "marks": {
   "avg": 5.794,
   "upd": 11.992,
   "run": 17.682,
   "num": 22.721,
   "thm": 29.479,
   "opt": 36.784
  },
  "cues": [
   [
    0.102,
    "Queda un caso m\u00e1s: las p\u00e9rdidas convexas, con valores entre cero y uno."
   ],
   [
    5.794,
    "Ah\u00ed no hace falta sortear: el algoritmo predice el promedio ponderado de los consejos."
   ],
   [
    11.992,
    "Y cada peso se multiplica por e elevado a menos eta por la p\u00e9rdida de ese experto."
   ],
   [
    17.682,
    "De vuelta con los ocho expertos, y con el valor absoluto de la diferencia como p\u00e9rdida: en cien rondas, el algoritmo acumula diecisiete punto tres, contra once del mejor experto."
   ],
   [
    29.479,
    "La garant\u00eda: el regret es, a lo sumo, logaritmo de N sobre eta, m\u00e1s eta por T sobre ocho."
   ],
   [
    36.784,
    "Con el mejor eta, queda la ra\u00edz de T medios por logaritmo de N: aqu\u00ed, diez punto dos."
   ],
   [
    43.568,
    "Otra vez del orden de la ra\u00edz de T, y esta vez sin sorteo."
   ]
  ]
 },
 "wrap": {
  "dur": 36.168,
  "marks": {
   "w1": 1.823,
   "w2": 9.102,
   "w3": 15.456,
   "w4": 23.281
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "En l\u00ednea se aprende por rondas, sin suponer una distribuci\u00f3n, y se mide el regret frente al mejor experto."
   ],
   [
    9.102,
    "Halving, en el caso realizable, falla a lo sumo logaritmo en base dos de N veces."
   ],
   [
    15.456,
    "La mayor\u00eda ponderada multiplica por beta el peso de los que fallan, y sus errores quedan acotados por los del mejor experto."
   ],
   [
    23.281,
    "Con la p\u00e9rdida cero-uno hace falta sortear; con p\u00e9rdidas convexas, alcanza con promediar."
   ],
   [
    29.909,
    "El regret crece como la ra\u00edz de T."
   ],
   [
    32.93,
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
  "dur": 4.608,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo diecis\u00e9is."
   ]
  ]
 }
};

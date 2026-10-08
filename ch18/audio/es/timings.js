window.TIMINGS = {
 "intro": {
  "dur": 15.36,
  "marks": {
   "sub": 6.901
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo dieciocho."
   ],
   [
    2.396,
    "Del aprendizaje en l\u00ednea al batch, y teor\u00eda de juegos."
   ],
   [
    6.901,
    "Un algoritmo en l\u00ednea con poco regret sirve para dos cosas m\u00e1s: aprender de una muestra, y demostrar el teorema minimax."
   ]
  ]
 },
 "conv": {
  "dur": 41.328,
  "marks": {
   "batch": 4.362,
   "run": 12.201,
   "h1": 17.24,
   "loss": 26.81,
   "all": 33.398,
   "q": 37.604
  },
  "cues": [
   [
    0.102,
    "Los algoritmos en l\u00ednea no suponen nada sobre la secuencia."
   ],
   [
    4.362,
    "\u00bfY en el escenario batch, o por lotes, donde hay una muestra extra\u00edda de forma independiente de una distribuci\u00f3n fija?"
   ],
   [
    12.201,
    "La idea es simple: darle la muestra al algoritmo, punto por punto."
   ],
   [
    17.24,
    "Aqu\u00ed, pesos exponenciales sobre cuarenta umbrales."
   ],
   [
    21.432,
    "La primera hip\u00f3tesis no sabe nada: predice un medio en todas partes."
   ],
   [
    26.81,
    "En cada ronda se predice sobre el punto que llega, se paga la p\u00e9rdida, y la hip\u00f3tesis cambia."
   ],
   [
    33.398,
    "Tras doscientas rondas, quedan doscientas hip\u00f3tesis."
   ],
   [
    37.604,
    "\u00bfQu\u00e9 se puede decir de su error de generalizaci\u00f3n?"
   ]
  ]
 },
 "lema": {
  "dur": 48.552,
  "marks": {
   "two": 5.117,
   "avgR": 10.768,
   "key": 15.326,
   "azuma": 26.771,
   "bound": 32.266,
   "num": 41.042
  },
  "cues": [
   [
    0.102,
    "Primero, un lema."
   ],
   [
    2.448,
    "Se comparan dos promedios."
   ],
   [
    5.117,
    "La p\u00e9rdida en l\u00ednea promedio: lo que el algoritmo pag\u00f3, ronda a ronda."
   ],
   [
    10.768,
    "Y el promedio de los errores de generalizaci\u00f3n de sus hip\u00f3tesis."
   ],
   [
    15.326,
    "La clave: cada hip\u00f3tesis queda fijada antes de ver su punto."
   ],
   [
    20.0,
    "Entonces, lo que paga en esa ronda vale, en esperanza, justo su error de generalizaci\u00f3n."
   ],
   [
    26.771,
    "Las diferencias se compensan al promediar, y la desigualdad de Azuma dice cu\u00e1nto."
   ],
   [
    32.266,
    "Con probabilidad uno menos delta, el promedio de los errores no supera a la p\u00e9rdida promedio m\u00e1s un t\u00e9rmino que baja como uno sobre la ra\u00edz de T."
   ],
   [
    41.042,
    "En el ejemplo, los dos promedios terminan cerca de cero punto once, y el t\u00e9rmino vale cero punto diecisiete."
   ]
  ]
 },
 "q1": {
  "dur": 8.808,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "De estas tres cantidades, \u00bfcu\u00e1l se puede calcular solo con la muestra, sin conocer la distribuci\u00f3n?"
   ]
  ]
 },
 "prom": {
  "dur": 41.616,
  "marks": {
   "fan": 3.255,
   "avg": 9.245,
   "conv": 15.091,
   "thm": 21.055,
   "num": 31.875
  },
  "cues": [
   [
    0.102,
    "Falta elegir qu\u00e9 hip\u00f3tesis devolver."
   ],
   [
    3.255,
    "Las doscientas son distintas: al principio casi planas, al final casi un escal\u00f3n."
   ],
   [
    9.245,
    "Se devuelve su promedio: en cada punto, el promedio de lo que predicen todas."
   ],
   [
    15.091,
    "Si la p\u00e9rdida es convexa, el error del promedio no supera al promedio de los errores."
   ],
   [
    21.055,
    "Con el lema, sale el teorema: el error de generalizaci\u00f3n de la hip\u00f3tesis promedio es, a lo sumo, la p\u00e9rdida en l\u00ednea promedio m\u00e1s el mismo t\u00e9rmino de confianza."
   ],
   [
    31.875,
    "Aqu\u00ed, el error exacto del promedio es cero punto diez, y la cota, cero punto veintiocho: una garant\u00eda que solo usa lo observado en la muestra."
   ]
  ]
 },
 "cota": {
  "dur": 49.44,
  "marks": {
   "def": 2.422,
   "thm": 9.427,
   "ewa": 24.023,
   "t1": 30.286,
   "t2": 35.039,
   "t3": 38.372,
   "moral": 44.531
  },
  "cues": [
   [
    0.102,
    "Ahora entra el regret."
   ],
   [
    2.422,
    "La p\u00e9rdida acumulada del algoritmo es la del mejor de la clase, sobre la misma muestra, m\u00e1s el regret."
   ],
   [
    9.427,
    "Al dividir por T, y pasar de la muestra a la distribuci\u00f3n, queda la segunda parte del teorema: el error del promedio es, a lo sumo, el \u00ednfimo del error en la clase, m\u00e1s el regret sobre T, m\u00e1s un t\u00e9rmino de confianza."
   ],
   [
    24.023,
    "Con pesos exponenciales, el regret sobre T baja como la ra\u00edz del logaritmo de N sobre T."
   ],
   [
    30.286,
    "Con doscientas rondas, la cota vale cero punto cincuenta y ocho."
   ],
   [
    35.039,
    "Con dos mil, cero punto veinticinco."
   ],
   [
    38.372,
    "Con veinte mil, cero punto quince, cerca ya del \u00ednfimo, que es cero punto diez."
   ],
   [
    44.531,
    "Un regret sublineal se convierte en una garant\u00eda de generalizaci\u00f3n."
   ]
  ]
 },
 "q2": {
  "dur": 9.648,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres algoritmos, con tres regrets distintos."
   ],
   [
    5.833,
    "\u00bfCon cu\u00e1l la cota no se acerca al \u00ednfimo cuando T crece?"
   ]
  ]
 },
 "juego": {
  "dur": 53.592,
  "marks": {
   "mat": 3.763,
   "pure": 15.247,
   "pure2": 22.357,
   "mix": 30.169,
   "vn": 37.734,
   "val": 47.083
  },
  "cues": [
   [
    0.102,
    "El mismo regret demuestra un teorema cl\u00e1sico."
   ],
   [
    3.763,
    "Un juego de suma cero, como el de boosting: una matriz de p\u00e9rdidas."
   ],
   [
    9.05,
    "Un jugador elige una fila, el otro una columna, y el de las filas paga la casilla."
   ],
   [
    15.247,
    "Si el de las filas debe mostrar primero su jugada, elige la segunda, y paga cero punto setenta y cinco."
   ],
   [
    22.357,
    "Si es la columna la que se muestra primero, paga solo cero punto veinticinco."
   ],
   [
    27.878,
    "Jugar primero cuesta."
   ],
   [
    30.169,
    "Con estrategias mixtas, cada jugador sortea su jugada con una distribuci\u00f3n, y se mira la p\u00e9rdida esperada."
   ],
   [
    37.734,
    "El teorema minimax de von Neumann dice que, entonces, el orden deja de importar: el m\u00ednimo del m\u00e1ximo es igual al m\u00e1ximo del m\u00ednimo."
   ],
   [
    47.083,
    "Aqu\u00ed, el valor del juego es un medio: la fila lo asegura con un tercio y dos tercios."
   ]
  ]
 },
 "prueba": {
  "dur": 58.2,
  "marks": {
   "alg": 4.089,
   "br": 14.089,
   "run": 18.971,
   "up": 23.906,
   "low": 31.068,
   "sq": 41.055,
   "num": 48.229
  },
  "cues": [
   [
    0.102,
    "Que jugar primero no conviene es la desigualdad f\u00e1cil."
   ],
   [
    4.089,
    "Para la otra, se pone a jugar a un algoritmo sin regret."
   ],
   [
    8.568,
    "En cada ronda, las filas eligen su distribuci\u00f3n con pesos exponenciales."
   ],
   [
    14.089,
    "La columna, que ya la conoce, responde con lo que m\u00e1s le cobra."
   ],
   [
    18.971,
    "Los pesos de las filas se acomodan, y la columna empieza a alternar."
   ],
   [
    23.906,
    "La p\u00e9rdida promedio del algoritmo nunca baja del m\u00ednimo del m\u00e1ximo: la columna siempre respondi\u00f3 lo peor."
   ],
   [
    31.068,
    "Y, por la definici\u00f3n de regret, supera en solo el regret sobre T a lo mejor que se puede hacer contra la columna promedio; y eso no pasa del m\u00e1ximo del m\u00ednimo."
   ],
   [
    41.055,
    "Las dos curvas encierran el valor del juego, y la brecha entre ellas es el regret sobre T, que tiende a cero."
   ],
   [
    48.229,
    "Tras doscientas rondas: cero punto cincuenta y uno, y cero punto cuarenta y nueve."
   ],
   [
    54.062,
    "Las distribuciones promedio quedan cerca de las \u00f3ptimas."
   ]
  ]
 },
 "wrap": {
  "dur": 31.464,
  "marks": {
   "w1": 1.823,
   "w2": 10.195,
   "w3": 15.0,
   "w4": 20.143
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Sobre una muestra independiente, el promedio de los errores de las hip\u00f3tesis de un algoritmo en l\u00ednea queda cerca de su p\u00e9rdida promedio."
   ],
   [
    10.195,
    "Con p\u00e9rdida convexa, la hip\u00f3tesis promedio hereda esa cota."
   ],
   [
    15.0,
    "Y su error se acerca al \u00ednfimo de la clase a medida que el regret sobre T baja."
   ],
   [
    20.143,
    "El mismo regret sublineal demuestra el teorema minimax de von Neumann."
   ],
   [
    24.987,
    "Con esto termina el aprendizaje en l\u00ednea."
   ],
   [
    28.216,
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
    "Ese fue el cap\u00edtulo dieciocho."
   ]
  ]
 }
};

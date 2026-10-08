window.TIMINGS = {
 "intro": {
  "dur": 10.992,
  "marks": {
   "sub": 5.964
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintisiete."
   ],
   [
    2.448,
    "Maxent condicional y regresi\u00f3n log\u00edstica."
   ],
   [
    5.964,
    "C\u00f3mo aprender, adem\u00e1s de la clase, la probabilidad de cada clase."
   ]
  ]
 },
 "prob": {
  "dur": 28.824,
  "marks": {
   "conf": 4.909,
   "p": 9.648,
   "move": 14.753,
   "feat": 21.589
  },
  "cues": [
   [
    0.102,
    "Hasta aqu\u00ed, un clasificador multiclase devolv\u00eda una etiqueta."
   ],
   [
    4.909,
    "Muchas aplicaciones piden, adem\u00e1s, un valor de confianza."
   ],
   [
    9.648,
    "Ahora se aprende, para cada punto, una probabilidad por clase."
   ],
   [
    14.753,
    "Lejos de las fronteras, una clase se lleva casi todo; cerca, la probabilidad se reparte."
   ],
   [
    21.589,
    "Se parte, como en Maxent, de un vector de caracter\u00edsticas, que ahora depende del punto y de la clase."
   ]
  ]
 },
 "princ": {
  "dur": 39.456,
  "marks": {
   "each": 4.844,
   "unif": 9.74,
   "cons": 12.656,
   "obj": 26.237,
   "sol": 32.201
  },
  "cues": [
   [
    0.102,
    "El principio es el del cap\u00edtulo veinticinco, ahora condicional."
   ],
   [
    4.844,
    "Para cada punto de la muestra se busca una distribuci\u00f3n sobre las clases."
   ],
   [
    9.74,
    "La m\u00e1s agn\u00f3stica es la uniforme."
   ],
   [
    12.656,
    "Pero hay una restricci\u00f3n: el promedio de las caracter\u00edsticas, con los puntos de la muestra y las clases seg\u00fan p, debe quedar a distancia lambda, como mucho, del promedio emp\u00edrico."
   ],
   [
    23.958,
    "La uniforme no cumple."
   ],
   [
    26.237,
    "Entre las que cumplen, se elige la m\u00e1s cercana a la previa, en entrop\u00eda relativa."
   ],
   [
    32.201,
    "En la soluci\u00f3n, cada distribuci\u00f3n se inclina hacia la clase de su punto, y el desv\u00edo queda justo en lambda."
   ]
  ]
 },
 "model": {
  "dur": 34.632,
  "marks": {
   "thm": 2.708,
   "dual": 6.562,
   "form": 13.346,
   "exp": 19.036,
   "norm": 20.794,
   "other": 25.286,
   "all": 29.688
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 forma tiene la soluci\u00f3n?"
   ],
   [
    2.708,
    "El teorema trece punto uno dice que el problema equivale a su dual: m\u00e1xima verosimilitud condicional, con regularizaci\u00f3n L uno, sobre distribuciones de Gibbs."
   ],
   [
    13.346,
    "Cada clase recibe una puntuaci\u00f3n: w por su vector de caracter\u00edsticas."
   ],
   [
    19.036,
    "Se le aplica la exponencial, y se divide por la suma: la funci\u00f3n de partici\u00f3n de ese punto."
   ],
   [
    25.286,
    "Otro punto da otras puntuaciones, con el mismo w."
   ],
   [
    29.688,
    "Por eso el modelo vale para cualquier punto, no solo para los de la muestra."
   ]
  ]
 },
 "q1": {
  "dur": 9.864,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntos, cada uno con sus tres puntuaciones."
   ],
   [
    6.107,
    "\u00bfEn cu\u00e1l es mayor la probabilidad de la clase uno?"
   ]
  ]
 },
 "opt": {
  "dur": 32.352,
  "marks": {
   "loss": 4.01,
   "fit": 12.708,
   "blk": 19.31,
   "pred": 23.997
  },
  "cues": [
   [
    0.102,
    "El dual es un problema convexo y sin restricciones."
   ],
   [
    4.01,
    "Para cada punto, la p\u00e9rdida es el logaritmo de una suma de exponenciales: compara la puntuaci\u00f3n de cada clase con la de la clase correcta."
   ],
   [
    12.708,
    "Aqu\u00ed se minimiza desde w igual a cero: el objetivo baja, y las regiones se acomodan."
   ],
   [
    19.31,
    "Con las caracter\u00edsticas usuales, hay un vector de pesos por clase."
   ],
   [
    23.997,
    "Y se predice la clase m\u00e1s probable, que es la de mayor puntuaci\u00f3n: un clasificador lineal, como los del cap\u00edtulo diecinueve."
   ]
  ]
 },
 "gen": {
  "dur": 33.864,
  "marks": {
   "thm": 2.839,
   "cx": 10.612,
   "conf": 12.461,
   "c": 14.492,
   "n": 18.255,
   "alg": 26.341
  },
  "cues": [
   [
    0.102,
    "Tambi\u00e9n hay garant\u00edas por margen."
   ],
   [
    2.839,
    "El teorema trece punto dos acota el error de generalizaci\u00f3n con la p\u00e9rdida logar\u00edtmica emp\u00edrica, con las puntuaciones divididas por ro, m\u00e1s un t\u00e9rmino de complejidad, y dos de confianza."
   ],
   [
    14.492,
    "El de complejidad lleva un factor lineal en el n\u00famero de clases, y no depende de la dimensi\u00f3n."
   ],
   [
    20.781,
    "Con dimensi\u00f3n finita, el teorema trece punto tres da un t\u00e9rmino que crece apenas con el logaritmo de N."
   ],
   [
    26.341,
    "Minimizar la cota, con la norma uno de w acotada, lleva al mismo problema: Maxent condicional."
   ]
  ]
 },
 "logi": {
  "dur": 35.856,
  "marks": {
   "sum": 4.531,
   "sig": 11.198,
   "heat": 16.263,
   "probe": 21.341,
   "odds": 29.544
  },
  "cues": [
   [
    0.102,
    "Con dos clases, el modelo se llama regresi\u00f3n log\u00edstica."
   ],
   [
    4.531,
    "Todo depende de un solo vector: la diferencia entre las caracter\u00edsticas de una clase y las de la otra."
   ],
   [
    11.198,
    "La probabilidad de la clase positiva es la funci\u00f3n log\u00edstica de la puntuaci\u00f3n."
   ],
   [
    16.263,
    "En el plano ya no hay una frontera seca, sino un mapa de probabilidad."
   ],
   [
    21.341,
    "Un punto que cruza de la zona azul a la salm\u00f3n recorre la curva: casi cero, un medio justo sobre la recta, casi uno."
   ],
   [
    29.544,
    "La puntuaci\u00f3n es el logaritmo del cociente de las dos probabilidades: se decide por su signo."
   ]
  ]
 },
 "loss": {
  "dur": 41.808,
  "marks": {
   "obj": 2.472,
   "curve": 9.31,
   "up": 16.172,
   "fit": 21.12,
   "end": 27.839,
   "ada": 36.094
  },
  "cues": [
   [
    0.102,
    "El problema de optimizaci\u00f3n queda as\u00ed: lambda por la norma uno, m\u00e1s el promedio de la p\u00e9rdida log\u00edstica, ya vista en el cap\u00edtulo ocho."
   ],
   [
    9.31,
    "Es casi nula si el punto est\u00e1 bien clasificado y lejos de la recta, y crece si est\u00e1 del lado equivocado."
   ],
   [
    16.172,
    "En base dos, queda por encima del escal\u00f3n de la p\u00e9rdida cero uno."
   ],
   [
    21.12,
    "Al minimizar desde w igual a cero, los puntos se deslizan por la curva, y el mapa se define."
   ],
   [
    27.839,
    "Al final, la p\u00e9rdida media baja de cero punto sesenta y nueve a cero punto veinticuatro, con dos puntos mal clasificados."
   ],
   [
    36.094,
    "Con descenso por coordenadas, es la variante de AdaBoost con p\u00e9rdida log\u00edstica."
   ]
  ]
 },
 "q2": {
  "dur": 9.312,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres puntos de la muestra, con el modelo ya ajustado."
   ],
   [
    6.094,
    "\u00bfCu\u00e1l tiene la mayor p\u00e9rdida log\u00edstica?"
   ]
  ]
 },
 "l2": {
  "dur": 29.832,
  "marks": {
   "prob": 3.594,
   "cmp": 6.771,
   "thm": 12.591,
   "dep": 19.232,
   "bin": 24.596
  },
  "cues": [
   [
    0.102,
    "Hay una variante con la norma dos al cuadrado."
   ],
   [
    3.594,
    "El objetivo pasa a ser diferenciable."
   ],
   [
    6.771,
    "Con L uno, cinco de los nueve pesos son nulos; con L dos, ninguno."
   ],
   [
    12.591,
    "Su garant\u00eda es el teorema trece punto cuatro: la misma cota, con otro t\u00e9rmino de complejidad."
   ],
   [
    19.232,
    "No depende de la dimensi\u00f3n, pero crece con el cuadrado del n\u00famero de clases."
   ],
   [
    24.596,
    "Con dos clases, las mismas garant\u00edas valen para la regresi\u00f3n log\u00edstica."
   ]
  ]
 },
 "wrap": {
  "dur": 31.68,
  "marks": {
   "w1": 1.823,
   "w2": 9.271,
   "w3": 17.096,
   "w4": 24.701
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Maxent condicional busca una distribuci\u00f3n por punto, con una restricci\u00f3n sobre los promedios de las caracter\u00edsticas."
   ],
   [
    9.271,
    "Su dual es m\u00e1xima verosimilitud condicional regularizada: la exponencial de una puntuaci\u00f3n, dividida por su suma."
   ],
   [
    17.096,
    "El problema es convexo, se predice por la mayor puntuaci\u00f3n, y las cotas por margen crecen con el n\u00famero de clases."
   ],
   [
    24.701,
    "Con dos clases, es la regresi\u00f3n log\u00edstica."
   ],
   [
    28.451,
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
  "dur": 4.536,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintisiete."
   ]
  ]
 }
};

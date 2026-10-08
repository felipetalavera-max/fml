window.TIMINGS = {
 "intro": {
  "dur": 8.784,
  "marks": {
   "sub": 4.128
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo dos."
   ],
   [
    2.135,
    "El modelo PAC."
   ],
   [
    4.128,
    "Cu\u00e1ntos ejemplos hacen falta para aprender, y con qu\u00e9 garant\u00eda."
   ]
  ]
 },
 "concepto": {
  "dur": 49.536,
  "marks": {
   "space": 5.091,
   "c": 10.312,
   "label": 18.372,
   "class": 20.924,
   "dist": 28.958,
   "sample": 34.688,
   "hidden": 41.302,
   "goal": 44.948
  },
  "cues": [
   [
    0.102,
    "Para hablar de garant\u00edas hace falta un modelo preciso de qu\u00e9 es aprender."
   ],
   [
    5.091,
    "Los ejemplos viven en un espacio de entrada: aqu\u00ed, los puntos del plano."
   ],
   [
    10.312,
    "Un concepto es una regla que asigna a cada punto la etiqueta uno o cero."
   ],
   [
    15.43,
    "En este ejemplo, el concepto es un rect\u00e1ngulo: uno adentro, cero afuera."
   ],
   [
    20.924,
    "La clase de conceptos re\u00fane todos los conceptos que podr\u00edan tocar: aqu\u00ed, todos los rect\u00e1ngulos alineados a los ejes."
   ],
   [
    28.958,
    "Los puntos se extraen de una distribuci\u00f3n fija, la misma para entrenar y para evaluar."
   ],
   [
    34.688,
    "El aprendiz recibe una muestra de veinte puntos, independientes, cada uno con su etiqueta."
   ],
   [
    41.302,
    "No ve el rect\u00e1ngulo ni conoce la distribuci\u00f3n."
   ],
   [
    44.948,
    "Con esa muestra debe elegir una hip\u00f3tesis que se parezca al concepto."
   ]
  ]
 },
 "errores": {
  "dur": 53.592,
  "marks": {
   "hyp": 3.49,
   "fn": 7.474,
   "fp": 13.151,
   "risk": 18.698,
   "rv": 24.701,
   "emp": 28.099,
   "ev": 31.758,
   "see": 35.117,
   "avg": 44.349
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se mide qu\u00e9 tan buena es una hip\u00f3tesis?"
   ],
   [
    3.49,
    "Una hip\u00f3tesis posible: este otro rect\u00e1ngulo."
   ],
   [
    7.474,
    "Donde el concepto dice uno y la hip\u00f3tesis dice cero, hay falsos negativos."
   ],
   [
    13.151,
    "Donde la hip\u00f3tesis dice uno y el concepto dice cero, falsos positivos."
   ],
   [
    18.698,
    "El error de generalizaci\u00f3n es la probabilidad de que un punto nuevo caiga en la regi\u00f3n de error."
   ],
   [
    24.701,
    "Aqu\u00ed vale cerca de cero punto dieciocho."
   ],
   [
    28.099,
    "El error emp\u00edrico es la fracci\u00f3n de la muestra mal clasificada: dos puntos de veinte, cero punto uno."
   ],
   [
    35.117,
    "El aprendiz solo puede calcular el error emp\u00edrico."
   ],
   [
    38.893,
    "El de generalizaci\u00f3n depende del concepto y de la distribuci\u00f3n, que no conoce."
   ],
   [
    44.349,
    "Para una hip\u00f3tesis fija, eso s\u00ed, el promedio del error emp\u00edrico sobre todas las muestras posibles es exactamente el error de generalizaci\u00f3n."
   ]
  ]
 },
 "q1": {
  "dur": 4.896,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfD\u00f3nde est\u00e1n los falsos positivos?"
   ]
  ]
 },
 "ajustado": {
  "dur": 47.808,
  "marks": {
   "algo": 2.693,
   "shrink": 8.164,
   "inside": 12.383,
   "region": 19.896,
   "emp0": 24.375,
   "risk": 27.044,
   "m80": 31.497,
   "m320": 37.943,
   "never": 41.771
  },
  "cues": [
   [
    0.102,
    "Un algoritmo sencillo para este problema: devolver el rect\u00e1ngulo m\u00e1s ajustado que contiene todos los puntos con etiqueta uno."
   ],
   [
    8.164,
    "El rect\u00e1ngulo se cierra hasta tocar los puntos positivos."
   ],
   [
    12.383,
    "Esos puntos est\u00e1n dentro del concepto, as\u00ed que la hip\u00f3tesis queda contenida en \u00e9l: no hay falsos positivos."
   ],
   [
    19.896,
    "La regi\u00f3n de error es el marco que queda entre los dos rect\u00e1ngulos."
   ],
   [
    24.375,
    "En la muestra no hay errores."
   ],
   [
    27.044,
    "Pero el error de generalizaci\u00f3n es cerca de cero punto diecinueve."
   ],
   [
    31.497,
    "Con ochenta puntos, el rect\u00e1ngulo crece y el marco se adelgaza: cero punto cero siete."
   ],
   [
    37.943,
    "Con trescientos veinte, cero punto cero uno."
   ],
   [
    41.771,
    "El error baja con el tama\u00f1o de la muestra, pero cu\u00e1nto baja depende de qu\u00e9 puntos tocaron."
   ]
  ]
 },
 "q2": {
  "dur": 4.992,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 rect\u00e1ngulo devuelve el algoritmo?"
   ]
  ]
 },
 "pac": {
  "dur": 50.424,
  "marks": {
   "many": 5.195,
   "eps": 11.862,
   "good": 22.135,
   "bad": 24.909,
   "delta": 29.036,
   "dd": 32.995,
   "formula": 38.268,
   "names": 45.195
  },
  "cues": [
   [
    0.102,
    "Como la muestra es aleatoria, el error de la hip\u00f3tesis tambi\u00e9n lo es."
   ],
   [
    5.195,
    "Veinte muestras distintas, de cincuenta puntos cada una, dan veinte rect\u00e1ngulos distintos."
   ],
   [
    11.862,
    "Se fija una tolerancia, \u00e9psilon: aqu\u00ed, cero punto uno."
   ],
   [
    17.018,
    "Una hip\u00f3tesis es aproximadamente correcta si su error no pasa de \u00e9psilon."
   ],
   [
    22.135,
    "Dieciocho muestras lo logran."
   ],
   [
    24.909,
    "Dos no: tocaron puntos poco representativos."
   ],
   [
    29.036,
    "Eso no se puede evitar, pero se puede volver raro."
   ],
   [
    32.995,
    "Delta es la probabilidad m\u00e1xima que se tolera para una muestra desafortunada."
   ],
   [
    38.268,
    "La garant\u00eda que se busca: con probabilidad de al menos uno menos delta, el error es a lo sumo \u00e9psilon."
   ],
   [
    45.195,
    "Probablemente, aproximadamente correcta: de ah\u00ed la sigla PAC."
   ]
  ]
 },
 "franjas": {
  "dur": 54.48,
  "marks": {
   "strips": 3.503,
   "sample": 10.599,
   "touch": 15.052,
   "inside": 21.224,
   "miss": 28.125,
   "prob": 32.93,
   "bound": 37.943,
   "num": 46.432
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1ntos puntos bastan para los rect\u00e1ngulos?"
   ],
   [
    3.503,
    "Se marcan cuatro franjas a lo largo de los lados del concepto, cada una con probabilidad \u00e9psilon sobre cuatro."
   ],
   [
    10.599,
    "Llega una muestra, y el algoritmo devuelve su rect\u00e1ngulo."
   ],
   [
    15.052,
    "Si la muestra tiene un punto en cada franja, el rect\u00e1ngulo tiene un lado dentro de cada una."
   ],
   [
    21.224,
    "Entonces la regi\u00f3n de error queda cubierta por las cuatro franjas, y su probabilidad no pasa de \u00e9psilon."
   ],
   [
    28.125,
    "El algoritmo solo falla si la muestra esquiva alguna franja completa."
   ],
   [
    32.93,
    "La probabilidad de eso decrece exponencialmente con el tama\u00f1o de la muestra."
   ],
   [
    37.943,
    "Al exigir que no pase de delta, se obtiene el tama\u00f1o suficiente: cuatro sobre \u00e9psilon, por el logaritmo de cuatro sobre delta."
   ],
   [
    46.432,
    "Para \u00e9psilon cero punto uno y delta cero punto cero cinco, bastan ciento setenta y seis puntos: los de este dibujo."
   ]
  ]
 },
 "definicion": {
  "dur": 38.016,
  "marks": {
   "def": 3.177,
   "any": 7.76,
   "dist": 9.909,
   "conc": 11.497,
   "poly": 13.49,
   "rect": 19.714,
   "half": 22.148,
   "conf": 25.417,
   "free": 32.057
  },
  "cues": [
   [
    0.102,
    "Ahora, la definici\u00f3n completa."
   ],
   [
    3.177,
    "Una clase de conceptos es PAC-aprendible si existe un algoritmo que cumple esa garant\u00eda para cualquier \u00e9psilon y cualquier delta, para toda distribuci\u00f3n, y para todo concepto de la clase, con un tama\u00f1o de muestra que crece a lo sumo como un polinomio en uno sobre \u00e9psilon y uno sobre delta."
   ],
   [
    19.714,
    "Los rect\u00e1ngulos lo cumplen."
   ],
   [
    22.148,
    "Pedir la mitad de error duplica la muestra."
   ],
   [
    25.417,
    "Y dividir delta por diez agrega menos de cien puntos, porque delta entra dentro de un logaritmo."
   ],
   [
    32.057,
    "El argumento nunca us\u00f3 la forma de la distribuci\u00f3n: la garant\u00eda vale para todas."
   ]
  ]
 },
 "wrap": {
  "dur": 30.336,
  "marks": {
   "w1": 1.823,
   "w2": 9.076,
   "w3": 14.089,
   "w4": 19.961
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un concepto etiqueta los puntos; el aprendiz solo ve una muestra extra\u00edda de una distribuci\u00f3n desconocida."
   ],
   [
    9.076,
    "El error de generalizaci\u00f3n no se puede medir; el emp\u00edrico, s\u00ed."
   ],
   [
    14.089,
    "PAC: con probabilidad de al menos uno menos delta, el error es a lo sumo \u00e9psilon."
   ],
   [
    19.961,
    "Para los rect\u00e1ngulos basta una muestra de tama\u00f1o proporcional a uno sobre \u00e9psilon por el logaritmo de uno sobre delta."
   ],
   [
    27.096,
    "Ahora, la pr\u00e1ctica del cap\u00edtulo."
   ]
  ]
 },
 "final1": {
  "dur": 5.76,
  "marks": {},
  "cues": [
   [
    0.102,
    "Pr\u00e1ctica del cap\u00edtulo."
   ],
   [
    2.396,
    "Para cada frase, elegir el s\u00edmbolo."
   ]
  ]
 },
 "final2": {
  "dur": 5.016,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfQu\u00e9 pasa con el tama\u00f1o de la muestra?"
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
    "Ese fue el cap\u00edtulo dos."
   ]
  ]
 }
};

window.TIMINGS = {
 "intro": {
  "dur": 12.552,
  "marks": {
   "sub": 4.44
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo quince."
   ],
   [
    2.148,
    "Por qu\u00e9 funciona boosting."
   ],
   [
    4.44,
    "M\u00e1s rondas dan un clasificador m\u00e1s complejo, y aun as\u00ed suele generalizar."
   ],
   [
    10.169,
    "La clave es el margen."
   ]
  ]
 },
 "vc": {
  "dur": 40.176,
  "marks": {
   "vc": 6.185,
   "grow": 10.221,
   "fig": 22.643,
   "zero": 26.068,
   "test": 29.271,
   "q": 33.724
  },
  "cues": [
   [
    0.102,
    "Tras T rondas, AdaBoost devuelve el signo de una combinaci\u00f3n de T clasificadores base."
   ],
   [
    6.185,
    "La dimensi\u00f3n VC de ese conjunto de combinaciones se puede acotar, y la cota crece con el n\u00famero de rondas: aproximadamente como T por el logaritmo de T."
   ],
   [
    16.107,
    "Seg\u00fan esta cuenta, m\u00e1s rondas significan m\u00e1s complejidad, y entonces riesgo de sobreajuste."
   ],
   [
    22.643,
    "Pero en muchos experimentos pasa otra cosa."
   ],
   [
    26.068,
    "El error de entrenamiento llega a cero en pocas rondas, y el error de prueba sigue bajando durante muchas rondas m\u00e1s."
   ],
   [
    33.724,
    "\u00bfC\u00f3mo se explica?"
   ],
   [
    35.794,
    "Hace falta mirar algo m\u00e1s fino que el error: el margen."
   ]
  ]
 },
 "margen": {
  "dur": 51.648,
  "marks": {
   "norm": 5.74,
   "def": 11.797,
   "pt": 26.133,
   "all": 32.747,
   "svm": 44.987
  },
  "cues": [
   [
    0.102,
    "Se retoma el ejemplo del cap\u00edtulo anterior: tres rondas, y un voto ponderado, f."
   ],
   [
    5.74,
    "La suma de los tres pesos alfa es la norma uno del vector alfa: dos punto veintiocho."
   ],
   [
    11.797,
    "El margen geom\u00e9trico L uno de un punto es el valor absoluto de f, dividido por esa norma."
   ],
   [
    18.255,
    "Es el voto normalizado: vale uno si todos los clasificadores coinciden, y poco si la votaci\u00f3n sale re\u00f1ida."
   ],
   [
    26.133,
    "En este punto, f vale cero punto cincuenta y siete: su margen es cero punto veinticinco."
   ],
   [
    32.747,
    "Estos son los m\u00e1rgenes de los diez puntos, con signo positivo porque todos quedan bien clasificados."
   ],
   [
    39.57,
    "El menor, cero punto veinticinco, es el margen de f sobre la muestra."
   ],
   [
    44.987,
    "Es la misma idea que en las m\u00e1quinas de vectores de soporte, con la norma uno en lugar de la norma dos."
   ]
  ]
 },
 "q1": {
  "dur": 8.472,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El n\u00famero de cada regi\u00f3n es el valor de f."
   ],
   [
    4.557,
    "\u00bfCu\u00e1l de los tres puntos marcados tiene el menor margen?"
   ]
  ]
 },
 "cota": {
  "dur": 52.104,
  "marks": {
   "sig": 6.224,
   "mix": 18.594,
   "lem": 24.844,
   "bnd": 31.237,
   "terms": 36.523,
   "not": 48.138
  },
  "cues": [
   [
    0.102,
    "Al dividir f por la norma uno, queda una combinaci\u00f3n convexa de clasificadores base."
   ],
   [
    6.224,
    "\u00bfCu\u00e1nto m\u00e1s complejo es el conjunto de esas mezclas que el conjunto base?"
   ],
   [
    10.898,
    "Para medirlo, como antes, se sortean signos, y se calcula la correlaci\u00f3n de cada clasificador con ellos."
   ],
   [
    18.594,
    "La correlaci\u00f3n de una mezcla es un promedio de esas barras: nunca supera a la m\u00e1s alta."
   ],
   [
    24.844,
    "Por eso, la complejidad de Rademacher de las combinaciones convexas es igual a la del conjunto base."
   ],
   [
    31.237,
    "Con eso, la cota por margen ya conocida da una garant\u00eda para boosting."
   ],
   [
    36.523,
    "El error de generalizaci\u00f3n es, a lo sumo, la fracci\u00f3n de puntos con margen menor o igual que ro, m\u00e1s la complejidad del conjunto base dividida por ro, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    48.138,
    "Y lo notable: el n\u00famero de rondas no aparece."
   ]
  ]
 },
 "crece": {
  "dur": 33.384,
  "marks": {
   "zero": 4.857,
   "run": 8.776,
   "min": 11.628,
   "thm": 20.664,
   "exp": 25.703
  },
  "cues": [
   [
    0.102,
    "Ahora, la misma ejecuci\u00f3n, m\u00e1s all\u00e1 de la ronda tres."
   ],
   [
    4.857,
    "El error emp\u00edrico ya es cero, y ah\u00ed se queda."
   ],
   [
    8.776,
    "Pero los m\u00e1rgenes se siguen moviendo."
   ],
   [
    11.628,
    "Con altibajos, el margen m\u00e1s chico sube: de cero punto veinticinco en la ronda tres, a cero punto treinta y tres en la ronda treinta."
   ],
   [
    20.664,
    "No es casualidad."
   ],
   [
    22.799,
    "Un teorema acota la p\u00e9rdida de margen emp\u00edrica, y, si ro es menor que la ventaja gama de los clasificadores base, esa cota decrece exponencialmente con las rondas."
   ]
  ]
 },
 "q2": {
  "dur": 11.016,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Si los m\u00e1rgenes crecen, se puede elegir un ro mayor sin que el primer t\u00e9rmino deje de ser cero."
   ],
   [
    8.216,
    "\u00bfQu\u00e9 t\u00e9rmino de la cota se achica?"
   ]
  ]
 },
 "max": {
  "dur": 40.608,
  "marks": {
   "why": 2.474,
   "lp": 9.531,
   "sol": 17.396,
   "ada": 24.727,
   "no": 27.943,
   "emp": 34.427
  },
  "cues": [
   [
    0.102,
    "Esa es la explicaci\u00f3n."
   ],
   [
    2.474,
    "Con m\u00e1rgenes m\u00e1s grandes se puede usar un ro mayor, y la cota mejora aunque el error de entrenamiento ya sea cero."
   ],
   [
    9.531,
    "Entonces, \u00bfpor qu\u00e9 no buscar directamente el margen m\u00e1ximo?"
   ],
   [
    14.284,
    "Se puede: es un programa lineal."
   ],
   [
    17.396,
    "Con los tres clasificadores del ejemplo, la soluci\u00f3n les da el mismo peso, y el margen m\u00e1ximo es un tercio."
   ],
   [
    24.727,
    "Aqu\u00ed AdaBoost se acerca a ese valor."
   ],
   [
    27.943,
    "En general no lo alcanza: lo garantizado es que llega, al menos, a la mitad del m\u00e1ximo."
   ],
   [
    34.427,
    "Y, curiosamente, maximizar el margen no siempre da mejores resultados en la pr\u00e1ctica."
   ]
  ]
 },
 "juego": {
  "dur": 53.304,
  "marks": {
   "mat": 5.273,
   "row": 13.047,
   "col": 18.906,
   "vn": 25.13,
   "eq": 31.862,
   "weak": 40.859
  },
  "cues": [
   [
    0.102,
    "Hay otra forma de ver todo esto: como un juego entre dos jugadores."
   ],
   [
    5.273,
    "La matriz tiene una fila por punto y una columna por clasificador base: m\u00e1s uno si acierta, menos uno si falla."
   ],
   [
    13.047,
    "Un jugador elige puntos, con una distribuci\u00f3n D, y busca los dif\u00edciles."
   ],
   [
    18.906,
    "El otro elige clasificadores, con los pesos alfa normalizados, y busca acertar."
   ],
   [
    25.13,
    "El teorema minimax de von Neumann dice que da lo mismo qui\u00e9n juega primero: el juego tiene un valor."
   ],
   [
    31.862,
    "Para boosting, ese valor es a la vez el margen m\u00e1ximo y el doble de la mejor ventaja garantizada."
   ],
   [
    38.62,
    "Aqu\u00ed, un tercio."
   ],
   [
    40.859,
    "Es decir: la condici\u00f3n de aprendizaje d\u00e9bil equivale a que exista una combinaci\u00f3n con margen positivo."
   ],
   [
    47.526,
    "Parec\u00eda una condici\u00f3n m\u00ednima, y es fuerte: exige una muestra separable."
   ]
  ]
 },
 "ruido": {
  "dur": 46.512,
  "marks": {
   "flip": 3.594,
   "w": 7.383,
   "front": 14.935,
   "stop": 18.372,
   "reg": 26.055,
   "pros": 33.776,
   "cons": 39.818
  },
  "cues": [
   [
    0.102,
    "En la pr\u00e1ctica, las muestras tienen ruido."
   ],
   [
    3.594,
    "Por ejemplo, un punto con la etiqueta cambiada."
   ],
   [
    7.383,
    "AdaBoost insiste en los puntos dif\u00edciles: tras treinta rondas, ese solo punto carga m\u00e1s de un cuarto del peso total, y la frontera cambia por completo para acomodarlo."
   ],
   [
    18.372,
    "Hay dos frenos."
   ],
   [
    20.417,
    "Uno es detenerse antes: el n\u00famero de rondas se elige por validaci\u00f3n cruzada."
   ],
   [
    26.055,
    "El otro es regularizar: a la p\u00e9rdida exponencial se le suma la norma uno de los pesos, multiplicada por lambda."
   ],
   [
    33.776,
    "En el balance, AdaBoost es simple, r\u00e1pido, y tiene garant\u00edas te\u00f3ricas."
   ],
   [
    39.818,
    "A cambio, hay que elegir el n\u00famero de rondas y los clasificadores base, y es sensible al ruido."
   ]
  ]
 },
 "wrap": {
  "dur": 32.136,
  "marks": {
   "w1": 1.823,
   "w2": 8.099,
   "w3": 13.49,
   "w4": 21.094
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "La cota por dimensi\u00f3n VC crece con las rondas, pero el error de prueba puede seguir bajando."
   ],
   [
    8.099,
    "El margen L uno de un punto es su voto normalizado: mide la confianza."
   ],
   [
    13.49,
    "La cota por margen no depende del n\u00famero de rondas, y AdaBoost sigue agrandando los m\u00e1rgenes despu\u00e9s de separar la muestra."
   ],
   [
    21.094,
    "Por el teorema minimax, aprendizaje d\u00e9bil equivale a margen positivo."
   ],
   [
    26.341,
    "El punto d\u00e9bil es el ruido."
   ],
   [
    28.893,
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
  "dur": 4.272,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo quince."
   ]
  ]
 }
};

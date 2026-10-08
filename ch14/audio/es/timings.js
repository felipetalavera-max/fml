window.TIMINGS = {
 "intro": {
  "dur": 9.96,
  "marks": {
   "sub": 3.971
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo catorce."
   ],
   [
    2.292,
    "AdaBoost."
   ],
   [
    3.971,
    "Muchos clasificadores mediocres, combinados ronda a ronda, dan uno preciso."
   ]
  ]
 },
 "debil": {
  "dur": 44.256,
  "marks": {
   "stump": 7.63,
   "sweep": 15.234,
   "best": 20.143,
   "weak": 24.128,
   "q": 34.05
  },
  "cues": [
   [
    0.102,
    "Encontrar de una vez un clasificador preciso suele ser dif\u00edcil."
   ],
   [
    4.766,
    "Encontrar uno mediocre es f\u00e1cil."
   ],
   [
    7.63,
    "Por ejemplo, un umbral sobre una sola coordenada: de un lado dice m\u00e1s uno, y del otro, menos uno."
   ],
   [
    15.234,
    "Al mover el umbral, el error cambia, pero nunca llega a cero."
   ],
   [
    20.143,
    "El mejor de todos se equivoca en dos de los diez puntos."
   ],
   [
    24.128,
    "A un aprendiz d\u00e9bil se le pide solo eso: un error menor que un medio por alg\u00fan margen gama."
   ],
   [
    30.677,
    "Es decir, algo mejor que el azar."
   ],
   [
    34.05,
    "La pregunta del boosting es si muchos clasificadores as\u00ed se pueden combinar en uno preciso."
   ],
   [
    39.779,
    "La respuesta es s\u00ed, y AdaBoost es la receta m\u00e1s conocida."
   ]
  ]
 },
 "r1": {
  "dur": 60.912,
  "marks": {
   "d1": 5.456,
   "h": 13.255,
   "eps": 21.25,
   "al": 26.771,
   "up": 39.193,
   "z": 49.479,
   "half": 54.531
  },
  "cues": [
   [
    0.102,
    "AdaBoost trabaja por rondas, y lleva un peso para cada punto de la muestra."
   ],
   [
    5.456,
    "Al comienzo todos pesan lo mismo: un d\u00e9cimo."
   ],
   [
    9.232,
    "Los pesos suman uno: forman una distribuci\u00f3n."
   ],
   [
    13.255,
    "En cada ronda se elige el clasificador base de menor error ponderado: el error es la suma de los pesos de los puntos que falla."
   ],
   [
    21.25,
    "Este falla dos puntos: su error, \u00e9psilon, es cero punto dos."
   ],
   [
    26.771,
    "Con ese error se calcula alfa, el peso que tendr\u00e1 este clasificador en el voto final."
   ],
   [
    32.721,
    "Cuanto menor es el error, mayor es alfa."
   ],
   [
    36.068,
    "Aqu\u00ed, cero punto sesenta y nueve."
   ],
   [
    39.193,
    "Ahora, el paso clave."
   ],
   [
    41.849,
    "El peso de cada punto fallado se multiplica por e a la alfa, y el de cada punto acertado, por e a la menos alfa."
   ],
   [
    49.479,
    "Despu\u00e9s se divide todo por Z, para que los pesos vuelvan a sumar uno."
   ],
   [
    54.531,
    "Los dos puntos fallados pasan a pesar un cuarto cada uno: juntos, la mitad del total."
   ]
  ]
 },
 "q1": {
  "dur": 9.504,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "La misma ronda, antes de actualizar los pesos."
   ],
   [
    5.833,
    "\u00bfCu\u00e1l de los tres puntos marcados va a pesar m\u00e1s?"
   ]
  ]
 },
 "r23": {
  "dur": 39.816,
  "marks": {
   "h2": 3.503,
   "e2": 13.112,
   "u2": 19.154,
   "h3": 23.346,
   "e3": 27.982,
   "u3": 33.49
  },
  "cues": [
   [
    0.102,
    "Segunda ronda, con los pesos nuevos."
   ],
   [
    3.503,
    "El umbral anterior ya no conviene: fallar los dos puntos grandes cuesta caro."
   ],
   [
    9.01,
    "Ahora gana un umbral horizontal, que los acierta."
   ],
   [
    13.112,
    "Falla tres puntos, pero livianos: su error ponderado es cero punto diecinueve."
   ],
   [
    19.154,
    "Otra vez crecen los puntos fallados y se achican los dem\u00e1s."
   ],
   [
    23.346,
    "Tercera ronda: gana un umbral vertical, a la izquierda."
   ],
   [
    27.982,
    "Falla cuatro puntos, y aun as\u00ed su error es el menor: cero punto quince."
   ],
   [
    33.49,
    "As\u00ed, cada ronda obliga al clasificador siguiente a ocuparse de lo que los anteriores hicieron mal."
   ]
  ]
 },
 "suma": {
  "dur": 37.512,
  "marks": {
   "w": 3.633,
   "sum": 8.685,
   "ex": 13.125,
   "sign": 24.44,
   "front": 27.956,
   "zero": 31.953
  },
  "cues": [
   [
    0.102,
    "Al terminar, los clasificadores votan."
   ],
   [
    3.633,
    "Cada uno entra con su peso alfa: los m\u00e1s precisos pesan m\u00e1s."
   ],
   [
    8.685,
    "En cada regi\u00f3n del plano se suman los votos, con su signo."
   ],
   [
    13.125,
    "En la regi\u00f3n del centro, dos votan m\u00e1s uno, y el tercero, el de mayor peso, vota menos uno."
   ],
   [
    20.26,
    "La suma da cero punto cincuenta y siete: positiva."
   ],
   [
    24.44,
    "La hip\u00f3tesis final es el signo de esa suma."
   ],
   [
    27.956,
    "Su frontera ya no es un umbral: tiene escalones."
   ],
   [
    31.953,
    "Y clasifica bien los diez puntos, algo que ning\u00fan umbral lograba por s\u00ed solo."
   ]
  ]
 },
 "q2": {
  "dur": 8.856,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Los mismos tres clasificadores y un punto nuevo."
   ],
   [
    5.729,
    "\u00bfQu\u00e9 etiqueta le da el voto ponderado?"
   ]
  ]
 },
 "cota": {
  "dur": 48.456,
  "marks": {
   "err": 3.281,
   "up": 11.667,
   "bnd": 16.029,
   "exp": 24.167,
   "gam": 32.891,
   "ada": 39.44
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 tan r\u00e1pido mejora la combinaci\u00f3n?"
   ],
   [
    3.281,
    "Las barras muestran el error emp\u00edrico despu\u00e9s de cada ronda: cero punto dos, cero punto tres, y cero desde la tercera."
   ],
   [
    11.667,
    "No baja en todos los pasos: en la segunda ronda sube."
   ],
   [
    16.029,
    "Pero hay una cota que baja siempre."
   ],
   [
    18.828,
    "El teorema dice que el error emp\u00edrico es, a lo sumo, una exponencial."
   ],
   [
    24.167,
    "En el exponente se suma, ronda a ronda, el cuadrado de la ventaja de cada clasificador sobre el azar: un medio menos \u00e9psilon."
   ],
   [
    32.891,
    "Si todas las ventajas son al menos gama, la cota decrece exponencialmente con el n\u00famero de rondas."
   ],
   [
    39.44,
    "Y el algoritmo no necesita conocer gama: se adapta al error de cada ronda."
   ],
   [
    45.143,
    "De ah\u00ed su nombre: boosting adaptativo."
   ]
  ]
 },
 "desc": {
  "dur": 47.952,
  "marks": {
   "loss": 2.591,
   "prod": 13.464,
   "phi": 19.648,
   "min": 24.141,
   "less": 27.93,
   "cd": 36.016
  },
  "cues": [
   [
    0.102,
    "\u00bfDe d\u00f3nde sale esa cota?"
   ],
   [
    2.591,
    "De la p\u00e9rdida exponencial, la sustituta convexa de la p\u00e9rdida cero uno."
   ],
   [
    7.904,
    "Su promedio sobre la muestra, F, nunca es menor que el error emp\u00edrico."
   ],
   [
    13.464,
    "Y en AdaBoost ese promedio es exactamente el producto de los factores Z de todas las rondas."
   ],
   [
    19.648,
    "En una ronda, Z depende del valor de alfa que se elija."
   ],
   [
    24.141,
    "El alfa de AdaBoost es justo el que lo hace m\u00ednimo."
   ],
   [
    27.93,
    "Como el error es menor que un medio, ese m\u00ednimo es menor que uno: cada ronda multiplica F por un n\u00famero menor que uno."
   ],
   [
    36.016,
    "Eso es un descenso por coordenadas sobre F."
   ],
   [
    39.518,
    "En cada ronda se elige una direcci\u00f3n, que es un clasificador base, y el mejor paso en esa direcci\u00f3n, que es alfa."
   ]
  ]
 },
 "uso": {
  "dur": 41.928,
  "marks": {
   "thr": 6.224,
   "all": 12.396,
   "cost": 18.32,
   "t": 27.956,
   "xor": 32.539
  },
  "cues": [
   [
    0.102,
    "En la pr\u00e1ctica, los clasificadores base m\u00e1s usados son justamente estos umbrales."
   ],
   [
    6.224,
    "En cada coordenada, con m puntos, hay a lo sumo m m\u00e1s uno umbrales distintos."
   ],
   [
    12.396,
    "En cada ronda se prueban todos, en todas las coordenadas, y se elige el mejor."
   ],
   [
    18.32,
    "Si los puntos se ordenan una sola vez, al comienzo, cada ronda cuesta un tiempo proporcional a m por N, donde N es el n\u00famero de coordenadas."
   ],
   [
    27.956,
    "El n\u00famero de rondas, T, es el par\u00e1metro del algoritmo."
   ],
   [
    32.539,
    "Una advertencia: el mejor umbral no siempre es un aprendiz d\u00e9bil."
   ],
   [
    37.305,
    "Con cuatro puntos en cruz, ning\u00fan umbral supera al azar."
   ]
  ]
 },
 "wrap": {
  "dur": 33.192,
  "marks": {
   "w1": 1.823,
   "w2": 7.943,
   "w3": 15.716,
   "w4": 21.549
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Boosting combina clasificadores base, apenas mejores que el azar, en uno preciso."
   ],
   [
    7.943,
    "AdaBoost elige en cada ronda el de menor error ponderado, y sube el peso de los puntos que ese clasificador falla."
   ],
   [
    15.716,
    "La hip\u00f3tesis final es el signo de la suma de todos, cada uno con su peso alfa."
   ],
   [
    21.549,
    "Y el error emp\u00edrico baja exponencialmente con el n\u00famero de rondas, porque cada ronda es un paso de descenso sobre la p\u00e9rdida exponencial."
   ],
   [
    29.948,
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
  "dur": 4.416,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo catorce."
   ]
  ]
 }
};

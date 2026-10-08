window.TIMINGS = {
 "intro": {
  "dur": 9.912,
  "marks": {
   "sub": 5.977
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta."
   ],
   [
    2.214,
    "Manifold learning y el lema de Johnson-Lindenstrauss."
   ],
   [
    5.977,
    "Desenrollar los datos, y proyectarlos al azar."
   ]
  ]
 },
 "geo": {
  "dur": 40.68,
  "marks": {
   "sp": 13.411,
   "st": 19.766,
   "gr": 26.315,
   "path": 31.289,
   "num": 35.182
  },
  "cues": [
   [
    0.102,
    "Varios m\u00e9todos no lineales suponen que los datos viven sobre una variedad de baja dimensi\u00f3n, o cerca de ella: una curva o una superficie dentro del espacio de entrada."
   ],
   [
    10.573,
    "En ingl\u00e9s, manifold learning."
   ],
   [
    13.411,
    "Aqu\u00ed, una espiral en el plano."
   ],
   [
    16.315,
    "El color solo sirve para seguir los puntos."
   ],
   [
    19.766,
    "Estos dos puntos est\u00e1n cerca en l\u00ednea recta."
   ],
   [
    23.398,
    "Pero sobre la espiral est\u00e1n lejos."
   ],
   [
    26.315,
    "Isomap mide esa distancia as\u00ed: une cada punto con sus vecinos m\u00e1s cercanos, y suma los saltos del camino m\u00e1s corto por ese grafo."
   ],
   [
    35.182,
    "Aqu\u00ed da cincuenta y siete punto cinco, contra seis punto tres en l\u00ednea recta."
   ]
  ]
 },
 "q1": {
  "dur": 8.928,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres pares de puntos sobre la misma espiral."
   ],
   [
    5.221,
    "\u00bfEn cu\u00e1l es mayor la distancia a lo largo del grafo?"
   ]
  ]
 },
 "iso": {
  "dur": 41.376,
  "marks": {
   "tab": 4.633,
   "dc": 7.5,
   "eig": 14.766,
   "un": 21.654,
   "ker": 30.469
  },
  "cues": [
   [
    0.102,
    "Con los caminos m\u00e1s cortos entre todos los pares, Isomap arma una tabla: la matriz de distancias al cuadrado."
   ],
   [
    7.5,
    "El doble centrado, que resta las medias por fila y por columna, la convierte en una matriz de similitud."
   ],
   [
    14.766,
    "La representaci\u00f3n sale de sus k vectores propios principales, escalados por la ra\u00edz de su valor propio."
   ],
   [
    21.654,
    "Con k igual a uno, la espiral se desenrolla en una recta: el orden se conserva, y las distancias a lo largo del grafo, tambi\u00e9n."
   ],
   [
    30.469,
    "Esa matriz de similitud se puede leer como una matriz de kernel, siempre que sea semidefinida positiva."
   ],
   [
    37.448,
    "As\u00ed, Isomap es un caso de kernel P C A."
   ]
  ]
 },
 "lap": {
  "dur": 44.832,
  "marks": {
   "w": 5.651,
   "obj": 12.07,
   "lap": 20.938,
   "sol": 26.732,
   "fly": 32.096,
   "kp": 38.685
  },
  "cues": [
   [
    0.102,
    "Laplacian eigenmaps pide menos: conservar solo las relaciones de vecindad."
   ],
   [
    5.651,
    "Cada arista del grafo recibe un peso gaussiano: mayor cuanto m\u00e1s cerca est\u00e1n sus dos puntos."
   ],
   [
    12.07,
    "Se busca la representaci\u00f3n que minimiza la suma de los pesos por las distancias al cuadrado."
   ],
   [
    17.786,
    "As\u00ed, los vecinos quedan cerca."
   ],
   [
    20.938,
    "La soluci\u00f3n usa el laplaciano del grafo: la matriz de grados menos la de pesos."
   ],
   [
    26.732,
    "Son sus vectores propios de menor valor propio, sin contar el del valor cero."
   ],
   [
    32.096,
    "Aqu\u00ed el orden tambi\u00e9n se conserva, pero las distancias no: los extremos quedan apretados."
   ],
   [
    38.685,
    "Y es otro caso de kernel P C A: la matriz de kernel es la pseudoinversa del laplaciano."
   ]
  ]
 },
 "q2": {
  "dur": 11.952,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Los mismos puntos sobre una recta, de tres maneras, con las aristas del grafo dibujadas como arcos."
   ],
   [
    8.867,
    "\u00bfEn cu\u00e1l quedan m\u00e1s cerca los vecinos?"
   ]
  ]
 },
 "lle": {
  "dur": 42.096,
  "marks": {
   "rec": 4.518,
   "wt": 11.198,
   "low": 16.354,
   "sol": 23.346,
   "fly": 31.328,
   "kp": 35.859
  },
  "cues": [
   [
    0.102,
    "El tercer m\u00e9todo es L L E, locally linear embedding."
   ],
   [
    4.518,
    "Primero, cada punto se reconstruye como combinaci\u00f3n de sus vecinos, con pesos que suman uno."
   ],
   [
    11.198,
    "Se eligen los pesos que hacen m\u00ednimo el error de reconstrucci\u00f3n, en rosa."
   ],
   [
    16.354,
    "Despu\u00e9s se busca la representaci\u00f3n de baja dimensi\u00f3n en la que cada punto se reconstruye con esos mismos pesos."
   ],
   [
    23.346,
    "La soluci\u00f3n son, otra vez, vectores propios de menor valor propio, ahora de una matriz armada con los pesos."
   ],
   [
    31.328,
    "Aqu\u00ed, la espiral queda de nuevo desenrollada y en orden."
   ],
   [
    35.859,
    "L L E tambi\u00e9n coincide con kernel P C A, con una matriz de kernel particular."
   ]
  ]
 },
 "jl1": {
  "dur": 41.688,
  "marks": {
   "pts": 4.844,
   "A": 12.565,
   "k5": 20.716,
   "k20": 25.872,
   "k80": 28.216,
   "lem": 31.354
  },
  "cues": [
   [
    0.102,
    "Ahora, otro resultado: el lema de Johnson-Lindenstrauss."
   ],
   [
    4.844,
    "Treinta puntos en dimensi\u00f3n mil."
   ],
   [
    7.539,
    "No se pueden dibujar: se muestra la tabla de sus distancias al cuadrado."
   ],
   [
    12.565,
    "Se proyectan con una matriz aleatoria: k filas de n\u00fameros sorteados de una normal est\u00e1ndar, dividida por la ra\u00edz de k."
   ],
   [
    20.716,
    "Con k igual a cinco, la tabla proyectada se parece poco a la original."
   ],
   [
    25.872,
    "Con veinte, mejora."
   ],
   [
    28.216,
    "Con ochenta, ya se parece mucho."
   ],
   [
    31.354,
    "La raz\u00f3n es el lema quince punto tres: la norma al cuadrado de un vector proyectado se concentra alrededor de la original, con una probabilidad que crece r\u00e1pido con k."
   ]
  ]
 },
 "jl2": {
  "dur": 43.632,
  "marks": {
   "h5": 11.484,
   "h20": 19.896,
   "h80": 23.438,
   "lem": 25.938,
   "hK": 33.477,
   "N": 38.307
  },
  "cues": [
   [
    0.102,
    "Ahora, todos los pares a la vez."
   ],
   [
    3.464,
    "Para cada uno de los cuatrocientos treinta y cinco pares se calcula el cociente entre la distancia proyectada y la original, al cuadrado."
   ],
   [
    11.484,
    "Con k igual a cinco, los cocientes se dispersan: doscientos diez pares quedan fuera de la franja de uno m\u00e1s o menos cero punto cuatro."
   ],
   [
    19.896,
    "Con veinte, quedan fuera setenta y tres."
   ],
   [
    23.438,
    "Con ochenta, tres."
   ],
   [
    25.938,
    "El lema quince punto cuatro dice cu\u00e1nto basta: k igual a veinte por el logaritmo de m, sobre \u00e9psilon al cuadrado."
   ],
   [
    33.477,
    "Aqu\u00ed, cuatrocientos veintis\u00e9is: ning\u00fan par queda fuera."
   ],
   [
    38.307,
    "Y lo notable: esa dimensi\u00f3n no depende de N, la dimensi\u00f3n original."
   ]
  ]
 },
 "wrap": {
  "dur": 37.68,
  "marks": {
   "w1": 1.823,
   "w2": 9.01,
   "w3": 16.667,
   "w4": 22.07
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Isomap conserva las distancias geod\u00e9sicas, aproximadas por caminos m\u00e1s cortos en el grafo de vecinos."
   ],
   [
    9.01,
    "Laplacian eigenmaps y L L E conservan solo las relaciones de vecindad, con vectores propios de menor valor propio."
   ],
   [
    16.667,
    "Los tres son casos de kernel P C A, cada uno con su matriz de kernel."
   ],
   [
    22.07,
    "Y el lema de Johnson-Lindenstrauss: una proyecci\u00f3n aleatoria a una dimensi\u00f3n del orden del logaritmo de m, sobre \u00e9psilon al cuadrado, conserva todas las distancias con factor uno m\u00e1s o menos \u00e9psilon."
   ],
   [
    34.427,
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
  "dur": 4.392,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una cuenta con el lema."
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
    "Ese fue el cap\u00edtulo treinta."
   ]
  ]
 }
};

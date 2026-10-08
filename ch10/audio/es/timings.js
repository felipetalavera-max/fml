window.TIMINGS = {
 "intro": {
  "dur": 15.528,
  "marks": {
   "sub": 5.599
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo diez."
   ],
   [
    2.201,
    "El caso no separable y la teor\u00eda del margen."
   ],
   [
    5.599,
    "En la pr\u00e1ctica, casi ninguna muestra se deja separar por una recta."
   ],
   [
    10.521,
    "Hace falta tolerar errores, y una raz\u00f3n para confiar en el margen."
   ]
  ]
 },
 "holgura": {
  "dur": 48.096,
  "marks": {
   "new": 5.339,
   "swing": 9.974,
   "relax": 14.753,
   "seg": 22.526,
   "in": 27.357,
   "bad": 33.099,
   "soft": 37.044
  },
  "cues": [
   [
    0.102,
    "Este es el plano del cap\u00edtulo anterior, con su recta de margen m\u00e1ximo."
   ],
   [
    5.339,
    "Se agregan dos puntos, cada uno en la zona de la otra clase."
   ],
   [
    9.974,
    "Ya ninguna recta separa la muestra: siempre queda alg\u00fan error."
   ],
   [
    14.753,
    "La salida es relajar las restricciones: a cada punto se le permite una holgura, xi, mayor o igual que cero."
   ],
   [
    22.526,
    "La holgura mide cu\u00e1nto le falta al punto para llegar a su hiperplano marginal."
   ],
   [
    27.357,
    "Si es menor que uno, el punto est\u00e1 dentro de la franja, pero bien clasificado."
   ],
   [
    33.099,
    "Si es mayor que uno, qued\u00f3 del lado equivocado."
   ],
   [
    37.044,
    "Los puntos con holgura positiva se llaman at\u00edpicos."
   ],
   [
    41.016,
    "Sin ellos, la recta separa al resto con un margen de uno sobre la norma de w: el margen blando."
   ]
  ]
 },
 "primal": {
  "dur": 45.408,
  "marks": {
   "slack": 2.826,
   "marg": 4.701,
   "prob": 11.367,
   "c": 19.492,
   "small": 22.37,
   "big": 31.628,
   "cv": 38.867
  },
  "cues": [
   [
    0.102,
    "Hay dos objetivos en conflicto."
   ],
   [
    2.826,
    "Que la holgura total sea poca, y que el margen sea grande."
   ],
   [
    7.201,
    "Pero un margen m\u00e1s grande deja m\u00e1s puntos dentro de la franja."
   ],
   [
    11.367,
    "El problema de optimizaci\u00f3n suma las dos cosas: un medio de la norma de w al cuadrado, m\u00e1s C por la suma de las holguras."
   ],
   [
    19.492,
    "El par\u00e1metro C fija el compromiso."
   ],
   [
    22.37,
    "Con C peque\u00f1o, la holgura cuesta poco y la franja se ensancha: con C igual a cero punto uno, el margen sube a uno punto sesenta y cinco."
   ],
   [
    31.628,
    "Con C grande, la franja se angosta: con C igual a cien, el margen baja a cero punto veintid\u00f3s."
   ],
   [
    38.867,
    "El problema sigue siendo convexo, y C se elige, por lo general, con validaci\u00f3n cruzada."
   ]
  ]
 },
 "q1": {
  "dur": 7.008,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "La misma muestra, resuelta con tres valores de C."
   ],
   [
    4.831,
    "\u00bfCu\u00e1l es el m\u00e1s grande?"
   ]
  ]
 },
 "bisagra": {
  "dur": 39.912,
  "marks": {
   "plot": 5.964,
   "hinge": 11.419,
   "step": 22.07,
   "np": 25.456,
   "reg": 28.333
  },
  "cues": [
   [
    0.102,
    "En la soluci\u00f3n, la holgura no es una inc\u00f3gnita aparte: la recta la deja fijada."
   ],
   [
    5.964,
    "Se ubica cada punto seg\u00fan su valor: la etiqueta por w por x m\u00e1s b."
   ],
   [
    11.419,
    "Si ese valor llega a uno, la holgura es cero."
   ],
   [
    15.365,
    "Si no, es justo lo que falta."
   ],
   [
    18.385,
    "Esa es la p\u00e9rdida bisagra del cap\u00edtulo ocho."
   ],
   [
    22.07,
    "Es convexa y queda por encima de la p\u00e9rdida cero uno, que ser\u00eda intratable de minimizar."
   ],
   [
    28.333,
    "As\u00ed, SVM minimiza una suma conocida: un t\u00e9rmino que controla la complejidad, m\u00e1s C por la p\u00e9rdida bisagra en la muestra."
   ],
   [
    37.175,
    "Es una forma de regularizaci\u00f3n."
   ]
  ]
 },
 "soporte": {
  "dur": 48.672,
  "marks": {
   "w": 2.591,
   "zero": 10.026,
   "sv": 15.065,
   "on": 21.055,
   "out": 26.289,
   "cap": 31.615,
   "dual": 34.505,
   "box": 39.531,
   "inner": 44.401
  },
  "cues": [
   [
    0.102,
    "\u00bfY los vectores de soporte?"
   ],
   [
    2.591,
    "Igual que antes, w es una combinaci\u00f3n lineal de los puntos, con un coeficiente alfa para cada uno."
   ],
   [
    10.026,
    "Los puntos fuera de la franja, del lado correcto, tienen alfa cero."
   ],
   [
    15.065,
    "Los dem\u00e1s son vectores de soporte: aqu\u00ed, siete de catorce, de dos tipos."
   ],
   [
    21.055,
    "Tres est\u00e1n justo sobre un hiperplano marginal, como en el caso separable."
   ],
   [
    26.289,
    "Los otros cuatro son los at\u00edpicos, y en ellos alfa vale exactamente C."
   ],
   [
    31.615,
    "Ning\u00fan coeficiente pasa de C."
   ],
   [
    34.505,
    "El problema dual lo muestra directo: tiene el mismo objetivo que en el caso separable, y solo cambia una restricci\u00f3n: cada alfa queda entre cero y C."
   ],
   [
    44.401,
    "La muestra sigue entrando solo a trav\u00e9s de productos internos."
   ]
  ]
 },
 "q2": {
  "dur": 8.808,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Otra soluci\u00f3n, con C m\u00e1s peque\u00f1o."
   ],
   [
    5.273,
    "\u00bfEn cu\u00e1l de los puntos marcados alfa vale C?"
   ]
  ]
 },
 "dimension": {
  "dur": 40.248,
  "marks": {
   "vc": 3.06,
   "bound": 8.594,
   "grow": 13.867,
   "one": 19.922,
   "free": 24.961,
   "conf": 28.698
  },
  "cues": [
   [
    0.102,
    "Falta la garant\u00eda de aprendizaje."
   ],
   [
    3.06,
    "En dimensi\u00f3n N, los hiperplanos tienen dimensi\u00f3n VC igual a N m\u00e1s uno."
   ],
   [
    8.594,
    "En la cota del cap\u00edtulo cinco, el t\u00e9rmino de complejidad crece con N."
   ],
   [
    13.867,
    "Con diez mil ejemplos y dimensi\u00f3n dos, es muy peque\u00f1o."
   ],
   [
    18.216,
    "Pero sube con la dimensi\u00f3n, y antes de llegar a dos mil ya pasa de uno: la cota deja de informar."
   ],
   [
    24.961,
    "Las garant\u00edas que siguen no dependen de la dimensi\u00f3n."
   ],
   [
    28.698,
    "Usan el margen de confianza de una hip\u00f3tesis a valores reales: el n\u00famero y por h de x."
   ],
   [
    35.234,
    "Su signo dice si acierta; su tama\u00f1o, con cu\u00e1nta confianza."
   ]
  ]
 },
 "perdida": {
  "dur": 40.368,
  "marks": {
   "step": 3.711,
   "ramp": 7.305,
   "mid": 14.362,
   "emp": 18.19,
   "grow": 26.549,
   "shrink": 30.13,
   "lip": 34.831
  },
  "cues": [
   [
    0.102,
    "Con ese margen se define la p\u00e9rdida de margen."
   ],
   [
    3.711,
    "La p\u00e9rdida cero uno salta de uno a cero."
   ],
   [
    7.305,
    "La de margen baja por una rampa: vale uno si se falla, y cero si el margen de confianza llega a rho."
   ],
   [
    14.362,
    "Entre medio, castiga en proporci\u00f3n a lo que falta."
   ],
   [
    18.19,
    "Su promedio en la muestra es la p\u00e9rdida de margen emp\u00edrica: cuenta enteros los errores, y en parte los aciertos con poca confianza."
   ],
   [
    26.549,
    "Si se pide un margen m\u00e1s grande, sube."
   ],
   [
    30.13,
    "Si se pide uno muy peque\u00f1o, vuelve a ser el error emp\u00edrico."
   ],
   [
    34.831,
    "Y un detalle hace funcionar la teor\u00eda: la pendiente de la rampa es uno sobre rho."
   ]
  ]
 },
 "cota": {
  "dur": 51.84,
  "marks": {
   "thm": 2.435,
   "t1": 9.492,
   "t2": 11.51,
   "t3": 14.922,
   "rad": 17.565,
   "cor": 29.44,
   "dim": 31.367,
   "wide": 34.453,
   "good": 40.221,
   "svm": 46.471
  },
  "cues": [
   [
    0.102,
    "Ahora, la cota."
   ],
   [
    2.435,
    "Fijado un margen rho, con probabilidad alta, el error de generalizaci\u00f3n de cada hip\u00f3tesis es, como mucho, su p\u00e9rdida de margen emp\u00edrica, m\u00e1s dos sobre rho por la complejidad de Rademacher del conjunto, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    17.565,
    "Para hip\u00f3tesis lineales, si los datos caben en una bola de radio r y la norma de w no pasa de lambda may\u00fascula, esa complejidad vale como mucho r por lambda sobre ra\u00edz de m."
   ],
   [
    29.44,
    "Al juntar los dos resultados, la dimensi\u00f3n del espacio no aparece."
   ],
   [
    34.453,
    "Cuenta el margen comparado con el radio: cuanto m\u00e1s ancho, m\u00e1s peque\u00f1o el t\u00e9rmino."
   ],
   [
    40.221,
    "Si con un margen grande la p\u00e9rdida de margen emp\u00edrica sigue siendo poca, la garant\u00eda es buena."
   ],
   [
    46.471,
    "Por eso SVM busca, a la vez, margen grande y poca holgura."
   ]
  ]
 },
 "wrap": {
  "dur": 26.928,
  "marks": {
   "w1": 1.823,
   "w2": 6.484,
   "w3": 10.977,
   "w4": 17.982
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Si la muestra no es separable, cada punto recibe una holgura."
   ],
   [
    6.484,
    "C fija el compromiso entre margen grande y poca holgura total."
   ],
   [
    10.977,
    "Los vectores de soporte est\u00e1n sobre el margen o son at\u00edpicos, y en el dual cada alfa queda entre cero y C."
   ],
   [
    17.982,
    "Y la cota por margen no depende de la dimensi\u00f3n: importa el margen frente al radio."
   ],
   [
    23.685,
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
  "dur": 4.296,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo diez."
   ]
  ]
 }
};

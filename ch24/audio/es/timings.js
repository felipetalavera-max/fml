window.TIMINGS = {
 "intro": {
  "dur": 11.136,
  "marks": {
   "sub": 4.74
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veinticuatro."
   ],
   [
    2.37,
    "Algoritmos de regresi\u00f3n."
   ],
   [
    4.74,
    "Cuatro maneras de elegir una hip\u00f3tesis lineal, y lo que cada una hace con la norma de los pesos."
   ]
  ]
 },
 "lin": {
  "dur": 52.824,
  "marks": {
   "fam": 7.891,
   "min": 14.206,
   "move": 18.854,
   "closed": 23.75,
   "many": 33.216,
   "pol": 36.836,
   "norm": 46.445
  },
  "cues": [
   [
    0.102,
    "El cap\u00edtulo anterior dej\u00f3 una lecci\u00f3n: a igual error emp\u00edrico, conviene el conjunto de hip\u00f3tesis menos complejo."
   ],
   [
    7.891,
    "Las hip\u00f3tesis lineales son una familia as\u00ed."
   ],
   [
    11.328,
    "El algoritmo m\u00e1s simple es la regresi\u00f3n lineal: elegir la que tiene el menor error cuadr\u00e1tico medio sobre la muestra."
   ],
   [
    18.854,
    "En el dibujo, la recta que deja la menor \u00e1rea total de cuadrados."
   ],
   [
    23.75,
    "El problema es convexo y tiene soluci\u00f3n cerrada: un sistema lineal, que se resuelve con una inversa o, si no existe, con la pseudoinversa."
   ],
   [
    33.216,
    "Pero el algoritmo solo mira el error emp\u00edrico."
   ],
   [
    36.836,
    "Con once caracter\u00edsticas, las potencias de x, la curva pasa por los doce puntos: error emp\u00edrico cero, y fuera de ellos se dispara."
   ],
   [
    46.445,
    "Nada controla la norma de los pesos, as\u00ed que no hay una garant\u00eda fuerte de generalizaci\u00f3n."
   ]
  ]
 },
 "krr": {
  "dur": 57.936,
  "marks": {
   "obj": 4.857,
   "ker": 13.685,
   "small": 19.544,
   "big": 25.026,
   "mid": 29.427,
   "prim": 32.122,
   "dual": 38.893,
   "thm": 46.458
  },
  "cues": [
   [
    0.102,
    "La regresi\u00f3n ridge con kernel, K R R, corrige eso."
   ],
   [
    4.857,
    "Al error cuadr\u00e1tico le suma la norma de los pesos al cuadrado, multiplicada por un par\u00e1metro lambda: la regularizaci\u00f3n del cap\u00edtulo ocho."
   ],
   [
    13.685,
    "Y admite kernels."
   ],
   [
    15.703,
    "Con uno gaussiano, la hip\u00f3tesis es una curva."
   ],
   [
    19.544,
    "Con lambda chico, la curva persigue cada punto, y la norma es grande."
   ],
   [
    25.026,
    "Con lambda grande, la norma manda y la curva se aplana."
   ],
   [
    29.427,
    "En el medio, un compromiso."
   ],
   [
    32.122,
    "Tambi\u00e9n hay soluci\u00f3n cerrada."
   ],
   [
    34.688,
    "En el primal se invierte una matriz del tama\u00f1o de la dimensi\u00f3n."
   ],
   [
    38.893,
    "En el dual, una de m por m, con la matriz del kernel: un costo que crece como el cubo del tama\u00f1o de la muestra."
   ],
   [
    46.458,
    "Y hay garant\u00eda."
   ],
   [
    48.372,
    "El teorema once punto once acota el error de las hip\u00f3tesis con norma acotada: su t\u00e9rmino de complejidad depende de esa norma, no de la dimensi\u00f3n."
   ]
  ]
 },
 "svr": {
  "dur": 60.36,
  "marks": {
   "tube": 6.836,
   "loss": 11.211,
   "slack": 16.771,
   "obj": 22.148,
   "dual": 29.049,
   "sv": 33.464,
   "eps": 42.617,
   "thm": 48.464,
   "var": 54.232
  },
  "cues": [
   [
    0.102,
    "La regresi\u00f3n con vectores de soporte, S V R, lleva la idea de SVM a la regresi\u00f3n."
   ],
   [
    6.836,
    "Alrededor de la hip\u00f3tesis se traza un tubo de ancho \u00e9psilon."
   ],
   [
    11.211,
    "Los puntos dentro del tubo no pagan nada: es la p\u00e9rdida \u00e9psilon insensible."
   ],
   [
    16.771,
    "Los de afuera pagan lo que sobresalen: una holgura, como en el margen blando."
   ],
   [
    22.148,
    "El objetivo es el de SVM: la norma de los pesos, m\u00e1s C por la suma de esas p\u00e9rdidas."
   ],
   [
    29.049,
    "Su dual es otro programa cuadr\u00e1tico, y admite kernels."
   ],
   [
    33.464,
    "En la soluci\u00f3n solo cuentan los puntos sobre el borde del tubo o fuera de \u00e9l: los vectores de soporte."
   ],
   [
    39.935,
    "Aqu\u00ed, siete de doce."
   ],
   [
    42.617,
    "Con un tubo m\u00e1s ancho quedan cuatro: una soluci\u00f3n m\u00e1s rala, pero menos precisa."
   ],
   [
    48.464,
    "El teorema once punto trece da la garant\u00eda, para la p\u00e9rdida \u00e9psilon insensible."
   ],
   [
    54.232,
    "Hay variantes con otras p\u00e9rdidas, como la \u00e9psilon insensible cuadr\u00e1tica y la de Huber."
   ]
  ]
 },
 "q1": {
  "dur": 9.624,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Una soluci\u00f3n de S V R, con su tubo."
   ],
   [
    5.612,
    "\u00bfCu\u00e1l de los tres puntos marcados es un vector de soporte?"
   ]
  ]
 },
 "lasso": {
  "dur": 49.056,
  "marks": {
   "obj": 3.672,
   "cons": 11.133,
   "plane": 16.263,
   "circ": 21.953,
   "lev": 24.909,
   "corner": 35.938,
   "round": 43.294
  },
  "cues": [
   [
    0.102,
    "Lasso cambia una sola cosa: la norma."
   ],
   [
    3.672,
    "En lugar de la norma dos al cuadrado, penaliza la norma uno: la suma de los valores absolutos de los pesos."
   ],
   [
    11.133,
    "De manera equivalente: minimizar el error con la norma uno acotada."
   ],
   [
    16.263,
    "En el plano de los pesos, con dos caracter\u00edsticas, esa cota es un rombo."
   ],
   [
    21.953,
    "Con la norma dos, un c\u00edrculo."
   ],
   [
    24.909,
    "Las curvas de nivel del error son elipses alrededor de la soluci\u00f3n de m\u00ednimos cuadrados."
   ],
   [
    30.794,
    "La soluci\u00f3n con restricci\u00f3n est\u00e1 donde la elipse m\u00e1s chica toca la regi\u00f3n."
   ],
   [
    35.938,
    "El rombo tiene esquinas, y es t\u00edpico que el contacto ocurra en una: ah\u00ed un peso vale exactamente cero."
   ],
   [
    43.294,
    "El c\u00edrculo no tiene esquinas: los dos pesos se achican, y ninguno se anula."
   ]
  ]
 },
 "path": {
  "dur": 52.824,
  "marks": {
   "bars": 3.242,
   "grow": 5.586,
   "stop": 12.917,
   "thm": 21.706,
   "logn": 25.677,
   "solve": 33.62,
   "group": 46.992
  },
  "cues": [
   [
    0.102,
    "Con seis caracter\u00edsticas se ve mejor."
   ],
   [
    3.242,
    "Cada barra es un peso."
   ],
   [
    5.586,
    "Al crecer lambda, Lasso anula los pesos uno tras otro; ridge los achica, pero no anula ninguno."
   ],
   [
    12.917,
    "Aqu\u00ed, Lasso se queda con dos de los seis."
   ],
   [
    16.549,
    "Una soluci\u00f3n rala selecciona caracter\u00edsticas y abarata las predicciones."
   ],
   [
    21.706,
    "La garant\u00eda es el teorema once punto diecis\u00e9is."
   ],
   [
    25.677,
    "La dimensi\u00f3n N entra solo a trav\u00e9s de su logaritmo: usar much\u00edsimas caracter\u00edsticas casi no afecta la generalizaci\u00f3n."
   ],
   [
    33.62,
    "No hay soluci\u00f3n cerrada, y los kernels no entran de forma natural."
   ],
   [
    38.464,
    "El problema se resuelve como un programa cuadr\u00e1tico, o con el algoritmo LARS, que calcula las soluciones para todos los valores de lambda."
   ],
   [
    46.992,
    "Una variante, la norma de grupo, anula grupos enteros de caracter\u00edsticas."
   ]
  ]
 },
 "q2": {
  "dur": 7.728,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Los pesos de tres soluciones sobre la misma muestra."
   ],
   [
    5.586,
    "\u00bfCu\u00e1l sali\u00f3 de Lasso?"
   ]
  ]
 },
 "online": {
  "dur": 43.08,
  "marks": {
   "wh": 7.604,
   "pred": 14.974,
   "upd": 18.932,
   "run": 28.542,
   "svr": 36.745
  },
  "cues": [
   [
    0.102,
    "Estos algoritmos tienen versiones en l\u00ednea, \u00fatiles cuando la muestra es tan grande que resolver por lotes cuesta demasiado."
   ],
   [
    7.604,
    "La m\u00e1s simple es el algoritmo de Widrow y Hoff: descenso por gradiente estoc\u00e1stico sobre la p\u00e9rdida cuadr\u00e1tica."
   ],
   [
    14.974,
    "En cada ronda llega un punto y la hip\u00f3tesis predice."
   ],
   [
    18.932,
    "Despu\u00e9s, el vector de pesos se corrige en proporci\u00f3n al error de esa predicci\u00f3n."
   ],
   [
    24.557,
    "Es la mec\u00e1nica del Perceptron, con otra p\u00e9rdida."
   ],
   [
    28.542,
    "Tras tres pasadas por la muestra, el error es cero punto cero siete: cerca del cero punto cero seis de m\u00ednimos cuadrados."
   ],
   [
    36.745,
    "Tambi\u00e9n hay una versi\u00f3n en l\u00ednea de S V R: gradiente estoc\u00e1stico sobre su problema dual."
   ]
  ]
 },
 "wrap": {
  "dur": 32.976,
  "marks": {
   "w1": 1.823,
   "w2": 8.32,
   "w3": 16.484,
   "w4": 22.865
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "La regresi\u00f3n lineal minimiza el error cuadr\u00e1tico, con soluci\u00f3n cerrada y sin control de la norma."
   ],
   [
    8.32,
    "K R R le suma la norma dos al cuadrado: soluci\u00f3n cerrada, kernels, y una matriz de m por m que invertir."
   ],
   [
    16.484,
    "S V R usa un tubo de ancho \u00e9psilon y devuelve una soluci\u00f3n rala en vectores de soporte."
   ],
   [
    22.865,
    "Lasso penaliza la norma uno y anula pesos; su garant\u00eda depende del logaritmo de la dimensi\u00f3n."
   ],
   [
    29.727,
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
    "Ese fue el cap\u00edtulo veinticuatro."
   ]
  ]
 }
};

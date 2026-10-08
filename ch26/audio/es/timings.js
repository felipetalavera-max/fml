window.TIMINGS = {
 "intro": {
  "dur": 13.296,
  "marks": {
   "sub": 6.992
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintis\u00e9is."
   ],
   [
    2.474,
    "Maxent: garant\u00eda, algoritmo y regularizaci\u00f3n."
   ],
   [
    6.992,
    "Qu\u00e9 tan buena es la soluci\u00f3n, c\u00f3mo se calcula, y qu\u00e9 cambia al regularizar de otra manera."
   ]
  ]
 },
 "seis": {
  "dur": 39.984,
  "marks": {
   "feat": 8.503,
   "band": 15.573,
   "w": 27.812,
   "sol": 31.549
  },
  "cues": [
   [
    0.102,
    "El cap\u00edtulo anterior termin\u00f3 en un problema: m\u00e1xima verosimilitud sobre las distribuciones de Gibbs, con regularizaci\u00f3n L uno."
   ],
   [
    8.503,
    "Para verlo con varios pesos, el mismo dado tendr\u00e1 ahora seis caracter\u00edsticas: un indicador por cara."
   ],
   [
    15.573,
    "La restricci\u00f3n de Maxent queda cara por cara: cada barra de p debe estar a distancia lambda, como mucho, de la frecuencia emp\u00edrica."
   ],
   [
    24.023,
    "Aqu\u00ed, lambda vale cero punto cero siete."
   ],
   [
    27.812,
    "Y la distribuci\u00f3n de Gibbs tiene un peso por cara."
   ],
   [
    31.549,
    "En la soluci\u00f3n, solo dos pesos no son nulos: el de la cara dos, negativo, y el de la cara seis, positivo."
   ]
  ]
 },
 "cota": {
  "dur": 63.336,
  "marks": {
   "loss": 2.839,
   "thm": 10.703,
   "small": 27.044,
   "big": 34.948,
   "mid": 40.104,
   "lamt": 47.448,
   "rate": 54.635
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 tan buena es esa soluci\u00f3n?"
   ],
   [
    2.839,
    "Se mide con la p\u00e9rdida logar\u00edtmica: el valor esperado, bajo la distribuci\u00f3n real, de menos el logaritmo de p."
   ],
   [
    10.703,
    "El teorema doce punto tres da la garant\u00eda."
   ],
   [
    14.076,
    "Si lambda es la cota del cap\u00edtulo anterior, entonces, con alta probabilidad, la p\u00e9rdida de la soluci\u00f3n supera a la de cualquier otro w, como mucho, en dos lambda por la norma uno de ese w."
   ],
   [
    27.044,
    "En el dibujo: con lambda chico, la soluci\u00f3n copia la muestra, y su p\u00e9rdida real es uno punto setenta y seis."
   ],
   [
    34.948,
    "Con lambda grande, se queda en la uniforme: uno punto setenta y nueve."
   ],
   [
    40.104,
    "Con cero punto cero siete, baja a uno punto setenta y tres; la mejor posible es uno punto sesenta y ocho."
   ],
   [
    47.448,
    "Con sesenta tiradas, el lambda del teorema es cero punto treinta y cinco: tan prudente que la uniforme cumple."
   ],
   [
    54.635,
    "Pero se achica al crecer la muestra: si la complejidad de Rademacher es del orden de uno sobre ra\u00edz de m, el exceso de p\u00e9rdida tambi\u00e9n."
   ]
  ]
 },
 "q1": {
  "dur": 9.936,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres soluciones del mismo problema, cada una con un valor distinto de lambda."
   ],
   [
    7.357,
    "\u00bfCu\u00e1l usa el lambda m\u00e1s grande?"
   ]
  ]
 },
 "dir": {
  "dur": 52.752,
  "marks": {
   "obj": 2.773,
   "plane": 6.211,
   "kink": 11.615,
   "cd": 18.294,
   "eps": 24.518,
   "der": 32.5,
   "pick": 45.286
  },
  "cues": [
   [
    0.102,
    "Falta calcular la soluci\u00f3n."
   ],
   [
    2.773,
    "El objetivo, J, es convexo."
   ],
   [
    6.211,
    "Aqu\u00ed se ve sobre los dos pesos que se mueven; el m\u00ednimo est\u00e1 en el punto \u00e1mbar."
   ],
   [
    11.615,
    "Pero no es diferenciable donde un peso vale cero: las curvas de nivel hacen una esquina sobre los ejes."
   ],
   [
    18.294,
    "El descenso por coordenadas, ya visto en AdaBoost, cambia un solo peso por iteraci\u00f3n."
   ],
   [
    24.518,
    "Para elegirlo se calcula \u00e9psilon: el promedio de cada caracter\u00edstica bajo la distribuci\u00f3n actual, menos el emp\u00edrico."
   ],
   [
    32.5,
    "Para un peso nulo, la derivada de J es lo que \u00e9psilon sobresale de la franja de ancho lambda; si no sobresale, es cero."
   ],
   [
    40.911,
    "Para uno no nulo, es \u00e9psilon m\u00e1s lambda por su signo."
   ],
   [
    45.286,
    "Se elige la coordenada de mayor derivada en valor absoluto."
   ],
   [
    49.583,
    "Al inicio, la de la cara seis."
   ]
  ]
 },
 "paso": {
  "dur": 58.08,
  "marks": {
   "line": 1.979,
   "closed": 8.451,
   "cases": 19.349,
   "run": 24.909,
   "first": 34.154,
   "stair": 38.594,
   "end": 45.208,
   "other": 50.286
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1nto avanzar?"
   ],
   [
    1.979,
    "El paso ideal minimiza J a lo largo de esa coordenada, y se puede buscar num\u00e9ricamente."
   ],
   [
    8.451,
    "Pero hay una forma cerrada: como cada caracter\u00edstica toma valores entre menos r y r, el lema de Hoeffding da una cota superior de J, que se minimiza a mano."
   ],
   [
    19.349,
    "Salen tres casos; en el primero, el peso queda exactamente en cero."
   ],
   [
    24.909,
    "El algoritmo completo, de la figura doce punto dos: calcular las derivadas, elegir la mayor, dar el paso, y repetir."
   ],
   [
    34.154,
    "El primer paso sube el peso de la cara seis en cero punto quince."
   ],
   [
    38.594,
    "Despu\u00e9s, una escalera: cada tramo es paralelo a un eje, y J baja en cada uno."
   ],
   [
    45.208,
    "A los veinte pasos, J queda a menos de una mil\u00e9sima del m\u00ednimo."
   ],
   [
    50.286,
    "Hay otros m\u00e9todos, como el descenso de gradiente estoc\u00e1stico; este conviene cuando hay much\u00edsimas caracter\u00edsticas."
   ]
  ]
 },
 "q2": {
  "dur": 10.536,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Estas son las derivadas de J en cada coordenada, despu\u00e9s de tres pasos."
   ],
   [
    7.279,
    "\u00bfQu\u00e9 coordenada mueve ahora el algoritmo?"
   ]
  ]
 },
 "ext": {
  "dur": 39.12,
  "marks": {
   "breg": 3.268,
   "norm": 14.818,
   "thm": 19.544,
   "inf": 27.305,
   "two": 32.474,
   "one": 35.599
  },
  "cues": [
   [
    0.102,
    "El modelo admite dos extensiones."
   ],
   [
    3.268,
    "Primera: la cercan\u00eda a la previa se puede medir con otra divergencia de Bregman, en lugar de la entrop\u00eda relativa."
   ],
   [
    10.573,
    "La forma de Gibbs de la soluci\u00f3n depend\u00eda de esa elecci\u00f3n."
   ],
   [
    14.818,
    "Segunda: la diferencia de promedios se puede acotar con otra norma."
   ],
   [
    19.544,
    "El teorema doce punto cuatro da el dual en general: en la regularizaci\u00f3n aparece la norma dual de la usada en la restricci\u00f3n."
   ],
   [
    27.305,
    "Con la norma infinito, la de Maxent, el dual lleva la norma uno."
   ],
   [
    32.474,
    "Con la norma dos, la norma dos."
   ],
   [
    35.599,
    "Y con la norma uno, la norma infinito."
   ]
  ]
 },
 "l2": {
  "dur": 37.056,
  "marks": {
   "prob": 4.779,
   "not": 10.846,
   "cmp": 16.068,
   "dial": 29.258
  },
  "cues": [
   [
    0.102,
    "Una variante muy usada regulariza con la norma dos al cuadrado."
   ],
   [
    4.779,
    "El problema es el mismo, con lambda por la norma dos al cuadrado en lugar de la norma uno."
   ],
   [
    10.846,
    "No es un caso del teorema anterior: una norma al cuadrado no es una norma."
   ],
   [
    16.068,
    "La diferencia se ve en los pesos."
   ],
   [
    19.102,
    "Con L uno, cuatro de los seis son nulos, y p queda plana en esas caras."
   ],
   [
    24.883,
    "Con L dos, ninguno es nulo: todos se achican."
   ],
   [
    29.258,
    "Al mover lambda pasa lo mismo que con Lasso y ridge: L uno anula pesos de a uno; L dos solo los encoge."
   ]
  ]
 },
 "l2g": {
  "dur": 38.88,
  "marks": {
   "thm": 4.401,
   "t2": 12.721,
   "plot": 16.875,
   "cross": 20.208,
   "grow": 29.284,
   "rate": 34.31
  },
  "cues": [
   [
    0.102,
    "Tambi\u00e9n tiene garant\u00eda: el teorema doce punto cinco."
   ],
   [
    4.401,
    "La p\u00e9rdida de la soluci\u00f3n supera a la de cualquier w, como mucho, en dos t\u00e9rminos: lambda por la norma dos al cuadrado de w, y un t\u00e9rmino que baja con lambda y con el tama\u00f1o de la muestra."
   ],
   [
    16.875,
    "Uno sube con lambda; el otro baja."
   ],
   [
    20.208,
    "El libro elige el lambda que los iguala: r, sobre la cota de la norma por ra\u00edz de m."
   ],
   [
    26.497,
    "Aqu\u00ed, cero punto once."
   ],
   [
    29.284,
    "Con m\u00e1s datos, el cruce se mueve hacia valores de lambda m\u00e1s chicos."
   ],
   [
    34.31,
    "Y la garant\u00eda vuelve a ser del orden de uno sobre ra\u00edz de m."
   ]
  ]
 },
 "wrap": {
  "dur": 31.2,
  "marks": {
   "w1": 1.823,
   "w2": 10.677,
   "w3": 18.034,
   "w4": 23.789
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "La soluci\u00f3n de Maxent tiene garant\u00eda: su p\u00e9rdida queda cerca de la mejor posible, con un lambda del orden de uno sobre ra\u00edz de m."
   ],
   [
    10.677,
    "El descenso por coordenadas mueve un peso por iteraci\u00f3n: el de mayor derivada, con un paso en forma cerrada."
   ],
   [
    18.034,
    "Con otra divergencia u otra norma, la regularizaci\u00f3n del dual usa la norma dual."
   ],
   [
    23.789,
    "Con la norma dos al cuadrado, la soluci\u00f3n no es rala."
   ],
   [
    27.956,
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
  "dur": 4.584,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintis\u00e9is."
   ]
  ]
 }
};

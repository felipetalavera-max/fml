window.TIMINGS = {
 "intro": {
  "dur": 11.016,
  "marks": {
   "sub": 5.273
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veinticinco."
   ],
   [
    2.435,
    "El principio de m\u00e1xima entrop\u00eda."
   ],
   [
    5.273,
    "C\u00f3mo elegir una distribuci\u00f3n a partir de una muestra, suponiendo lo menos posible."
   ]
  ]
 },
 "dens": {
  "dur": 35.64,
  "marks": {
   "sample": 4.44,
   "emp": 14.492,
   "fam": 19.062,
   "small": 26.029,
   "rich": 30.859
  },
  "cues": [
   [
    0.102,
    "El objetivo ahora es otro: estimar una distribuci\u00f3n."
   ],
   [
    4.44,
    "Hay una muestra de puntos independientes, tomados de una distribuci\u00f3n D que no se conoce."
   ],
   [
    10.599,
    "Aqu\u00ed, sesenta tiradas de un dado cargado."
   ],
   [
    14.492,
    "Contar cu\u00e1ntas veces sali\u00f3 cada cara da la distribuci\u00f3n emp\u00edrica."
   ],
   [
    19.062,
    "El problema de estimaci\u00f3n de densidad consiste en elegir, dentro de una familia de distribuciones, una p cercana a D."
   ],
   [
    26.029,
    "La familia importa."
   ],
   [
    28.06,
    "Si es chica, quiz\u00e1 ninguna quede cerca de D."
   ],
   [
    30.859,
    "Si es muy rica, una muestra modesta no alcanza para elegir bien."
   ]
  ]
 },
 "ml": {
  "dur": 50.904,
  "marks": {
   "prod": 4.375,
   "kl": 12.018,
   "eq": 24.049,
   "move": 30.911,
   "all": 38.672,
   "coin": 43.945
  },
  "cues": [
   [
    0.102,
    "La soluci\u00f3n m\u00e1s usada es la de m\u00e1xima verosimilitud."
   ],
   [
    4.375,
    "Se elige la distribuci\u00f3n que da mayor probabilidad a la muestra observada: un producto, o una suma de logaritmos."
   ],
   [
    12.018,
    "Hay otra manera de decirlo, con la entrop\u00eda relativa: una medida de cu\u00e1nto se aparta una distribuci\u00f3n de otra."
   ],
   [
    19.414,
    "Nunca es negativa, y vale cero solo cuando las dos coinciden."
   ],
   [
    24.049,
    "Maximizar la verosimilitud equivale a minimizar la entrop\u00eda relativa entre la distribuci\u00f3n emp\u00edrica y p."
   ],
   [
    30.911,
    "En el dibujo, al acercar las barras \u00e1mbar a las de tiza, la entrop\u00eda relativa baja de cero punto diecinueve a cero."
   ],
   [
    38.672,
    "Si la familia contiene todas las distribuciones, gana la emp\u00edrica misma."
   ],
   [
    43.945,
    "Con una moneda pasa lo mismo: doce caras en veinte tiradas dan un sesgo estimado de cero punto seis."
   ]
  ]
 },
 "map": {
  "dur": 48.936,
  "marks": {
   "bayes": 7.292,
   "ex": 14.336,
   "lik": 22.682,
   "prior": 29.362,
   "post": 34.375,
   "unif": 44.557
  },
  "cues": [
   [
    0.102,
    "La soluci\u00f3n de m\u00e1ximo a posteriori agrega un ingrediente: una distribuci\u00f3n previa sobre las candidatas."
   ],
   [
    7.292,
    "Por la regla de Bayes, se elige la que maximiza la verosimilitud multiplicada por su probabilidad previa."
   ],
   [
    14.336,
    "Un ejemplo del libro: un an\u00e1lisis de laboratorio sale positivo, y hay dos hip\u00f3tesis: enfermedad, o sin enfermedad."
   ],
   [
    22.682,
    "La verosimilitud favorece a la enfermedad: cero punto noventa y ocho contra cero punto cero cinco."
   ],
   [
    29.362,
    "Pero la enfermedad es rara: su probabilidad previa es de cinco en mil."
   ],
   [
    34.375,
    "Al multiplicar, la otra hip\u00f3tesis gana por unas diez veces."
   ],
   [
    39.154,
    "Con un resultado positivo, lo m\u00e1s probable sigue siendo que no haya enfermedad."
   ],
   [
    44.557,
    "Con una previa uniforme, las dos soluciones coinciden."
   ]
  ]
 },
 "q1": {
  "dur": 11.688,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "En tiza, la distribuci\u00f3n emp\u00edrica."
   ],
   [
    5.182,
    "En \u00e1mbar, tres candidatas."
   ],
   [
    8.125,
    "\u00bfCu\u00e1l tiene mayor verosimilitud sobre la muestra?"
   ]
  ]
 },
 "feat": {
  "dur": 45.72,
  "marks": {
   "phi": 5.547,
   "avg": 15.43,
   "rad": 24.141,
   "oth": 37.878
  },
  "cues": [
   [
    0.102,
    "Los modelos de m\u00e1xima entrop\u00eda, Maxent, resuelven un problema m\u00e1s rico."
   ],
   [
    5.547,
    "Adem\u00e1s de la muestra, hay caracter\u00edsticas: funciones que asignan n\u00fameros a cada punto."
   ],
   [
    11.81,
    "Aqu\u00ed, una sola: el valor de la cara."
   ],
   [
    15.43,
    "Su promedio sobre la muestra es cuatro punto tres."
   ],
   [
    19.193,
    "Es el punto donde el histograma queda en equilibrio, como en una balanza."
   ],
   [
    24.141,
    "La propiedad clave ya se conoce: con alta probabilidad, el promedio emp\u00edrico de cada caracter\u00edstica queda cerca de su esperanza real."
   ],
   [
    32.982,
    "La cota es la de la complejidad de Rademacher, del cap\u00edtulo cuatro."
   ],
   [
    37.878,
    "Otras ocho muestras del mismo tama\u00f1o lo ilustran: sus promedios caen cerca del valor real, cuatro punto veintinueve."
   ]
  ]
 },
 "princ": {
  "dur": 49.152,
  "marks": {
   "band": 3.099,
   "many": 15.82,
   "other": 20.586,
   "choose": 22.799,
   "ent": 29.596,
   "win": 37.122,
   "cvx": 45.56
  },
  "cues": [
   [
    0.102,
    "De ah\u00ed sale el principio de Maxent."
   ],
   [
    3.099,
    "Se pide que el promedio de cada caracter\u00edstica, bajo p, quede a distancia lambda, como mucho, del emp\u00edrico."
   ],
   [
    11.12,
    "En la balanza, el apoyo debe caer dentro de la franja violeta."
   ],
   [
    15.82,
    "Muchas distribuciones cumplen."
   ],
   [
    18.424,
    "La emp\u00edrica es una."
   ],
   [
    20.586,
    "Estas otras tambi\u00e9n."
   ],
   [
    22.799,
    "\u00bfCu\u00e1l elegir?"
   ],
   [
    24.557,
    "La m\u00e1s cercana, en entrop\u00eda relativa, a una previa p cero."
   ],
   [
    29.596,
    "Si la previa es uniforme, eso equivale a maximizar la entrop\u00eda: una medida de qu\u00e9 tan plana es la distribuci\u00f3n."
   ],
   [
    37.122,
    "Entre todas las que cumplen, gana la m\u00e1s plana, la que menos supone."
   ],
   [
    42.24,
    "Su entrop\u00eda es uno punto setenta y cuatro."
   ],
   [
    45.56,
    "El problema es convexo y su soluci\u00f3n es \u00fanica."
   ]
  ]
 },
 "gibbs": {
  "dur": 37.536,
  "marks": {
   "form": 2.826,
   "zero": 11.12,
   "neg": 14.583,
   "pos": 19.557,
   "fit": 26.302
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 forma tiene esa soluci\u00f3n?"
   ],
   [
    2.826,
    "La de una distribuci\u00f3n de Gibbs: la previa, multiplicada por la exponencial de w por la caracter\u00edstica, y normalizada."
   ],
   [
    11.12,
    "Con w igual a cero, es la previa."
   ],
   [
    14.583,
    "Con w negativo, las barras se inclinan hacia las caras bajas."
   ],
   [
    19.557,
    "Con w positivo, hacia las altas: cada cara multiplica a la anterior por un factor fijo."
   ],
   [
    26.302,
    "Y hay un valor de w, cero punto diecinueve, que deja el apoyo justo en el borde de la franja, en cuatro punto cero cinco."
   ],
   [
    34.87,
    "Esa es la soluci\u00f3n de Maxent."
   ]
  ]
 },
 "dual": {
  "dur": 58.176,
  "marks": {
   "g": 4.792,
   "thm": 15.43,
   "num": 19.727,
   "ml": 23.919,
   "zero": 36.55,
   "fam": 40.69,
   "eps": 47.487
  },
  "cues": [
   [
    0.102,
    "Para hallar w est\u00e1 el teorema doce punto dos, de dualidad."
   ],
   [
    4.792,
    "Define una funci\u00f3n G: el promedio, sobre la muestra, del logaritmo de la distribuci\u00f3n de Gibbs dividida por la previa, menos lambda por la norma uno de w."
   ],
   [
    15.43,
    "El m\u00e1ximo de G es igual al m\u00ednimo del problema de Maxent."
   ],
   [
    19.727,
    "Aqu\u00ed, los dos valen cero punto cero cinco dos."
   ],
   [
    23.919,
    "Le\u00eddo de otra forma, el dual es m\u00e1xima verosimilitud sobre las distribuciones de Gibbs, con regularizaci\u00f3n L uno de peso lambda."
   ],
   [
    32.734,
    "La holgura de la restricci\u00f3n se volvi\u00f3 regularizaci\u00f3n."
   ],
   [
    36.55,
    "Con lambda cero, es m\u00e1xima verosimilitud pura."
   ],
   [
    40.69,
    "Maxent no fij\u00f3 ninguna familia: la de Gibbs sale de medir la cercan\u00eda con la entrop\u00eda relativa."
   ],
   [
    47.487,
    "Y basta una soluci\u00f3n aproximada: si G queda a menos de \u00e9psilon de su m\u00e1ximo, la distribuci\u00f3n queda a entrop\u00eda relativa \u00e9psilon, como mucho, de la \u00f3ptima."
   ]
  ]
 },
 "q2": {
  "dur": 8.904,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres distribuciones que cumplen la restricci\u00f3n, con previa uniforme."
   ],
   [
    6.758,
    "\u00bfCu\u00e1l elige Maxent?"
   ]
  ]
 },
 "wrap": {
  "dur": 32.904,
  "marks": {
   "w1": 1.823,
   "w2": 8.398,
   "w3": 12.773,
   "w4": 21.654
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "M\u00e1xima verosimilitud elige la distribuci\u00f3n m\u00e1s cercana a la emp\u00edrica, en entrop\u00eda relativa."
   ],
   [
    8.398,
    "M\u00e1ximo a posteriori pondera cada candidata con una previa."
   ],
   [
    12.773,
    "Maxent pide promedios de caracter\u00edsticas cercanos a los emp\u00edricos y, entre las distribuciones que cumplen, elige la m\u00e1s cercana a la previa."
   ],
   [
    21.654,
    "Por dualidad, la soluci\u00f3n es una distribuci\u00f3n de Gibbs, y hallarla es m\u00e1xima verosimilitud con regularizaci\u00f3n L uno."
   ],
   [
    29.674,
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
    "Ese fue el cap\u00edtulo veinticinco."
   ]
  ]
 }
};

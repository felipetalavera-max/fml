window.TIMINGS = {
 "intro": {
  "dur": 13.368,
  "marks": {
   "sub": 4.622
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo doce."
   ],
   [
    2.109,
    "Algoritmos con kernels."
   ],
   [
    4.622,
    "Con un kernel PDS, SVM aprende fronteras curvas."
   ],
   [
    9.427,
    "Y la soluci\u00f3n siempre se arma con los puntos de la muestra."
   ]
  ]
 },
 "svmk": {
  "dur": 38.856,
  "marks": {
   "dual": 5.013,
   "swap": 10.651,
   "gram": 19.271,
   "vec": 23.62,
   "solve": 27.786,
   "sv": 33.125
  },
  "cues": [
   [
    0.102,
    "Esta es la muestra del cap\u00edtulo anterior: ninguna recta la separa."
   ],
   [
    5.013,
    "El problema dual de SVM solo usa los puntos a trav\u00e9s de productos internos."
   ],
   [
    10.651,
    "Y un kernel PDS es un producto interno en otro espacio."
   ],
   [
    14.818,
    "Entonces basta reemplazar cada producto interno por el kernel."
   ],
   [
    19.271,
    "Toda la muestra entra por una sola tabla: la matriz de Gram."
   ],
   [
    23.62,
    "Con ella, el problema se escribe en forma matricial."
   ],
   [
    27.786,
    "Aqu\u00ed se resuelve con el kernel gaussiano, y cada punto recibe su alfa."
   ],
   [
    33.125,
    "Los que tienen alfa mayor que cero son los vectores de soporte: trece de diecis\u00e9is."
   ]
  ]
 },
 "hip": {
  "dur": 41.424,
  "marks": {
   "form": 2.083,
   "bells": 7.305,
   "neg": 13.112,
   "pos": 16.016,
   "b": 18.828,
   "zero": 21.797,
   "err": 25.586,
   "probe": 28.698,
   "lin": 34.557
  },
  "cues": [
   [
    0.102,
    "\u00bfY la hip\u00f3tesis?"
   ],
   [
    2.083,
    "Tiene la misma forma que antes, con el kernel en lugar del producto interno."
   ],
   [
    7.305,
    "Con el kernel gaussiano, cada vector de soporte aporta una campana centrada en \u00e9l."
   ],
   [
    13.112,
    "Las de la clase negativa restan."
   ],
   [
    16.016,
    "Las de la clase positiva suman."
   ],
   [
    18.828,
    "Al final se agrega la constante b."
   ],
   [
    21.797,
    "La frontera es la curva donde esa suma vale cero."
   ],
   [
    25.586,
    "Separa las dos clases sin errores."
   ],
   [
    28.698,
    "Para clasificar un punto nuevo, se suman las campanas en ese punto y se mira el signo."
   ],
   [
    34.557,
    "En el plano original la frontera es curva."
   ],
   [
    37.865,
    "En el espacio del kernel, es un hiperplano."
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
    "Tres puntos de la muestra, con su alfa."
   ],
   [
    5.234,
    "\u00bfCu\u00e1l se puede quitar sin que cambie la hip\u00f3tesis?"
   ]
  ]
 },
 "rep": {
  "dur": 40.728,
  "marks": {
   "comb": 5.571,
   "thm": 10.612,
   "g": 19.076,
   "l": 23.776,
   "sol": 28.828,
   "m": 35.56
  },
  "cues": [
   [
    0.102,
    "Sin la constante b, la soluci\u00f3n de SVM es una combinaci\u00f3n de funciones del kernel: una campana por cada punto de la muestra, cada una con su coeficiente."
   ],
   [
    10.612,
    "El teorema del representante dice que no es casualidad."
   ],
   [
    14.583,
    "Vale para todo problema que minimice la suma de dos partes."
   ],
   [
    19.076,
    "Una funci\u00f3n no decreciente de la norma de h en el espacio de Hilbert."
   ],
   [
    23.776,
    "Y una p\u00e9rdida cualquiera, que solo mira los valores de h en la muestra."
   ],
   [
    28.828,
    "Un problema as\u00ed siempre admite una soluci\u00f3n que es combinaci\u00f3n de las funciones del kernel en los puntos de la muestra."
   ],
   [
    35.56,
    "Aunque el espacio tenga dimensi\u00f3n infinita, alcanzan m coeficientes."
   ]
  ]
 },
 "orto": {
  "dur": 35.88,
  "marks": {
   "h": 1.641,
   "split": 5.13,
   "zero": 12.708,
   "erase": 18.672,
   "loss": 21.042,
   "norm": 25.534,
   "end": 28.229
  },
  "cues": [
   [
    0.102,
    "\u00bfPor qu\u00e9?"
   ],
   [
    1.641,
    "Se toma una hip\u00f3tesis cualquiera del espacio."
   ],
   [
    5.13,
    "Se parte en dos: la parte que es combinaci\u00f3n de las campanas de la muestra, y la parte ortogonal a todas ellas."
   ],
   [
    12.708,
    "Por la propiedad reproductora, la parte ortogonal vale cero en cada punto de la muestra."
   ],
   [
    18.672,
    "Entonces se puede borrar."
   ],
   [
    21.042,
    "Los valores en la muestra no cambian: la p\u00e9rdida queda igual."
   ],
   [
    25.534,
    "Y la norma solo puede bajar."
   ],
   [
    28.229,
    "Sin la parte ortogonal, el objetivo no empeora."
   ],
   [
    32.135,
    "Por eso alcanza con buscar entre las combinaciones."
   ]
  ]
 },
 "q2": {
  "dur": 7.56,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres funciones que coinciden en la muestra."
   ],
   [
    5.052,
    "\u00bfCu\u00e1l tiene la menor norma?"
   ]
  ]
 },
 "traza": {
  "dur": 45.864,
  "marks": {
   "set": 2.839,
   "bound": 7.435,
   "diag": 15.378,
   "gauss": 20.977,
   "r": 25.755,
   "poly": 34.714,
   "fine": 40.117
  },
  "cues": [
   [
    0.102,
    "Ahora, las garant\u00edas."
   ],
   [
    2.839,
    "Se toman las hip\u00f3tesis con norma acotada por lambda may\u00fascula."
   ],
   [
    7.435,
    "Su complejidad de Rademacher emp\u00edrica es, como mucho, lambda por la ra\u00edz de la traza de la matriz de Gram, sobre m."
   ],
   [
    15.378,
    "La traza es la suma de la diagonal: el kernel de cada punto consigo mismo."
   ],
   [
    20.977,
    "En el gaussiano cada uno vale uno, as\u00ed que la traza es m."
   ],
   [
    25.755,
    "Si el kernel de un punto consigo mismo nunca pasa de r al cuadrado, la traza no pasa de m por r al cuadrado, y queda la cota conocida."
   ],
   [
    34.714,
    "Con el kernel polinomial de grado dos, la diagonal cambia de punto a punto."
   ],
   [
    40.117,
    "Ah\u00ed la traza es bastante menor que m por r al cuadrado: da una cota m\u00e1s fina."
   ]
  ]
 },
 "margen": {
  "dur": 34.488,
  "marks": {
   "cor": 3.542,
   "same": 5.234,
   "dim": 11.758,
   "num": 19.518,
   "big": 24.766,
   "more": 28.672
  },
  "cues": [
   [
    0.102,
    "Con esa complejidad sale la cota por margen."
   ],
   [
    3.542,
    "Es la del cap\u00edtulo diez, con una diferencia: r al cuadrado es ahora el mayor valor del kernel de un punto consigo mismo."
   ],
   [
    11.758,
    "La dimensi\u00f3n del espacio no aparece."
   ],
   [
    14.922,
    "Con el kernel gaussiano es infinita, y la cota es la misma."
   ],
   [
    19.518,
    "Para la SVM de este cap\u00edtulo, el t\u00e9rmino de complejidad sale mayor que uno: con diecis\u00e9is puntos, la cota no dice nada."
   ],
   [
    28.672,
    "El t\u00e9rmino baja como uno sobre ra\u00edz de m: hacen falta muchos m\u00e1s datos."
   ]
  ]
 },
 "nds": {
  "dur": 44.928,
  "marks": {
   "dist": 4.036,
   "def": 8.828,
   "c": 21.81,
   "thm": 24.766,
   "exp": 34.544,
   "eig": 39.648
  },
  "cues": [
   [
    0.102,
    "Para cerrar: kernels a partir de distancias."
   ],
   [
    4.036,
    "Esta tabla tiene el cuadrado de la distancia entre cada par de puntos."
   ],
   [
    8.828,
    "Un kernel es definido negativo y sim\u00e9trico, NDS, si es sim\u00e9trico y, para todo vector c cuyas componentes suman cero, la suma de c i por c j por la celda i j nunca es positiva."
   ],
   [
    21.81,
    "El cuadrado de la distancia lo cumple."
   ],
   [
    24.766,
    "Y hay un puente con los kernels PDS: un kernel es NDS exactamente cuando la exponencial de menos t por el kernel es PDS, para todo t positivo."
   ],
   [
    34.544,
    "Con el cuadrado de la distancia, esa exponencial es el kernel gaussiano."
   ],
   [
    39.648,
    "Es otra prueba de que es PDS: ning\u00fan valor propio es negativo."
   ]
  ]
 },
 "wrap": {
  "dur": 30.912,
  "marks": {
   "w1": 1.823,
   "w2": 8.398,
   "w3": 15.13,
   "w4": 20.833
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "SVM con kernels: el mismo problema dual, con el kernel en lugar del producto interno."
   ],
   [
    8.398,
    "Teorema del representante: la soluci\u00f3n es una combinaci\u00f3n de funciones del kernel en los puntos de la muestra."
   ],
   [
    15.13,
    "Las garant\u00edas dependen de la traza de la matriz de Gram y del margen, no de la dimensi\u00f3n."
   ],
   [
    20.833,
    "Y de un kernel NDS, como el cuadrado de la distancia, sale un kernel PDS con la exponencial."
   ],
   [
    27.682,
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
  "dur": 4.248,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo doce."
   ]
  ]
 }
};

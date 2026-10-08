window.TIMINGS = {
 "intro": {
  "dur": 16.752,
  "marks": {
   "sub": 6.224
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo nueve."
   ],
   [
    2.122,
    "M\u00e1quinas de vectores de soporte: el caso separable."
   ],
   [
    6.224,
    "Con este cap\u00edtulo empieza la unidad dos, sobre clasificaci\u00f3n."
   ],
   [
    10.925,
    "Entre todas las rectas que separan una muestra, hay una que conviene m\u00e1s que las otras."
   ]
  ]
 },
 "lineal": {
  "dur": 39.24,
  "marks": {
   "line": 8.034,
   "w": 12.409,
   "sign": 17.565,
   "move": 27.513,
   "vc": 31.81
  },
  "cues": [
   [
    0.102,
    "El punto de partida es la clasificaci\u00f3n lineal."
   ],
   [
    3.789,
    "Cada ejemplo es un punto con etiqueta m\u00e1s uno o menos uno."
   ],
   [
    8.034,
    "La hip\u00f3tesis es un hiperplano; en el plano, una recta."
   ],
   [
    12.409,
    "Queda definida por un vector normal, w, y un n\u00famero, b."
   ],
   [
    17.565,
    "De un lado, w por x m\u00e1s b es positivo, y se predice m\u00e1s uno."
   ],
   [
    23.255,
    "Del otro lado es negativo, y se predice menos uno."
   ],
   [
    27.513,
    "Un punto nuevo cambia de etiqueta justo al cruzar la recta."
   ],
   [
    31.81,
    "Es un conjunto de hip\u00f3tesis de complejidad peque\u00f1a: en dimensi\u00f3n N, su dimensi\u00f3n VC es N m\u00e1s uno."
   ]
  ]
 },
 "muchas": {
  "dur": 31.44,
  "marks": {
   "many": 5.872,
   "geo": 14.297,
   "min": 19.766,
   "swing": 25.872
  },
  "cues": [
   [
    0.102,
    "Se supone primero que la muestra es separable: que existe una recta sin ning\u00fan error."
   ],
   [
    5.872,
    "Entonces hay infinitas."
   ],
   [
    8.49,
    "Todas tienen error emp\u00edrico cero."
   ],
   [
    11.419,
    "\u00bfCu\u00e1l deber\u00eda elegir el algoritmo?"
   ],
   [
    14.297,
    "La respuesta usa el margen geom\u00e9trico de un punto: su distancia a la recta."
   ],
   [
    19.766,
    "El margen de la recta es el menor de todos: la distancia al punto m\u00e1s cercano de la muestra."
   ],
   [
    25.872,
    "Unas rectas pasan rozando un punto."
   ],
   [
    28.88,
    "Otras dejan m\u00e1s espacio."
   ]
  ]
 },
 "margen": {
  "dur": 29.64,
  "marks": {
   "band": 5.039,
   "max": 10.482,
   "touch": 14.961,
   "safe": 19.987
  },
  "cues": [
   [
    0.102,
    "La soluci\u00f3n de SVM es la recta separadora de margen m\u00e1ximo."
   ],
   [
    5.039,
    "Conviene dibujar el margen como una franja sin puntos a los dos lados de la recta."
   ],
   [
    10.482,
    "Se mueve la recta hasta que la franja ya no puede ensancharse m\u00e1s."
   ],
   [
    14.961,
    "Queda trabada por tres puntos: dos de una clase y uno de la otra."
   ],
   [
    19.987,
    "Es la elecci\u00f3n m\u00e1s segura."
   ],
   [
    22.461,
    "Un punto nuevo que caiga a menos de ese margen de un punto de entrenamiento de su misma clase queda bien clasificado."
   ]
  ]
 },
 "q1": {
  "dur": 8.016,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres rectas separan la misma muestra."
   ],
   [
    4.961,
    "\u00bfCu\u00e1l es la soluci\u00f3n de SVM?"
   ]
  ]
 },
 "primal": {
  "dur": 41.904,
  "marks": {
   "scale": 4.557,
   "marg": 15.586,
   "rho": 23.75,
   "min": 26.406,
   "st": 31.107,
   "convex": 36.263
  },
  "cues": [
   [
    0.102,
    "Para calcular esa recta hace falta un problema de optimizaci\u00f3n."
   ],
   [
    4.557,
    "El par w, b se puede multiplicar por cualquier n\u00famero positivo sin mover la recta."
   ],
   [
    10.599,
    "Se fija la escala en la que los puntos m\u00e1s cercanos dan exactamente uno."
   ],
   [
    15.586,
    "Los bordes de la franja son entonces los hiperplanos marginales: w por x m\u00e1s b igual a m\u00e1s uno, y a menos uno."
   ],
   [
    23.75,
    "Y el margen vale uno sobre la norma de w."
   ],
   [
    26.406,
    "Maximizar el margen equivale a minimizar un medio de la norma de w al cuadrado, con una restricci\u00f3n por punto: quedar del lado correcto y fuera de la franja."
   ],
   [
    36.263,
    "Es un problema convexo, un programa cuadr\u00e1tico, y tiene soluci\u00f3n \u00fanica."
   ]
  ]
 },
 "soporte": {
  "dur": 33.192,
  "marks": {
   "kkt": 3.008,
   "zero": 11.159,
   "sv": 18.763,
   "rem": 24.258,
   "rem2": 29.193
  },
  "cues": [
   [
    0.102,
    "\u00bfDe qu\u00e9 puntos depende la soluci\u00f3n?"
   ],
   [
    3.008,
    "En el \u00f3ptimo, el vector w es una combinaci\u00f3n lineal de los puntos de la muestra, con un coeficiente alfa para cada uno."
   ],
   [
    11.159,
    "Y las condiciones de optimalidad dicen que alfa es cero, salvo en los puntos que est\u00e1n justo sobre los hiperplanos marginales."
   ],
   [
    18.763,
    "Esos puntos son los vectores de soporte."
   ],
   [
    21.901,
    "Aqu\u00ed son tres de doce."
   ],
   [
    24.258,
    "Si se quita un punto que no es vector de soporte, la soluci\u00f3n no cambia."
   ],
   [
    29.193,
    "Si se quita un vector de soporte, la recta se mueve."
   ]
  ]
 },
 "q2": {
  "dur": 8.664,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Otra muestra, con su soluci\u00f3n."
   ],
   [
    4.896,
    "\u00bfQu\u00e9 punto, si se quita, cambia la recta?"
   ]
  ]
 },
 "dual": {
  "dur": 31.296,
  "marks": {
   "dual": 2.472,
   "inner": 6.055,
   "gram": 12.005,
   "alpha": 16.302,
   "hyp": 20.846,
   "key": 27.826
  },
  "cues": [
   [
    0.102,
    "El mismo problema tiene una forma dual, en la que las inc\u00f3gnitas son los coeficientes alfa."
   ],
   [
    6.055,
    "En ella, los puntos de la muestra aparecen solo dentro de productos internos entre pares."
   ],
   [
    12.005,
    "Toda la muestra entra como una tabla de m por m n\u00fameros."
   ],
   [
    16.302,
    "En la soluci\u00f3n, alfa es cero salvo en los vectores de soporte."
   ],
   [
    20.846,
    "Y la hip\u00f3tesis tambi\u00e9n se escribe solo con productos internos: los del punto nuevo con los vectores de soporte."
   ],
   [
    27.826,
    "Esta observaci\u00f3n ser\u00e1 clave m\u00e1s adelante."
   ]
  ]
 },
 "loo": {
  "dur": 58.944,
  "marks": {
   "loo": 3.229,
   "non": 10.664,
   "only": 16.836,
   "s1": 20.352,
   "s2": 25.417,
   "s3": 28.047,
   "bound": 33.177,
   "thm": 39.648,
   "weak": 50.495
  },
  "cues": [
   [
    0.102,
    "Falta una garant\u00eda de aprendizaje."
   ],
   [
    3.229,
    "Se usa el error de dejar uno fuera: se quita un punto, se entrena con el resto y se prueba en el punto quitado."
   ],
   [
    10.664,
    "Si el punto no es vector de soporte, la soluci\u00f3n no cambia, y ya lo clasificaba bien."
   ],
   [
    16.836,
    "As\u00ed que solo un vector de soporte puede fallar."
   ],
   [
    20.352,
    "Sin el primero, la recta se mueve, pero lo sigue clasificando bien."
   ],
   [
    25.417,
    "Con el segundo pasa lo mismo."
   ],
   [
    28.047,
    "El tercero falla: sin \u00e9l, la recta lo deja del lado equivocado."
   ],
   [
    33.177,
    "Por eso, el error de dejar uno fuera es, como mucho, la fracci\u00f3n de vectores de soporte."
   ],
   [
    39.648,
    "Y como ese error estima sin sesgo el error de generalizaci\u00f3n, el teorema concluye: el error esperado de SVM se acota por la fracci\u00f3n esperada de vectores de soporte."
   ],
   [
    50.495,
    "Cuantos menos vectores de soporte, mejor."
   ],
   [
    53.945,
    "Pero es una garant\u00eda sobre el promedio: no dice nada de la varianza."
   ]
  ]
 },
 "wrap": {
  "dur": 29.64,
  "marks": {
   "w1": 1.823,
   "w2": 6.875,
   "w3": 15.195,
   "w4": 21.302
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un clasificador lineal etiqueta por el signo de w por x m\u00e1s b."
   ],
   [
    6.875,
    "En el caso separable, SVM elige el hiperplano de margen m\u00e1ximo, y ese margen vale uno sobre la norma de w."
   ],
   [
    15.195,
    "La soluci\u00f3n depende solo de los vectores de soporte, y solo a trav\u00e9s de productos internos."
   ],
   [
    21.302,
    "Y el error esperado se acota por la fracci\u00f3n esperada de vectores de soporte."
   ],
   [
    26.406,
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
  "dur": 4.224,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo nueve."
   ]
  ]
 }
};

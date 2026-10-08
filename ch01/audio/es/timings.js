window.TIMINGS = {
 "intro": {
  "dur": 9.264,
  "marks": {
   "sub": 4.648
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo uno."
   ],
   [
    2.083,
    "Qu\u00e9 es aprender de datos."
   ],
   [
    4.648,
    "De ejemplos conocidos a predicciones sobre casos nunca vistos."
   ]
  ]
 },
 "ejemplos": {
  "dur": 36.888,
  "marks": {
   "mail": 4.036,
   "feat": 6.55,
   "dot": 13.971,
   "label": 18.841,
   "many": 23.008,
   "sample": 26.836,
   "new": 30.677
  },
  "cues": [
   [
    0.102,
    "El ejemplo de todo el cap\u00edtulo: detectar spam."
   ],
   [
    4.036,
    "Cada correo es un ejemplo."
   ],
   [
    6.55,
    "De cada ejemplo se miden caracter\u00edsticas: aqu\u00ed, cu\u00e1ntas palabras sospechosas tiene y cu\u00e1ntos enlaces."
   ],
   [
    13.971,
    "Con esas dos medidas, el correo pasa a ser un punto en un plano."
   ],
   [
    18.841,
    "Alguien ya lo revis\u00f3 y le puso una etiqueta: spam."
   ],
   [
    23.008,
    "Con muchos correos revisados se obtiene una muestra de entrenamiento: ejemplos con sus caracter\u00edsticas y sus etiquetas."
   ],
   [
    30.677,
    "Aprender es usar esa muestra para predecir la etiqueta de un correo nuevo, que nadie revis\u00f3."
   ]
  ]
 },
 "tareas": {
  "dur": 43.752,
  "marks": {
   "c1": 3.841,
   "c2": 10.221,
   "c3": 19.557,
   "c4": 25.586,
   "c5": 29.896,
   "goal": 37.331
  },
  "cues": [
   [
    0.102,
    "Predecir una categor\u00eda no es la \u00fanica tarea."
   ],
   [
    3.841,
    "Clasificaci\u00f3n: asignar una categor\u00eda a cada elemento, como el tema de un documento."
   ],
   [
    10.221,
    "Regresi\u00f3n: predecir un valor real, como el precio de una acci\u00f3n."
   ],
   [
    15.312,
    "Aqu\u00ed el error depende de qu\u00e9 tan lejos queda la predicci\u00f3n."
   ],
   [
    19.557,
    "Ranking: ordenar elementos seg\u00fan un criterio, como los resultados de una b\u00fasqueda."
   ],
   [
    25.586,
    "Clustering: partir los datos en grupos homog\u00e9neos."
   ],
   [
    29.896,
    "Y reducci\u00f3n de dimensi\u00f3n: representar los datos con menos dimensiones, conservando algunas de sus propiedades."
   ],
   [
    37.331,
    "En todas, el objetivo es el mismo: predicciones precisas sobre elementos no vistos."
   ]
  ]
 },
 "q1": {
  "dur": 3.888,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 tarea es?"
   ]
  ]
 },
 "etapas": {
  "dur": 44.856,
  "marks": {
   "data": 4.141,
   "split": 7.904,
   "algo": 13.698,
   "hp": 17.383,
   "hyp": 22.591,
   "best": 27.344,
   "test": 31.68,
   "loss": 34.987,
   "rule": 39.896
  },
  "cues": [
   [
    0.102,
    "\u00bfC\u00f3mo se usa un algoritmo de aprendizaje en la pr\u00e1ctica?"
   ],
   [
    4.141,
    "Se parte de una colecci\u00f3n de datos etiquetados."
   ],
   [
    7.904,
    "Primero se reparte al azar en tres muestras: entrenamiento, validaci\u00f3n y prueba."
   ],
   [
    13.698,
    "El algoritmo aprende con la muestra de entrenamiento."
   ],
   [
    17.383,
    "Tiene par\u00e1metros libres, los hiperpar\u00e1metros, que se fijan desde afuera."
   ],
   [
    22.591,
    "Para cada valor, el algoritmo elige una hip\u00f3tesis distinta."
   ],
   [
    27.344,
    "Se conserva la que mejor funciona en la muestra de validaci\u00f3n."
   ],
   [
    31.68,
    "Solo entonces se predicen las etiquetas de la muestra de prueba, y una funci\u00f3n de p\u00e9rdida compara cada predicci\u00f3n con la etiqueta verdadera."
   ],
   [
    39.896,
    "El desempe\u00f1o se mide con el error de prueba, no con el de entrenamiento."
   ]
  ]
 },
 "q2": {
  "dur": 5.28,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfCon qu\u00e9 muestra se mide el desempe\u00f1o final?"
   ]
  ]
 },
 "escenarios": {
  "dur": 47.424,
  "marks": {
   "sup": 5.43,
   "unsup": 12.487,
   "semi": 15.846,
   "trans": 21.172,
   "active": 27.461,
   "online": 31.966,
   "rl": 41.159
  },
  "cues": [
   [
    0.102,
    "Los escenarios de aprendizaje difieren en qu\u00e9 datos recibe el aprendiz y en qu\u00e9 orden."
   ],
   [
    5.43,
    "Supervisado: todos los ejemplos de entrenamiento traen etiqueta."
   ],
   [
    10.273,
    "Es el caso del spam."
   ],
   [
    12.487,
    "No supervisado: ninguna etiqueta."
   ],
   [
    15.846,
    "Semisupervisado: unas pocas etiquetas y muchos ejemplos sin etiquetar."
   ],
   [
    21.172,
    "Transductivo: lo mismo, pero solo interesa predecir unos puntos de prueba ya conocidos."
   ],
   [
    27.461,
    "Activo: el aprendiz elige de qu\u00e9 puntos pedir la etiqueta."
   ],
   [
    31.966,
    "On-line: los ejemplos llegan por rondas."
   ],
   [
    35.456,
    "En cada una se predice, se recibe la etiqueta verdadera y se paga una p\u00e9rdida."
   ],
   [
    41.159,
    "Y por refuerzo: el aprendiz act\u00faa sobre el entorno y recibe una recompensa por cada acci\u00f3n."
   ]
  ]
 },
 "generalizar": {
  "dur": 35.016,
  "marks": {
   "zig": 8.372,
   "z0": 12.122,
   "lin": 14.583,
   "l4": 17.227,
   "new": 21.654,
   "zt": 24.505,
   "lt": 27.174,
   "moral": 29.583
  },
  "cues": [
   [
    0.102,
    "El aprendizaje autom\u00e1tico trata, sobre todo, de generalizar."
   ],
   [
    5.195,
    "Dos maneras de separar la misma muestra."
   ],
   [
    8.372,
    "Una frontera en zigzag, elegida de una familia compleja, no comete ning\u00fan error."
   ],
   [
    14.583,
    "Una recta, de una familia m\u00e1s simple, se equivoca en cuatro puntos."
   ],
   [
    19.883,
    "\u00bfCu\u00e1l conviene?"
   ],
   [
    21.654,
    "Llegan veinte ejemplos nuevos."
   ],
   [
    24.505,
    "El zigzag falla en seis."
   ],
   [
    27.174,
    "La recta, en dos."
   ],
   [
    29.583,
    "El zigzag hab\u00eda memorizado la muestra, y memorizar no es generalizar."
   ]
  ]
 },
 "equilibrio": {
  "dur": 35.28,
  "marks": {
   "simple": 7.487,
   "complex": 13.438,
   "mid": 20.339,
   "size": 26.276
  },
  "cues": [
   [
    0.102,
    "El predictor se elige dentro de un conjunto de hip\u00f3tesis."
   ],
   [
    4.44,
    "\u00bfQu\u00e9 tan rico debe ser ese conjunto?"
   ],
   [
    7.487,
    "Si es demasiado simple, ni siquiera ajusta la muestra: eso se llama subajuste."
   ],
   [
    13.438,
    "Si es demasiado complejo para el tama\u00f1o de la muestra, la memoriza y predice mal: es el sobreajuste."
   ],
   [
    20.339,
    "En el medio, un conjunto que comete algunos errores en la muestra puede generalizar mejor."
   ],
   [
    26.276,
    "Lo que decide es el equilibrio entre el tama\u00f1o de la muestra y la complejidad."
   ],
   [
    31.172,
    "Medir esa complejidad es el tema de los cap\u00edtulos que siguen."
   ]
  ]
 },
 "wrap": {
  "dur": 22.224,
  "marks": {
   "w1": 1.823,
   "w2": 6.823,
   "w3": 11.146,
   "w4": 14.987
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Aprender es usar ejemplos conocidos para predecir sobre ejemplos nuevos."
   ],
   [
    6.823,
    "Entrenar, validar y probar usan muestras separadas."
   ],
   [
    11.146,
    "Los escenarios difieren en qu\u00e9 datos se reciben y cu\u00e1ndo."
   ],
   [
    14.987,
    "Generalizar no es memorizar la muestra de entrenamiento."
   ],
   [
    18.984,
    "Ahora, la pr\u00e1ctica del cap\u00edtulo."
   ]
  ]
 },
 "final1": {
  "dur": 6.072,
  "marks": {},
  "cues": [
   [
    0.102,
    "Pr\u00e1ctica del cap\u00edtulo."
   ],
   [
    2.396,
    "Para cada situaci\u00f3n, elegir el escenario."
   ]
  ]
 },
 "final2": {
  "dur": 5.472,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfQu\u00e9 se sabe del error en ejemplos nuevos?"
   ]
  ]
 },
 "finish": {
  "dur": 4.2,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo uno."
   ]
  ]
 }
};

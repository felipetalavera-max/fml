window.TIMINGS = {
 "intro": {
  "dur": 9.96,
  "marks": {
   "sub": 4.596
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo cuatro."
   ],
   [
    2.07,
    "Complejidad de Rademacher."
   ],
   [
    4.596,
    "Para medir un conjunto infinito de hip\u00f3tesis, se le pide que imite el ruido."
   ]
  ]
 },
 "infinito": {
  "dur": 36.6,
  "marks": {
   "term": 4.193,
   "grow": 9.076,
   "inf": 12.539,
   "rect": 23.398,
   "idea": 29.909
  },
  "cues": [
   [
    0.102,
    "Las garant\u00edas del cap\u00edtulo anterior contaban hip\u00f3tesis."
   ],
   [
    4.193,
    "En la cota, el tama\u00f1o del conjunto aparece dentro de un logaritmo."
   ],
   [
    9.076,
    "Con m\u00e1s hip\u00f3tesis, ese t\u00e9rmino crece."
   ],
   [
    12.539,
    "Y los conjuntos que se usan en la pr\u00e1ctica son infinitos: basta permitir cualquier umbral del segmento."
   ],
   [
    19.284,
    "Entonces la cota vale infinito, y no dice nada."
   ],
   [
    23.398,
    "Sin embargo, los rect\u00e1ngulos del cap\u00edtulo dos tambi\u00e9n eran infinitos, y se pod\u00edan aprender."
   ],
   [
    29.909,
    "Hace falta otra medida: no cu\u00e1ntas hip\u00f3tesis hay, sino cu\u00e1nto pueden hacer sobre una muestra."
   ]
  ]
 },
 "ruido": {
  "dur": 51.552,
  "marks": {
   "sample": 3.646,
   "sigma": 8.307,
   "hyp": 17.461,
   "corr": 24.701,
   "sweep": 34.076,
   "best": 36.445,
   "again": 45.339
  },
  "cues": [
   [
    0.102,
    "La idea es poner a prueba el conjunto con ruido."
   ],
   [
    3.646,
    "Se toma una muestra fija: ocho puntos, sin etiquetas."
   ],
   [
    8.307,
    "A cada punto se le asigna un signo al azar, m\u00e1s uno o menos uno, como al lanzar una moneda."
   ],
   [
    14.818,
    "No hay nada que aprender ah\u00ed."
   ],
   [
    17.461,
    "Una hip\u00f3tesis tambi\u00e9n da un signo a cada punto: este umbral da m\u00e1s uno a su derecha y menos uno a su izquierda."
   ],
   [
    24.701,
    "Se cuenta en cu\u00e1ntos puntos coincide con el ruido y en cu\u00e1ntos no."
   ],
   [
    29.128,
    "La diferencia, dividida entre m, es su correlaci\u00f3n con el ruido."
   ],
   [
    34.076,
    "Ahora se recorren todos los umbrales, y se toma el que mejor sigue al ruido."
   ],
   [
    39.401,
    "Aqu\u00ed coincide en siete de los ocho puntos: correlaci\u00f3n cero punto setenta y cinco."
   ],
   [
    45.339,
    "Con otros signos, el mejor umbral es otro, y apenas llega a cero punto veinticinco."
   ]
  ]
 },
 "q1": {
  "dur": 4.704,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 umbral sigue mejor al ruido?"
   ]
  ]
 },
 "promedio": {
  "dur": 39.192,
  "marks": {
   "many": 3.828,
   "all": 10.417,
   "mean": 17.37,
   "val": 24.505,
   "form": 28.242,
   "name": 35.729
  },
  "cues": [
   [
    0.102,
    "Un solo vector de signos no alcanza para medir."
   ],
   [
    3.828,
    "Se repite muchas veces: signos nuevos, y cada vez se anota la correlaci\u00f3n del mejor umbral."
   ],
   [
    10.417,
    "Con ocho puntos hay doscientos cincuenta y seis vectores de signos."
   ],
   [
    14.779,
    "Se pueden recorrer todos."
   ],
   [
    17.37,
    "El promedio de esas correlaciones es la complejidad de Rademacher emp\u00edrica del conjunto de hip\u00f3tesis sobre la muestra."
   ],
   [
    24.505,
    "Para los umbrales, cero punto cuarenta y seis."
   ],
   [
    28.242,
    "En s\u00edmbolos: la esperanza, sobre los signos, del supremo, sobre las hip\u00f3tesis, de la correlaci\u00f3n."
   ],
   [
    35.729,
    "Los signos se llaman variables de Rademacher."
   ]
  ]
 },
 "riqueza": {
  "dur": 48.696,
  "marks": {
   "one": 2.305,
   "thr": 11.445,
   "int": 15.117,
   "all": 22.63,
   "change": 29.922,
   "rich": 35.833,
   "exp": 39.987
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 mide ese n\u00famero?"
   ],
   [
    2.305,
    "Un conjunto con una sola hip\u00f3tesis no puede adaptarse: a veces coincide con el ruido, a veces no."
   ],
   [
    9.115,
    "En promedio, cero."
   ],
   [
    11.445,
    "Los umbrales, cero punto cuarenta y seis."
   ],
   [
    15.117,
    "Los intervalos, que dan m\u00e1s uno dentro y menos uno fuera, llegan m\u00e1s lejos: cero punto sesenta y siete."
   ],
   [
    22.63,
    "Y el conjunto de todas las funciones copia cualquier vector de signos: su complejidad es uno, el m\u00e1ximo."
   ],
   [
    29.922,
    "Con otros signos cambia la mejor hip\u00f3tesis de cada conjunto, pero el orden se mantiene."
   ],
   [
    35.833,
    "Cuanto m\u00e1s rico es el conjunto, mejor sigue al ruido."
   ],
   [
    39.987,
    "Esa complejidad depende de la muestra."
   ],
   [
    43.112,
    "Su esperanza sobre todas las muestras de tama\u00f1o m es la complejidad de Rademacher."
   ]
  ]
 },
 "cota": {
  "dur": 59.784,
  "marks": {
   "G": 2.604,
   "bound": 12.8,
   "phi": 25.951,
   "mcd": 30.495,
   "ghost": 43.151,
   "swap": 47.904,
   "signs": 54.023
  },
  "cues": [
   [
    0.102,
    "Ahora, la garant\u00eda."
   ],
   [
    2.604,
    "El teorema habla de una familia G de funciones con valores entre cero y uno."
   ],
   [
    7.695,
    "Al aprender, cada funci\u00f3n de G es la p\u00e9rdida de una hip\u00f3tesis."
   ],
   [
    12.8,
    "Con probabilidad de al menos uno menos delta, para toda funci\u00f3n de G, su promedio verdadero es a lo sumo su promedio en la muestra, m\u00e1s dos veces la complejidad de Rademacher de G, m\u00e1s un t\u00e9rmino de confianza."
   ],
   [
    25.951,
    "La demostraci\u00f3n mira la peor diferencia entre los dos promedios."
   ],
   [
    30.495,
    "Si se cambia un solo punto de la muestra, esa diferencia se mueve como mucho uno sobre m."
   ],
   [
    36.745,
    "Por la desigualdad de McDiarmid, una cantidad as\u00ed se concentra alrededor de su esperanza."
   ],
   [
    43.151,
    "Para acotar esa esperanza se usa una segunda muestra imaginaria."
   ],
   [
    47.904,
    "Intercambiar un punto con su pareja cambia un signo en la suma, pero no cambia la distribuci\u00f3n."
   ],
   [
    54.023,
    "Esos signos al azar son las variables de Rademacher: es el paso de simetrizaci\u00f3n."
   ]
  ]
 },
 "clasif": {
  "dur": 51.024,
  "marks": {
   "loss": 2.93,
   "flip": 11.302,
   "half": 18.099,
   "thm": 24.284,
   "emp": 33.776,
   "m": 39.427,
   "allf": 46.224
  },
  "cues": [
   [
    0.102,
    "Falta volver a las hip\u00f3tesis."
   ],
   [
    2.93,
    "En clasificaci\u00f3n binaria, con etiquetas m\u00e1s uno y menos uno, la p\u00e9rdida es uno cuando la hip\u00f3tesis falla y cero cuando acierta."
   ],
   [
    11.302,
    "Multiplicar signos al azar por las etiquetas da otra vez signos al azar: las etiquetas no importan."
   ],
   [
    18.099,
    "Por eso, la complejidad de la familia de p\u00e9rdidas es la mitad de la del conjunto de hip\u00f3tesis."
   ],
   [
    24.284,
    "Resultado: el error de generalizaci\u00f3n es a lo sumo el error emp\u00edrico, m\u00e1s la complejidad de Rademacher del conjunto, m\u00e1s el t\u00e9rmino de confianza."
   ],
   [
    33.776,
    "Hay otra versi\u00f3n con la complejidad emp\u00edrica, que se calcula con la muestra que se tiene."
   ],
   [
    39.427,
    "Para los umbrales, un conjunto infinito, la complejidad baja al crecer m: la cota es \u00fatil."
   ],
   [
    46.224,
    "Para todas las funciones, se queda en uno: no hay garant\u00eda."
   ]
  ]
 },
 "q2": {
  "dur": 5.76,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfQu\u00e9 conjunto de hip\u00f3tesis tiene la mejor garant\u00eda?"
   ]
  ]
 },
 "wrap": {
  "dur": 34.344,
  "marks": {
   "w1": 1.823,
   "w2": 8.359,
   "w3": 15.156,
   "w4": 22.474
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Con infinitas hip\u00f3tesis, contar no sirve: se mide cu\u00e1nto puede el conjunto seguir al ruido."
   ],
   [
    8.359,
    "La complejidad de Rademacher emp\u00edrica es el promedio, sobre signos al azar, de la mejor correlaci\u00f3n."
   ],
   [
    15.156,
    "Esa complejidad acota la diferencia entre el promedio verdadero y el de la muestra, para todas las funciones a la vez."
   ],
   [
    22.474,
    "En clasificaci\u00f3n binaria, el error de generalizaci\u00f3n es a lo sumo el emp\u00edrico, m\u00e1s la complejidad, m\u00e1s un t\u00e9rmino de confianza."
   ],
   [
    31.094,
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
  "dur": 4.992,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfQu\u00e9 pasa con un conjunto m\u00e1s rico?"
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
    "Ese fue el cap\u00edtulo cuatro."
   ]
  ]
 }
};

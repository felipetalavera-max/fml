window.TIMINGS = {
 "intro": {
  "dur": 8.736,
  "marks": {
   "sub": 5.117
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo veintinueve."
   ],
   [
    2.344,
    "P C A y kernel P C A."
   ],
   [
    5.117,
    "Menos coordenadas, con la misma estructura."
   ]
  ]
 },
 "motiv": {
  "dur": 52.176,
  "marks": {
   "r1": 7.8,
   "r2": 12.435,
   "r3": 17.799,
   "roll": 23.19,
   "flat": 30.312,
   "form": 40.234
  },
  "cues": [
   [
    0.102,
    "Cuando los datos tienen muchas caracter\u00edsticas, conviene reducir su dimensi\u00f3n."
   ],
   [
    5.586,
    "Hay tres razones."
   ],
   [
    7.8,
    "C\u00f3mputo: comprimir los datos acelera lo que viene despu\u00e9s."
   ],
   [
    12.435,
    "Visualizaci\u00f3n: en dos o tres dimensiones, los datos se pueden mirar."
   ],
   [
    17.799,
    "Y extracci\u00f3n de caracter\u00edsticas: quedarse con menos, y m\u00e1s \u00fatiles."
   ],
   [
    23.19,
    "El ejemplo cl\u00e1sico es este rollo: los puntos viven en tres dimensiones, pero sobre una hoja enrollada."
   ],
   [
    30.312,
    "Al desenrollarla, bastan dos coordenadas."
   ],
   [
    34.115,
    "En datos reales casi nunca hay una hoja tan exacta: el ejemplo solo ilustra la idea."
   ],
   [
    40.234,
    "En general, se parte de una matriz X, con un punto por columna, de dimensi\u00f3n N, y se busca una representaci\u00f3n Y de dimensi\u00f3n k, mucho menor, que sea fiel a X."
   ]
  ]
 },
 "pca": {
  "dur": 38.112,
  "marks": {
   "center": 8.607,
   "line": 14.297,
   "proj": 21.016,
   "err": 24.076,
   "move": 31.146
  },
  "cues": [
   [
    0.102,
    "El m\u00e9todo m\u00e1s usado es el an\u00e1lisis de componentes principales: P C A."
   ],
   [
    5.625,
    "Se parte de una nube de puntos."
   ],
   [
    8.607,
    "Primero se centra: se resta la media, y la nube queda alrededor del origen."
   ],
   [
    14.297,
    "Ahora se elige un subespacio de dimensi\u00f3n k."
   ],
   [
    17.982,
    "Aqu\u00ed, una recta por el origen."
   ],
   [
    21.016,
    "Cada punto se proyecta sobre la recta."
   ],
   [
    24.076,
    "Lo que se pierde es el segmento rosa."
   ],
   [
    27.148,
    "La suma de sus cuadrados es el error de reconstrucci\u00f3n."
   ],
   [
    31.146,
    "Al mover la recta, el error cambia."
   ],
   [
    34.44,
    "P C A elige la proyecci\u00f3n que lo hace m\u00ednimo."
   ]
  ]
 },
 "spin": {
  "dur": 31.176,
  "marks": {
   "turn": 2.409,
   "sum": 13.932,
   "equiv": 18.776,
   "best": 24.076
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1l es la mejor recta?"
   ],
   [
    2.409,
    "Al girarla, se miden dos cosas: en rosa, el error de reconstrucci\u00f3n; en \u00e1mbar, la varianza de las proyecciones, es decir, cu\u00e1nto se dispersan sobre la recta."
   ],
   [
    13.932,
    "Las dos suman siempre lo mismo: cuando una baja, la otra sube."
   ],
   [
    18.776,
    "Por eso, minimizar el error equivale a maximizar la varianza proyectada."
   ],
   [
    24.076,
    "El mejor \u00e1ngulo, aqu\u00ed, es de veintinueve grados: el error es m\u00ednimo y la varianza, m\u00e1xima."
   ]
  ]
 },
 "q1": {
  "dur": 8.208,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "La misma nube y tres rectas."
   ],
   [
    4.844,
    "\u00bfCon cu\u00e1l es menor el error de reconstrucci\u00f3n?"
   ]
  ]
 },
 "thm": {
  "dur": 44.352,
  "marks": {
   "cov": 3.529,
   "eig": 9.766,
   "thm": 15.938,
   "check": 25.703,
   "rep": 33.503
  },
  "cues": [
   [
    0.102,
    "No hace falta probar todas las rectas."
   ],
   [
    3.529,
    "Se calcula la matriz de covarianza de la muestra: X por X traspuesta, sobre m."
   ],
   [
    9.766,
    "Sus valores propios son, aqu\u00ed, dos punto treinta y tres y cero punto veintitr\u00e9s."
   ],
   [
    15.938,
    "El teorema quince punto uno dice que la soluci\u00f3n de P C A la dan los k vectores singulares principales de esa matriz, que son sus vectores propios de mayor valor."
   ],
   [
    25.703,
    "Y se comprueba: la varianza m\u00e1xima es el valor propio mayor, y el error m\u00ednimo, el valor propio que se descarta."
   ],
   [
    33.503,
    "La representaci\u00f3n reducida es Y: cada punto se reemplaza por sus coordenadas sobre esos vectores."
   ],
   [
    40.195,
    "Aqu\u00ed, la nube se aplasta a una sola dimensi\u00f3n."
   ]
  ]
 },
 "q2": {
  "dur": 9.792,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres nubes centradas, y se conserva una sola dimensi\u00f3n."
   ],
   [
    6.276,
    "\u00bfEn cu\u00e1l es menor el valor propio que se descarta?"
   ]
  ]
 },
 "kpca": {
  "dur": 45.576,
  "marks": {
   "k": 5.156,
   "svd": 12.161,
   "u": 19.271,
   "proj": 27.943,
   "pt": 34.427,
   "same": 40.729
  },
  "cues": [
   [
    0.102,
    "Kernel P C A hace lo mismo en el espacio de caracter\u00edsticas de un kernel."
   ],
   [
    5.156,
    "All\u00ed no se tienen las coordenadas: solo la matriz de kernel, con los productos internos entre puntos."
   ],
   [
    12.161,
    "La clave: la matriz de covarianza y la matriz de kernel comparten sus valores propios, salvo el factor m."
   ],
   [
    19.271,
    "Y de cada vector propio v de la matriz de kernel sale un vector singular u de la covarianza: X por v, sobre la ra\u00edz de lambda."
   ],
   [
    27.943,
    "Entonces, proyectar un punto sobre u solo pide valores del kernel entre ese punto y la muestra."
   ],
   [
    34.427,
    "Y para un punto de la muestra es todav\u00eda m\u00e1s simple: ra\u00edz de lambda por su componente de v."
   ],
   [
    40.729,
    "Con el kernel lineal, el resultado coincide con el de P C A."
   ]
  ]
 },
 "rings": {
  "dur": 31.416,
  "marks": {
   "data": 2.109,
   "lin": 10.664,
   "lin1": 15.417,
   "ker": 19.531,
   "ker1": 26.589
  },
  "cues": [
   [
    0.102,
    "\u00bfY con otro kernel?"
   ],
   [
    2.109,
    "Dos anillos, uno dentro del otro."
   ],
   [
    5.3,
    "El color solo sirve para seguirlos: el algoritmo no usa etiquetas."
   ],
   [
    10.664,
    "P C A lineal, con dos componentes, solo gira la nube."
   ],
   [
    15.417,
    "Y con una sola, los dos grupos quedan mezclados."
   ],
   [
    19.531,
    "Kernel P C A, con un kernel gaussiano y la matriz de kernel centrada, da otras coordenadas."
   ],
   [
    26.589,
    "Aqu\u00ed, la primera componente sola ya separa los dos anillos."
   ]
  ]
 },
 "wrap": {
  "dur": 31.128,
  "marks": {
   "w1": 1.823,
   "w2": 8.516,
   "w3": 16.758,
   "w4": 21.758
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Reducir la dimensi\u00f3n es buscar una representaci\u00f3n con menos coordenadas, que sea fiel a los datos."
   ],
   [
    8.516,
    "P C A proyecta los datos centrados sobre el subespacio que minimiza el error de reconstrucci\u00f3n, que es tambi\u00e9n el de m\u00e1xima varianza."
   ],
   [
    16.758,
    "La soluci\u00f3n son los vectores singulares principales de la matriz de covarianza."
   ],
   [
    21.758,
    "Kernel P C A hace la misma cuenta con la matriz de kernel, usando solo valores del kernel."
   ],
   [
    27.891,
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
  "dur": 4.704,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una proyecci\u00f3n para calcular."
   ]
  ]
 },
 "finish": {
  "dur": 4.488,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo veintinueve."
   ]
  ]
 }
};

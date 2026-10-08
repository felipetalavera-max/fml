window.TIMINGS = {
 "intro": {
  "dur": 8.784,
  "marks": {
   "sub": 5.456
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo treinta y uno."
   ],
   [
    2.37,
    "Aprender aut\u00f3matas con consultas."
   ],
   [
    5.456,
    "Preguntar bien, para aprender exacto."
   ]
  ]
 },
 "aut": {
  "dur": 51.744,
  "marks": {
   "gr": 8.62,
   "ini": 10.846,
   "fin": 14.206,
   "tr": 17.721,
   "s1": 20.742,
   "acc": 25.417,
   "s2": 29.023,
   "rej": 31.979,
   "lang": 33.594,
   "dfa": 38.06,
   "min": 46.966
  },
  "cues": [
   [
    0.102,
    "Aprender un lenguaje es aprender el dispositivo que lo genera."
   ],
   [
    4.219,
    "Para los lenguajes regulares, ese dispositivo es un aut\u00f3mata finito: un grafo de estados."
   ],
   [
    10.846,
    "El c\u00edrculo grueso es el estado inicial."
   ],
   [
    14.206,
    "Los c\u00edrculos dobles son los estados finales."
   ],
   [
    17.721,
    "Y cada transici\u00f3n lleva un s\u00edmbolo."
   ],
   [
    20.742,
    "Una cadena se lee s\u00edmbolo a s\u00edmbolo, desde el estado inicial."
   ],
   [
    25.417,
    "Si termina en un estado final, se acepta."
   ],
   [
    29.023,
    "Esta otra termina en un estado que no es final: se rechaza."
   ],
   [
    33.594,
    "El lenguaje del aut\u00f3mata es el conjunto de las cadenas que acepta."
   ],
   [
    38.06,
    "Este aut\u00f3mata es determinista, un D F A: tiene un solo estado inicial y, desde cada estado, una sola transici\u00f3n por s\u00edmbolo."
   ],
   [
    46.966,
    "Y es m\u00ednimo: ning\u00fan otro equivalente tiene menos estados."
   ]
  ]
 },
 "q1": {
  "dur": 7.392,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El mismo aut\u00f3mata y una cadena nueva."
   ],
   [
    5.078,
    "\u00bfEn qu\u00e9 estado termina?"
   ]
  ]
 },
 "pas": {
  "dur": 57.36,
  "marks": {
   "ex": 3.722,
   "nd": 8.724,
   "smp": 13.594,
   "small": 19.622,
   "two": 24.505,
   "one": 29.44,
   "t1": 33.945,
   "t2": 41.823,
   "cr": 52.422
  },
  "cues": [
   [
    0.102,
    "El marco de este cap\u00edtulo es el aprendizaje exacto eficiente: identificar el concepto objetivo exactamente, en tiempo polinomial."
   ],
   [
    8.724,
    "A diferencia del modelo PAC, no se supone ninguna distribuci\u00f3n."
   ],
   [
    13.594,
    "En el escenario pasivo, el aprendiz recibe una muestra de cadenas, aceptadas o rechazadas, y busca el aut\u00f3mata determinista m\u00e1s chico que sea consistente con ella."
   ],
   [
    24.505,
    "Aqu\u00ed, este acepta solo la cadena a, con dos estados."
   ],
   [
    29.44,
    "Pero este otro tambi\u00e9n es consistente, y tiene uno solo."
   ],
   [
    33.945,
    "El problema es duro."
   ],
   [
    36.068,
    "Teorema diecis\u00e9is punto dos: hallar ese aut\u00f3mata m\u00e1s chico es N P completo."
   ],
   [
    41.823,
    "Teorema diecis\u00e9is punto tres: si P es distinto de N P, tampoco se puede garantizar, en tiempo polinomial, un tama\u00f1o que sea polinomial en el del m\u00e1s chico."
   ],
   [
    52.422,
    "Y hay m\u00e1s resultados negativos, bajo supuestos criptogr\u00e1ficos."
   ]
  ]
 },
 "qry": {
  "dur": 48.912,
  "marks": {
   "act": 1.977,
   "mq": 5.768,
   "no": 11.745,
   "m2": 14.245,
   "yes": 15.547,
   "eq": 16.927,
   "cex": 23.424,
   "real": 31.328,
   "thm": 39.505
  },
  "cues": [
   [
    0.102,
    "Por eso se cambia de escenario: el aprendiz pregunta, y un maestro responde."
   ],
   [
    5.768,
    "Primera clase de pregunta, la consulta de pertenencia: \u00bfesta cadena est\u00e1 en el lenguaje?"
   ],
   [
    11.745,
    "El maestro responde que no."
   ],
   [
    14.245,
    "Para esta otra, que s\u00ed."
   ],
   [
    16.927,
    "Segunda clase, la consulta de equivalencia: el aprendiz propone una hip\u00f3tesis completa."
   ],
   [
    23.424,
    "Si no es el objetivo, el maestro devuelve un contraejemplo: una cadena en la que la hip\u00f3tesis y el objetivo no coinciden."
   ],
   [
    31.328,
    "El modelo no es realista: en la pr\u00e1ctica no suele haber un maestro as\u00ed."
   ],
   [
    36.406,
    "Pero lleva a resultados positivos."
   ],
   [
    39.505,
    "Teorema diecis\u00e9is punto cuatro: lo que se aprende de manera exacta y eficiente con las dos consultas, tambi\u00e9n es PAC-aprendible con consultas de pertenencia."
   ]
  ]
 },
 "tree": {
  "dur": 48.888,
  "marks": {
   "leaf": 4.44,
   "node": 10.69,
   "sift": 14.609,
   "n1": 18.138,
   "n2": 27.018,
   "res": 29.518,
   "hyp": 32.135,
   "sts": 35.521,
   "fins": 37.604,
   "trs": 41.445
  },
  "cues": [
   [
    0.102,
    "El algoritmo guarda lo que sabe en un \u00e1rbol de clasificaci\u00f3n."
   ],
   [
    4.44,
    "En las hojas, cadenas de acceso: cada una lleva a un estado distinto del objetivo."
   ],
   [
    10.69,
    "En los nodos internos, cadenas distinguidoras."
   ],
   [
    14.609,
    "Clasificar una cadena es cernirla por el \u00e1rbol."
   ],
   [
    18.138,
    "En cada nodo se le pega la cadena distinguidora y se pregunta al maestro si el resultado se acepta."
   ],
   [
    24.466,
    "Si no, a la izquierda."
   ],
   [
    27.018,
    "Si s\u00ed, a la derecha."
   ],
   [
    29.518,
    "As\u00ed se llega a una hoja."
   ],
   [
    32.135,
    "Del \u00e1rbol sale el aut\u00f3mata hip\u00f3tesis."
   ],
   [
    35.521,
    "Un estado por hoja."
   ],
   [
    37.604,
    "Son finales las hojas del lado derecho de la ra\u00edz."
   ],
   [
    41.445,
    "Y cada transici\u00f3n se encuentra cerniendo: la cadena de acceso, m\u00e1s un s\u00edmbolo, cae en la hoja de destino."
   ]
  ]
 },
 "q2": {
  "dur": 7.92,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El \u00e1rbol, el aut\u00f3mata objetivo y una cadena."
   ],
   [
    5.768,
    "\u00bfA qu\u00e9 hoja llega?"
   ]
  ]
 },
 "run1": {
  "dur": 40.176,
  "marks": {
   "mq": 6.615,
   "t0": 11.51,
   "h0": 16.536,
   "eq1": 19.948,
   "c1": 22.852,
   "nil": 25.794,
   "h1": 28.438,
   "eq2": 33.867,
   "c2": 36.901
  },
  "cues": [
   [
    0.102,
    "Ahora, la ejecuci\u00f3n completa, con el objetivo de la figura diecis\u00e9is punto cinco del libro."
   ],
   [
    6.615,
    "Una consulta de pertenencia para la cadena vac\u00eda: no se acepta."
   ],
   [
    11.51,
    "El \u00e1rbol inicial tiene la ra\u00edz, una hoja, y otra por definir."
   ],
   [
    16.536,
    "La hip\u00f3tesis inicial, un solo estado."
   ],
   [
    19.948,
    "Primera consulta de equivalencia."
   ],
   [
    22.852,
    "Contraejemplo: la cadena b."
   ],
   [
    25.794,
    "Pasa a ser la segunda hoja."
   ],
   [
    28.438,
    "Con cuatro consultas de pertenencia m\u00e1s, sale una hip\u00f3tesis de dos estados."
   ],
   [
    33.867,
    "Segunda consulta de equivalencia."
   ],
   [
    36.901,
    "Contraejemplo: b, a, a."
   ]
  ]
 },
 "run2": {
  "dur": 62.88,
  "marks": {
   "pre": 2.904,
   "r1": 11.823,
   "r2": 14.583,
   "r3": 17.214,
   "why": 19.505,
   "split": 25.221,
   "h2": 31.406,
   "eq3": 34.844,
   "c3": 37.747,
   "s2": 39.896,
   "h3": 41.328,
   "eq4": 43.49,
   "yes": 44.909,
   "cnt": 48.776,
   "thm": 53.815
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 se hace con el contraejemplo?"
   ],
   [
    2.904,
    "Se recorren sus prefijos."
   ],
   [
    5.508,
    "Para cada uno se compara la hoja a la que lo manda el \u00e1rbol con el estado al que lo lleva la hip\u00f3tesis."
   ],
   [
    11.823,
    "Con el primero, coinciden."
   ],
   [
    14.583,
    "Con el segundo, tambi\u00e9n."
   ],
   [
    17.214,
    "Con el tercero, no."
   ],
   [
    19.505,
    "Entonces el prefijo anterior y la cadena de acceso de su hoja no pueden ser el mismo estado."
   ],
   [
    25.221,
    "Esa hoja se parte: un nodo nuevo con una cadena distinguidora, y una hoja nueva."
   ],
   [
    31.406,
    "La hip\u00f3tesis gana un estado: tres."
   ],
   [
    34.844,
    "Tercera consulta de equivalencia."
   ],
   [
    37.747,
    "Otro contraejemplo."
   ],
   [
    39.896,
    "Otra hoja partida, y cuatro estados."
   ],
   [
    43.49,
    "Cuarta consulta: s\u00ed."
   ],
   [
    46.12,
    "La hip\u00f3tesis es el objetivo."
   ],
   [
    48.776,
    "En total, cuatro consultas de equivalencia y catorce de pertenencia."
   ],
   [
    53.815,
    "Teorema diecis\u00e9is punto cinco: la clase de todos los D F A se aprende de manera exacta y eficiente con consultas de pertenencia y de equivalencia."
   ]
  ]
 },
 "wrap": {
  "dur": 34.752,
  "marks": {
   "w1": 1.823,
   "w2": 9.089,
   "w3": 16.693,
   "w4": 23.424
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un aut\u00f3mata finito determinista lee una cadena s\u00edmbolo a s\u00edmbolo, y la acepta si termina en un estado final."
   ],
   [
    9.089,
    "Aprenderlo de una muestra, de manera pasiva, es duro: hallar el m\u00e1s chico consistente es N P completo."
   ],
   [
    16.693,
    "Con consultas de pertenencia y de equivalencia, en cambio, se aprende de manera exacta y eficiente."
   ],
   [
    23.424,
    "El algoritmo mantiene un \u00e1rbol de clasificaci\u00f3n, y cada contraejemplo le agrega una hoja, y un estado a la hip\u00f3tesis."
   ],
   [
    31.497,
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
  "dur": 4.896,
  "marks": {},
  "cues": [
   [
    0.102,
    "Segunda parte."
   ],
   [
    2.188,
    "Una pregunta sobre el algoritmo."
   ]
  ]
 },
 "finish": {
  "dur": 4.512,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo treinta y uno."
   ]
  ]
 }
};

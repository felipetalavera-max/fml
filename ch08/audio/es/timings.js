window.TIMINGS = {
 "intro": {
  "dur": 15.792,
  "marks": {
   "sub": 6.966
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo ocho."
   ],
   [
    2.188,
    "Validaci\u00f3n cruzada, regularizaci\u00f3n y p\u00e9rdidas convexas."
   ],
   [
    6.966,
    "SRM tiene una buena garant\u00eda, pero suele ser intratable."
   ],
   [
    11.888,
    "Estas son las alternativas que se usan en la pr\u00e1ctica."
   ]
  ]
 },
 "cv": {
  "dur": 45.12,
  "marks": {
   "split": 10.716,
   "erm": 18.711,
   "val": 27.214,
   "pick": 31.497,
   "real": 38.763
  },
  "cues": [
   [
    0.102,
    "La primera es la validaci\u00f3n cruzada."
   ],
   [
    3.008,
    "Sigue el ejemplo del cap\u00edtulo anterior: cien puntos y conjuntos anidados, de uno a ciento veintiocho tramos."
   ],
   [
    10.716,
    "La muestra se divide en dos: una parte grande para entrenar y una fracci\u00f3n alfa, peque\u00f1a, que se aparta para validar."
   ],
   [
    18.711,
    "Con la primera parte se resuelve ERM en cada conjunto."
   ],
   [
    23.229,
    "En esa parte, el error solo baja al crecer k."
   ],
   [
    27.214,
    "En la parte apartada, no: baja y vuelve a subir."
   ],
   [
    31.497,
    "La validaci\u00f3n cruzada devuelve la soluci\u00f3n con menor error de validaci\u00f3n: aqu\u00ed, la de k igual a cinco."
   ],
   [
    38.763,
    "Su error de generalizaci\u00f3n es menos de la mitad del que resulta de elegir con el error de entrenamiento."
   ]
  ]
 },
 "garantia": {
  "dur": 44.832,
  "marks": {
   "fix": 2.266,
   "prop": 12.917,
   "union": 17.07,
   "thm": 20.964,
   "small": 33.529,
   "big": 38.75
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 garant\u00eda tiene?"
   ],
   [
    2.266,
    "Vista la primera parte, cada soluci\u00f3n de ERM queda fija, y la parte apartada es independiente de ella: su error de validaci\u00f3n es una estimaci\u00f3n honesta."
   ],
   [
    12.917,
    "La proposici\u00f3n lo afirma para todos los \u00edndices a la vez."
   ],
   [
    17.07,
    "El precio es un t\u00e9rmino que crece con el logaritmo de k."
   ],
   [
    20.964,
    "De ah\u00ed sale el teorema: con probabilidad alta, el error de la validaci\u00f3n cruzada supera al de SRM, entrenado con la primera parte, como mucho en dos t\u00e9rminos que dependen de alfa por m."
   ],
   [
    33.529,
    "Con alfa muy peque\u00f1o, esos t\u00e9rminos crecen y la cota deja de informar."
   ],
   [
    38.75,
    "Con alfa grande, quedan pocos puntos para entrenar."
   ],
   [
    42.786,
    "Hay que equilibrar."
   ]
  ]
 },
 "q1": {
  "dur": 6.504,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Con otra muestra, \u00bfqu\u00e9 conjunto elige la validaci\u00f3n cruzada?"
   ]
  ]
 },
 "pliegues": {
  "dur": 38.328,
  "marks": {
   "part": 9.531,
   "rot": 15.547,
   "avg": 22.018,
   "all": 26.445,
   "full": 32.122
  },
  "cues": [
   [
    0.102,
    "Con pocos datos, apartar una parte sale caro."
   ],
   [
    4.115,
    "La validaci\u00f3n cruzada de n pliegues usa todos los puntos para las dos cosas."
   ],
   [
    9.531,
    "La muestra se parte al azar en n pliegues; aqu\u00ed, cinco, de veinte puntos."
   ],
   [
    15.547,
    "Por turnos, un pliegue se aparta, se entrena con los dem\u00e1s y se mide el error en el pliegue apartado."
   ],
   [
    22.018,
    "El promedio de esos errores es el error de validaci\u00f3n cruzada."
   ],
   [
    26.445,
    "Se calcula para unos pocos valores del par\u00e1metro libre; aqu\u00ed, el \u00edndice k."
   ],
   [
    32.122,
    "Se elige el valor con menor error y, con \u00e9l, se entrena una vez m\u00e1s sobre toda la muestra."
   ]
  ]
 },
 "ene": {
  "dur": 32.448,
  "marks": {
   "small": 2.734,
   "big": 10.794,
   "typ": 19.154,
   "loo": 23.19
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1ntos pliegues conviene usar?"
   ],
   [
    2.734,
    "Con n peque\u00f1o, se entrena con bastantes menos puntos que m: el error medido tiene m\u00e1s sesgo, aunque menos varianza."
   ],
   [
    10.794,
    "Con n grande, se entrena con casi toda la muestra: el sesgo es peque\u00f1o, pero cada pliegue es peque\u00f1o y la varianza crece."
   ],
   [
    19.154,
    "En la pr\u00e1ctica se usa n igual a cinco o a diez."
   ],
   [
    23.19,
    "El caso extremo, n igual a m, se llama dejar uno fuera."
   ],
   [
    28.086,
    "Suele ser muy costoso: exige entrenar m veces."
   ]
  ]
 },
 "regular": {
  "dur": 49.416,
  "marks": {
   "fam": 5.951,
   "obj": 15.547,
   "dial": 23.021,
   "zero": 27.591,
   "turn": 33.503,
   "max": 38.711,
   "cv": 42.552
  },
  "cues": [
   [
    0.102,
    "Otra familia de algoritmos, inspirada en SRM, usa la regularizaci\u00f3n."
   ],
   [
    5.951,
    "Se parte de un conjunto muy rico: una uni\u00f3n de conjuntos anidados con \u00edndice continuo; por ejemplo, funciones lineales de norma acotada."
   ],
   [
    15.547,
    "Y se minimiza el error emp\u00edrico m\u00e1s lambda por un t\u00e9rmino de regularizaci\u00f3n, que mide la complejidad de la hip\u00f3tesis."
   ],
   [
    23.021,
    "En el ejemplo, ese t\u00e9rmino cuenta los saltos de la hip\u00f3tesis."
   ],
   [
    27.591,
    "Con lambda igual a cero no tiene efecto: es ERM, y se ajusta al ruido."
   ],
   [
    33.503,
    "Al subir lambda, cada salto cuesta m\u00e1s y la hip\u00f3tesis se simplifica."
   ],
   [
    38.711,
    "Si se sube demasiado, queda una constante."
   ],
   [
    42.552,
    "Lambda es un hiperpar\u00e1metro: su mejor valor no se conoce, y se elige con validaci\u00f3n cruzada."
   ]
  ]
 },
 "convexa": {
  "dur": 36.576,
  "marks": {
   "sign": 2.669,
   "step": 10.638,
   "chord": 14.753,
   "sur": 19.401,
   "hinge": 25.703,
   "exp": 28.021,
   "log": 29.922,
   "above": 31.979
  },
  "cues": [
   [
    0.102,
    "Falta el costo de c\u00f3mputo."
   ],
   [
    2.669,
    "Ahora la hip\u00f3tesis devuelve un n\u00famero real y se clasifica por su signo: acierta cuando la etiqueta por ese n\u00famero es positiva."
   ],
   [
    10.638,
    "Vista as\u00ed, la p\u00e9rdida cero-uno es un escal\u00f3n."
   ],
   [
    14.753,
    "No es convexa, y por eso minimizarla suele ser intratable."
   ],
   [
    19.401,
    "La salida es una p\u00e9rdida sustituta: una funci\u00f3n convexa que cubre al escal\u00f3n por arriba."
   ],
   [
    25.703,
    "La p\u00e9rdida bisagra."
   ],
   [
    28.021,
    "La exponencial."
   ],
   [
    29.922,
    "Y la log\u00edstica."
   ],
   [
    31.979,
    "Con cualquiera de ellas, el problema de optimizaci\u00f3n es convexo."
   ]
  ]
 },
 "q2": {
  "dur": 5.736,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfCu\u00e1l de estas curvas sirve como p\u00e9rdida sustituta?"
   ]
  ]
 },
 "teorema": {
  "dur": 39.216,
  "marks": {
   "loss": 5.99,
   "upper": 9.935,
   "thm": 14.115,
   "bars": 23.424,
   "zero": 32.344
  },
  "cues": [
   [
    0.102,
    "Pero as\u00ed se minimiza una p\u00e9rdida distinta de la que importa."
   ],
   [
    4.427,
    "\u00bfSirve?"
   ],
   [
    5.99,
    "Se toma la p\u00e9rdida esperada con la funci\u00f3n sustituta."
   ],
   [
    9.935,
    "Como cubre al escal\u00f3n, es una cota superior del error."
   ],
   [
    14.115,
    "El teorema dice m\u00e1s: el exceso de error, respecto del error de Bayes, queda acotado por una potencia del exceso de p\u00e9rdida sustituta."
   ],
   [
    23.424,
    "Las constantes dependen de la p\u00e9rdida: con la bisagra, la cota es lineal; con la exponencial y la log\u00edstica, es una ra\u00edz cuadrada."
   ],
   [
    32.344,
    "En los tres casos, si el exceso de p\u00e9rdida sustituta tiende a cero, el exceso de error tambi\u00e9n."
   ]
  ]
 },
 "wrap": {
  "dur": 26.904,
  "marks": {
   "w1": 1.823,
   "w2": 7.461,
   "w3": 12.122,
   "w4": 17.878
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "La validaci\u00f3n cruzada entrena con una parte de la muestra y elige con la parte apartada."
   ],
   [
    7.461,
    "Con n pliegues, cada punto sirve para entrenar y para validar."
   ],
   [
    12.122,
    "La regularizaci\u00f3n minimiza el error emp\u00edrico m\u00e1s lambda por un t\u00e9rmino de complejidad."
   ],
   [
    17.878,
    "Y una p\u00e9rdida sustituta convexa cubre a la cero-uno y vuelve tratable el problema."
   ],
   [
    23.672,
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
  "dur": 6.888,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo ocho."
   ],
   [
    4.258,
    "Con \u00e9l termina la unidad uno."
   ]
  ]
 }
};

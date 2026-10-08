window.TIMINGS = {
 "intro": {
  "dur": 14.208,
  "marks": {
   "sub": 4.466
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo seis."
   ],
   [
    2.227,
    "Cotas inferiores."
   ],
   [
    4.466,
    "Hasta aqu\u00ed, garant\u00edas: el error no pasa de cierto techo."
   ],
   [
    9.388,
    "Ahora, el piso: lo que ning\u00fan algoritmo puede evitar."
   ]
  ]
 },
 "que": {
  "dur": 36.144,
  "marks": {
   "up": 4.05,
   "all": 12.734,
   "low": 17.487,
   "alg": 20.495,
   "exist": 23.542,
   "floor": 31.589
  },
  "cues": [
   [
    0.102,
    "El cap\u00edtulo anterior termin\u00f3 con una cota superior."
   ],
   [
    4.05,
    "Con dimensi\u00f3n VC d, el error de generalizaci\u00f3n supera al emp\u00edrico, como mucho, en un t\u00e9rmino que depende de m sobre d."
   ],
   [
    12.734,
    "Vale para toda distribuci\u00f3n."
   ],
   [
    15.456,
    "\u00bfSe puede mejorar?"
   ],
   [
    17.487,
    "Una cota inferior responde hasta d\u00f3nde."
   ],
   [
    20.495,
    "Dice que, para cualquier algoritmo de aprendizaje, existen una distribuci\u00f3n y una funci\u00f3n objetivo con las que el error queda por encima de cierto piso, con probabilidad apreciable."
   ],
   [
    31.589,
    "No es el defecto de un algoritmo: es un l\u00edmite de todos."
   ]
  ]
 },
 "trampa": {
  "dur": 43.968,
  "marks": {
   "set": 3.516,
   "mass": 8.633,
   "draw": 15.911,
   "seen": 21.719,
   "unseen": 25.794,
   "coin": 27.878,
   "half": 36.901
  },
  "cues": [
   [
    0.102,
    "La distribuci\u00f3n dif\u00edcil se construye as\u00ed."
   ],
   [
    3.516,
    "Se toma un conjunto de d puntos que H fragmenta; aqu\u00ed, nueve."
   ],
   [
    8.633,
    "Casi toda la probabilidad se pone en un solo punto, y el resto se reparte en partes iguales entre los dem\u00e1s."
   ],
   [
    15.911,
    "Se extrae la muestra: de veinte ejemplos, dieciocho caen en el punto pesado."
   ],
   [
    21.719,
    "Solo dos de los ocho puntos raros muestran su etiqueta."
   ],
   [
    25.794,
    "Quedan seis sin ver."
   ],
   [
    27.878,
    "Como el conjunto est\u00e1 fragmentado, cualquier etiquetado de esos seis corresponde a alguna hip\u00f3tesis de H, y todos son compatibles con la muestra."
   ],
   [
    36.901,
    "Ah\u00ed, prediga lo que prediga, el algoritmo acierta en promedio la mitad: es una moneda al aire."
   ]
  ]
 },
 "teo320": {
  "dur": 46.776,
  "marks": {
   "cnt": 2.083,
   "half": 9.896,
   "exp": 14.753,
   "thm": 19.922,
   "grow": 33.398,
   "fall": 35.495,
   "inf": 40.182
  },
  "cues": [
   [
    0.102,
    "Falta contar."
   ],
   [
    2.083,
    "La probabilidad de los puntos raros se elige tan peque\u00f1a que, casi siempre, la muestra ve como mucho la mitad de ellos."
   ],
   [
    9.896,
    "En los no vistos, el algoritmo falla una de cada dos veces."
   ],
   [
    14.753,
    "Al sumar su probabilidad, el error esperado es al menos dos \u00e9psilon."
   ],
   [
    19.922,
    "De ah\u00ed sale el teorema."
   ],
   [
    22.266,
    "Para cualquier algoritmo existen una distribuci\u00f3n y una funci\u00f3n objetivo en H tales que el error supera d menos uno, sobre treinta y dos m, con probabilidad de al menos uno en cien."
   ],
   [
    33.398,
    "Ese piso crece con la dimensi\u00f3n VC y baja con el tama\u00f1o de la muestra: es del orden de d sobre m."
   ],
   [
    40.182,
    "Y si la dimensi\u00f3n VC es infinita, el piso no baja nunca: no hay aprendizaje PAC."
   ]
  ]
 },
 "q1": {
  "dur": 5.352,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "\u00bfEn qu\u00e9 punto el algoritmo solo puede adivinar?"
   ]
  ]
 },
 "ruido": {
  "dur": 57.744,
  "marks": {
   "noise": 3.164,
   "two": 9.648,
   "look": 20.534,
   "few": 26.068,
   "more": 33.75,
   "many": 37.565,
   "lem": 40.586,
   "exp": 47.656
  },
  "cues": [
   [
    0.102,
    "En el caso no realizable hay ruido."
   ],
   [
    3.164,
    "El mismo punto puede aparecer con una etiqueta o con la otra: su etiqueta es una moneda cargada."
   ],
   [
    9.648,
    "Ahora, dos monedas casi iguales."
   ],
   [
    13.216,
    "Una sale uno con probabilidad un medio m\u00e1s alfa medios; la otra, con un medio menos alfa medios."
   ],
   [
    20.534,
    "\u00bfCu\u00e1l se tir\u00f3?"
   ],
   [
    22.292,
    "Con diez tiradas, las dos filas se parecen."
   ],
   [
    26.068,
    "Estas curvas muestran cu\u00e1ntos unos salen con cada moneda."
   ],
   [
    30.221,
    "Con diez tiradas se enciman casi por completo."
   ],
   [
    33.75,
    "Con cuatro veces m\u00e1s, todav\u00eda se confunden."
   ],
   [
    37.565,
    "Hacen falta muchas para separarlas."
   ],
   [
    40.586,
    "Eso dice el primer lema: distinguirlas exige un n\u00famero de tiradas del orden de uno sobre alfa al cuadrado."
   ],
   [
    47.656,
    "Un segundo lema convierte promedios en probabilidades: si una variable entre cero y uno tiene promedio alto, toma valores altos con probabilidad apreciable."
   ]
  ]
 },
 "teo323": {
  "dur": 60.48,
  "marks": {
   "pts": 3.229,
   "samp": 14.44,
   "per": 17.682,
   "maj": 20.664,
   "wrong": 23.424,
   "cost": 27.383,
   "alpha": 33.307,
   "thm": 40.417,
   "cplx": 52.5
  },
  "cues": [
   [
    0.102,
    "Ahora, la construcci\u00f3n completa."
   ],
   [
    3.229,
    "Otra vez un conjunto fragmentado de d puntos, todos con la misma probabilidad."
   ],
   [
    8.854,
    "Cada punto tiene su propia moneda, cargada hacia una etiqueta o hacia la otra."
   ],
   [
    14.44,
    "La muestra reparte sus m ejemplos entre los d puntos: unas m sobre d tiradas por moneda."
   ],
   [
    20.664,
    "Incluso votando por mayor\u00eda en cada punto, aqu\u00ed el algoritmo elige el lado equivocado en dos."
   ],
   [
    27.383,
    "Cada punto mal resuelto cuesta alfa sobre d de error por encima del mejor clasificador."
   ],
   [
    33.307,
    "Y alfa se elige justo para que m sobre d tiradas no alcancen: del orden de la ra\u00edz de d sobre m."
   ],
   [
    40.417,
    "El teorema: para cualquier algoritmo existe una distribuci\u00f3n con la que el error supera al mejor de H en m\u00e1s de la ra\u00edz de d sobre trescientos veinte m, con probabilidad de al menos uno en sesenta y cuatro."
   ],
   [
    52.5,
    "Dicho al rev\u00e9s: para bajar ese exceso a \u00e9psilon hacen falta al menos d sobre trescientos veinte \u00e9psilon al cuadrado ejemplos."
   ]
  ]
 },
 "q2": {
  "dur": 6.36,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Si alfa baja a la mitad, \u00bfcu\u00e1ntas tiradas hacen falta?"
   ]
  ]
 },
 "dos": {
  "dur": 39.072,
  "marks": {
   "up": 3.411,
   "nr": 10.352,
   "same": 14.948,
   "re": 21.654,
   "vc": 27.161,
   "inf": 34.062
  },
  "cues": [
   [
    0.102,
    "Ahora se pueden juntar las dos caras."
   ],
   [
    3.411,
    "El t\u00e9rmino de la cota superior del cap\u00edtulo anterior baja como la ra\u00edz de d sobre m, salvo un logaritmo."
   ],
   [
    10.352,
    "La cota inferior del caso no realizable baja igual: como la ra\u00edz de d sobre m."
   ],
   [
    14.948,
    "Techo y piso tienen la misma forma: ning\u00fan algoritmo mejora ese ritmo en todos los casos."
   ],
   [
    21.654,
    "En el caso realizable, el piso es m\u00e1s bajo: del orden de d sobre m."
   ],
   [
    27.161,
    "En los dos casos manda la misma cantidad: la dimensi\u00f3n VC, comparada con el tama\u00f1o de la muestra."
   ],
   [
    34.062,
    "Y con dimensi\u00f3n VC infinita, no se puede aprender en el sentido PAC."
   ]
  ]
 },
 "wrap": {
  "dur": 28.272,
  "marks": {
   "w1": 1.823,
   "w2": 7.786,
   "w3": 12.826,
   "w4": 18.503
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Una cota inferior vale para cualquier algoritmo: siempre existe una distribuci\u00f3n dif\u00edcil."
   ],
   [
    7.786,
    "En el caso realizable, el error forzado es del orden de d sobre m."
   ],
   [
    12.826,
    "En el no realizable, el exceso forzado es del orden de la ra\u00edz de d sobre m."
   ],
   [
    18.503,
    "La dimensi\u00f3n VC gobierna el techo y el piso; si es infinita, no hay aprendizaje PAC."
   ],
   [
    25.039,
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
  "dur": 5.616,
  "marks": {},
  "cues": [
   [
    0.102,
    "\u00daltima pregunta."
   ],
   [
    2.083,
    "\u00bfQu\u00e9 error no puede evitar ning\u00fan algoritmo?"
   ]
  ]
 },
 "finish": {
  "dur": 4.368,
  "marks": {},
  "cues": [
   [
    0.102,
    "Listo."
   ],
   [
    1.68,
    "Ese fue el cap\u00edtulo seis."
   ]
  ]
 }
};

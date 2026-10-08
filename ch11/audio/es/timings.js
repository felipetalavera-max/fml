window.TIMINGS = {
 "intro": {
  "dur": 15.456,
  "marks": {
   "sub": 5.013
  },
  "cues": [
   [
    0.102,
    "Cap\u00edtulo once."
   ],
   [
    2.175,
    "Kernels definidos positivos."
   ],
   [
    5.013,
    "SVM solo traza fronteras rectas, y muchas muestras no se dejan separar as\u00ed."
   ],
   [
    10.846,
    "La salida es cambiar de espacio, sin pagar el costo de hacerlo."
   ]
  ]
 },
 "mapa": {
  "dur": 39.816,
  "marks": {
   "line": 4.518,
   "map": 9.128,
   "lift": 23.034,
   "plane": 28.763,
   "back": 33.724
  },
  "cues": [
   [
    0.102,
    "Aqu\u00ed hay dos clases: una en el centro y otra alrededor."
   ],
   [
    4.518,
    "Ninguna recta las separa: cualquiera deja varios errores."
   ],
   [
    9.128,
    "Pero se puede cambiar de espacio."
   ],
   [
    11.797,
    "Un mapa, fi may\u00fascula, env\u00eda cada punto a un espacio de m\u00e1s dimensiones."
   ],
   [
    17.721,
    "Este agrega una tercera coordenada: el cuadrado de la distancia al centro."
   ],
   [
    23.034,
    "Los puntos del centro casi no suben."
   ],
   [
    26.107,
    "Los de alrededor suben mucho."
   ],
   [
    28.763,
    "En el espacio nuevo, un plano separa las dos clases sin errores."
   ],
   [
    33.724,
    "Visto desde el espacio original, ese plano es un c\u00edrculo: una frontera no lineal."
   ]
  ]
 },
 "kernel": {
  "dur": 47.136,
  "marks": {
   "big": 2.057,
   "bound": 12.135,
   "cost": 16.784,
   "def": 22.539,
   "long": 30.312,
   "short": 35.859,
   "win": 40.495
  },
  "cues": [
   [
    0.102,
    "\u00bfCu\u00e1l es el precio?"
   ],
   [
    2.057,
    "El espacio de caracter\u00edsticas puede ser enorme."
   ],
   [
    5.677,
    "Con secuencias de tres palabras y un vocabulario de cien mil, la dimensi\u00f3n llega a diez a la quince."
   ],
   [
    12.135,
    "La cota por margen del cap\u00edtulo anterior no depende de la dimensi\u00f3n."
   ],
   [
    16.784,
    "El c\u00f3mputo s\u00ed: SVM necesita muchos productos internos en ese espacio."
   ],
   [
    22.539,
    "La soluci\u00f3n es un kernel: una funci\u00f3n de dos puntos que devuelve, directo, el producto interno de sus im\u00e1genes."
   ],
   [
    30.312,
    "El camino largo construye las dos im\u00e1genes y multiplica coordenada por coordenada."
   ],
   [
    35.859,
    "El kernel llega al mismo n\u00famero con una cuenta en el espacio original."
   ],
   [
    40.495,
    "Dos ventajas: es m\u00e1s barato, y no hace falta construir fi; basta con que exista."
   ]
  ]
 },
 "xor": {
  "dur": 36.864,
  "marks": {
   "pts": 3.294,
   "line": 9.245,
   "poly": 12.24,
   "phi": 19.089,
   "go": 23.906,
   "sep": 28.216
  },
  "cues": [
   [
    0.102,
    "El ejemplo cl\u00e1sico es el problema XOR."
   ],
   [
    3.294,
    "Cuatro puntos: son azules los que tienen exactamente una coordenada igual a uno."
   ],
   [
    9.245,
    "Ninguna recta acierta en los cuatro."
   ],
   [
    12.24,
    "Se usa el kernel polinomial de grado dos: el producto interno m\u00e1s una constante, al cuadrado."
   ],
   [
    19.089,
    "Al desarrollar el cuadrado aparece su mapa, de seis coordenadas."
   ],
   [
    23.906,
    "Basta mirar dos de las seis: la tercera y la cuarta."
   ],
   [
    28.216,
    "Los azules quedan a un lado y los salm\u00f3n al otro."
   ],
   [
    31.901,
    "El hiperplano que los separa: producto de las coordenadas igual a cero."
   ]
  ]
 },
 "q1": {
  "dur": 8.928,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "El mismo mapa, con las coordenadas tres y cuatro."
   ],
   [
    5.781,
    "\u00bfD\u00f3nde cae la imagen del punto marcado?"
   ]
  ]
 },
 "pds": {
  "dur": 45.216,
  "marks": {
   "sample": 2.943,
   "gram": 7.565,
   "pair": 15.221,
   "sym": 17.344,
   "pds": 20.964,
   "quad": 29.896,
   "eig": 37.135
  },
  "cues": [
   [
    0.102,
    "\u00bfQu\u00e9 funciones sirven como kernel?"
   ],
   [
    2.943,
    "Se toma una muestra cualquiera: aqu\u00ed, cinco puntos."
   ],
   [
    7.565,
    "Con el kernel se llena una tabla: fila i, columna j, el kernel entre el punto i y el punto j."
   ],
   [
    15.221,
    "Es la matriz de Gram."
   ],
   [
    17.344,
    "Es sim\u00e9trica: el orden del par no importa."
   ],
   [
    20.964,
    "El kernel se llama definido positivo y sim\u00e9trico, PDS, si para toda muestra esta matriz es sim\u00e9trica y semidefinida positiva."
   ],
   [
    29.896,
    "Es decir: con cualquier vector c, la suma de c i por c j por la celda i j nunca es negativa."
   ],
   [
    37.135,
    "O lo que es igual: ning\u00fan valor propio de la matriz es negativo."
   ],
   [
    41.875,
    "Aqu\u00ed, el menor es cuatro punto cuatro."
   ]
  ]
 },
 "ejemplos": {
  "dur": 38.688,
  "marks": {
   "poly": 2.891,
   "gauss": 9.427,
   "sim": 14.427,
   "wide": 21.706,
   "narrow": 27.643,
   "sig": 31.471
  },
  "cues": [
   [
    0.102,
    "Tres kernels de uso frecuente."
   ],
   [
    2.891,
    "El polinomial, de grado d: sus caracter\u00edsticas son todos los monomios hasta ese grado."
   ],
   [
    9.427,
    "El gaussiano: una campana sobre la distancia entre los dos puntos."
   ],
   [
    14.427,
    "Se lee como una medida de similitud: vale uno si los puntos coinciden y cae hacia cero cuando se alejan."
   ],
   [
    21.706,
    "Sigma fija el ancho: con sigma grande, puntos lejanos todav\u00eda se parecen."
   ],
   [
    27.643,
    "Con sigma peque\u00f1o, solo cuentan los vecinos."
   ],
   [
    31.471,
    "Y el sigmoide: una tangente hiperb\u00f3lica del producto interno, ligada a las redes neuronales simples."
   ]
  ]
 },
 "q2": {
  "dur": 9.312,
  "marks": {},
  "cues": [
   [
    0.102,
    "Comprobaci\u00f3n."
   ],
   [
    1.901,
    "Tres tablas para un mismo par de puntos."
   ],
   [
    5.286,
    "\u00bfCu\u00e1l puede ser la matriz de Gram de un kernel PDS?"
   ]
  ]
 },
 "rkhs": {
  "dur": 52.392,
  "marks": {
   "thm": 3.125,
   "phi": 12.773,
   "inner": 20.456,
   "h": 28.503,
   "rep": 38.177,
   "feat": 45.859
  },
  "cues": [
   [
    0.102,
    "Ahora, el resultado central."
   ],
   [
    3.125,
    "Todo kernel PDS es un producto interno: existen un espacio de Hilbert y un mapa fi tales que el kernel de dos puntos es el producto interno de sus im\u00e1genes."
   ],
   [
    12.773,
    "La construcci\u00f3n: la imagen de un punto x es una funci\u00f3n, la que dice cu\u00e1nto se parece x a cada otro punto."
   ],
   [
    20.456,
    "El producto interno de dos de esas funciones se define como el kernel entre sus puntos: es la altura de una en el punto de la otra."
   ],
   [
    28.503,
    "El espacio se completa con las combinaciones de esas funciones."
   ],
   [
    32.995,
    "Que el kernel sea PDS garantiza que ninguna tenga norma negativa."
   ],
   [
    38.177,
    "Y vale la propiedad reproductora: evaluar una funci\u00f3n en un punto es hacer su producto interno con la funci\u00f3n de ese punto."
   ],
   [
    45.859,
    "En la pr\u00e1ctica: elegir un kernel PDS es elegir las caracter\u00edsticas, sin escribirlas."
   ]
  ]
 },
 "props": {
  "dur": 58.392,
  "marks": {
   "cs": 2.773,
   "cs2": 10.547,
   "norm": 15.547,
   "one": 21.276,
   "close": 28.229,
   "chain": 39.779,
   "c2": 45.625,
   "c3": 49.141,
   "c4": 53.281
  },
  "cues": [
   [
    0.102,
    "Tres propiedades para cerrar."
   ],
   [
    2.773,
    "Cauchy-Schwarz: el cuadrado del kernel entre dos puntos no supera el producto de los kernels de cada punto consigo mismo."
   ],
   [
    10.547,
    "En la tabla: una celda al cuadrado, contra las dos de la diagonal."
   ],
   [
    15.547,
    "Normalizaci\u00f3n: se divide cada celda por la ra\u00edz de esas dos entradas."
   ],
   [
    21.276,
    "La diagonal queda en uno, cada valor pasa a ser un coseno, y el kernel sigue siendo PDS."
   ],
   [
    28.229,
    "Y el cierre: la suma y el producto de kernels PDS son PDS."
   ],
   [
    33.451,
    "Tambi\u00e9n el l\u00edmite de una sucesi\u00f3n, y una serie de potencias con coeficientes no negativos."
   ],
   [
    39.779,
    "As\u00ed se arman kernels nuevos."
   ],
   [
    42.669,
    "El producto interno es PDS."
   ],
   [
    45.625,
    "Dividido por sigma al cuadrado, tambi\u00e9n."
   ],
   [
    49.141,
    "Su exponencial es una serie con coeficientes positivos."
   ],
   [
    53.281,
    "Al normalizarla sale el kernel gaussiano: por eso es PDS."
   ]
  ]
 },
 "wrap": {
  "dur": 28.68,
  "marks": {
   "w1": 1.823,
   "w2": 6.849,
   "w3": 11.641,
   "w4": 16.94
  },
  "cues": [
   [
    0.102,
    "En resumen."
   ],
   [
    1.823,
    "Un mapa a un espacio de m\u00e1s dimensiones puede volver separable una muestra."
   ],
   [
    6.849,
    "Un kernel da el producto interno en ese espacio sin construir el mapa."
   ],
   [
    11.641,
    "Es PDS si toda matriz de Gram es sim\u00e9trica y semidefinida positiva."
   ],
   [
    16.94,
    "Y todo kernel PDS es un producto interno en alg\u00fan espacio de Hilbert; sumas, productos, l\u00edmites y series lo conservan."
   ],
   [
    25.43,
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
    "Ese fue el cap\u00edtulo once."
   ]
  ]
 }
};

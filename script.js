console.log("Archivo JavaScript cargado correctamente");


//Declara una variable llamada challenge y asígnale el valor '30 Days Of JavaScript':
let challenge = '30 Days Of JavaScript';

//Imprime la cadena en la consola del navegador usando console.log():
console.log(challenge);

//Imprime la longitud de la cadena en la consola usando console.log():
console.log(challenge.length);

//Cambia todos los caracteres de la cadena a mayúsculas usando el método toUpperCase():
console.log(challenge.toUpperCase());

//Cambia todos los caracteres de la cadena a minúsculas usando el método toLowerCase():
console.log(challenge.toLowerCase());

//Corta (extrae) la primera palabra de la cadena usando el método substr() o substring():
console.log(challenge.substring(0, 2)); // Salida: '30'

//Corta la frase 'Days Of JavaScript' de la cadena '30 Days Of JavaScript':
console.log(challenge.substring(3)); // Salida: 'Days Of JavaScript'

//Comprueba si la cadena contiene la palabra 'Script' usando el método includes():
console.log(challenge.includes('Script')); // Salida: true

//Divide la cadena en una matriz usando el método split():
console.log(challenge.split()); // Salida: ['30 Days Of JavaScript']

//Divide la cadena '30 Days Of JavaScript' en el espacio usando split():
console.log(challenge.split(' ')); // Salida: ['30', 'Days', 'Of', 'JavaScript']

//Divide la cadena 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' por las comas y conviértela en una matriz:
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); // Salida: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Cambia 'JavaScript' por 'Node' en la cadena '30 Days Of JavaScript' usando el método replace():
console.log(challenge.replace('JavaScript', 'Node')); // Salida: '30 Days Of Node'



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\//\\//\\//\\//\\//



//¿Cuál es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Usa el método charAt():
console.log(challenge.charAt(15)); // Salida: 'a'

//¿Cuál es el código de carácter de 'J' en la cadena '30 días de JavaScript' usando charCodeAt()?
console.log(challenge.charCodeAt(9)); // Salida: 74 (código ASCII de 'J')

//Usa indexOf() para determinar la posición de la primera aparición de 'a' en '30 días de JavaScript':
console.log(challenge.indexOf('a')); // Salida: 4

//Usa lastIndexOf() para determinar la posición de la última aparición de 'a' en '30 días de JavaScript':
console.log(challenge.lastIndexOf('a')); // Salida: 14

//Usa indexOf() para encontrar la posición de la primera aparición de la palabra 'porque' en la oración: 'No puedes terminar una oración con "porque", porque "porque" es una conjunción':
let sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(sentence.indexOf('porque')); // Salida: 35

//Usa lastIndexOf() para encontrar la posición de la última aparición de la palabra 'porque' en la misma oración:
console.log(sentence.lastIndexOf('porque')); // Salida: 47

//Usa la búsqueda (search()) para encontrar la posición de la primera aparición de la palabra 'porque' en la misma oración:
console.log(sentence.search('porque')); // Salida: 35



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/\\//\\//\\//\\//\\//




// 1. Eliminar espacios en blanco con trim()
let cadena = ' 30 días de JavaScript ';
let cadenaTrimmed = cadena.trim();
console.log(cadenaTrimmed);  // Output: '30 días de JavaScript'

// 2. Comprobar si comienza con '30 Days Of JavaScript' usando startWith()
let cadenaEnglish = '30 Days Of JavaScript';
console.log(cadenaEnglish.startsWith('30 Days Of JavaScript'));  // Output: true

// 3. Comprobar si termina con '30 días de JavaScript' usando endsWith()
let cadenaSpanish = '30 días de JavaScript';
console.log(cadenaSpanish.endsWith('30 días de JavaScript'));  // Output: true

// 4. Encontrar todas las 'a' en '30 días de JavaScript' usando match()
let matchA = cadenaSpanish.match(/a/g);
console.log(matchA);  // Output: ['a', 'a', 'a', 'a']

// 5. Combinar cadenas con concat()
let parte1 = '30 días de';
let parte2 = ' JavaScript';
let concatenada = parte1.concat(parte2);
console.log(concatenada);  // Output: '30 días de JavaScript'

// 6. Repetir '30 días de JavaScript' dos veces usando repeat()
let repetido = cadenaSpanish.repeat(2);
console.log(repetido);  // Output: '30 días de JavaScript30 días de JavaScript'

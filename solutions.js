// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number'){
    return ("No se aceptan valores que no sean números")

  } else {
    return a + b; 
  }  
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n < 0 || n !== 'number') {
    return ("El valor debe ser positivo y debe introducirse un número, cualquier otro carácter no es válido")
  } else {
    let mult = 1;
    for (let i = 2; i <= n; i++){
      mult *= i;
      let factorial = mult; 
      return ("El factorial de " + n + " es " +factorial);
    } 
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (arr.lenght === null) {
    return ("El arreglo no tiene información")
  } 

  let a = arr[i];
  for (let i = 0; i < arr.lenght; i++) {
    a > arr[i]
  }
  return a; 
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  let A = 0, E = 0, I = 0, O = 0, U = 0;

  let frase = "Frase a investigar"; 

  for (let i = 0; i < frase.length; i++){
    let vocal = frase[i];
    
    switch (vocal) {
      case 'a': 
      case 'A': 
        A++;
        break;
      
      case 'e':
      case 'E': 
        E++;
        break;
        
      case 'i':
      case 'I': 
        I++;
        break;
        
      case 'o':
      case 'O':
        O++;
        break;
  
      case 'u':
      case 'U':
        U++;
        break;
    }
  }

  let total = A + E + I + O + U;
  return ("Hay un total de " + total + "vocales en la frase digitada");

}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here

  if (n % n === 0 && n % 1 === 0) {
    return true;
  }
  return false;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

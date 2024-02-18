// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number'){
    console.log("No se aceptan valores diferentes a números");

  } else {
    return a + b; 
  }  
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n < 0 || n !== 'number') {
    console.log("El valor debe ser positivo y debe introducirse un número, cualquier otro carácter no es válido");
  } else {

    let mult = 1;
    for (let i = 2; i <= n; i++){
      mult *= i;
      let factorial = mult; 
      console.log("El factorial de " + n + " es " + factorial);
    } 
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (arr.lenght === 0) {
    console.log("El arreglo no tiene información");
  } 

  let a = arr[0];
  for (let i = 1; i < arr.lenght; i++) {
    if (arr[i] > a){
      a = arr[i]
  }
  return a; 
  }

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
  console.log("Hay un total de " + total + "vocales en la frase digitada");

}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n <= 1){
    return false;
  }

  for (let i = 2; i <= n /2; i++){
    if (n % n === 0 && n % 1 === 0) {
    return true;
  }
  return false;
  }
  
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

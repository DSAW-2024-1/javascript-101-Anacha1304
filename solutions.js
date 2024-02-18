// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number'){
    console.log("Los datos de entrada no son adecuados");

  } else {
    return a + b; 
  }  
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n < 0 || typeof n !== 'number') {
    console.log("El valor debe ser positivo y debe introducirse un número, cualquier otro carácter no es válido");
  } else {
    let mult = 1;
    for (let i = 2; i <= n; i++){
      mult *= i; 
    } 
    return mult;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (arr.length === 0){
    console.log("No hay información en el arreglo")
  }

  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > a){
      a = arr[i]
    }
  }
  return a; 

}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  let A = 0, E = 0, I = 0, O = 0, U = 0;


  for (let i = 0; i < str.length; i++){
    let vocal = str[i];
    
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
  return total;

}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n <= 1){
    return false;
  }

  for (let i = 2; i <= n /2; i++){
    if (n % i === 0) {
    return false;
    } 
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

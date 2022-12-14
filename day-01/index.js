function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addCapitalToWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

function atIndex(arr, index) {
  return index < 0 ? arr[arr.length + index] : arr[index];
}

function oddOrEven(num) {
  return num 
    .toString()
    .split('')
    .map((number) => parseInt(number))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0)
  % 2 === 0 ? 'Evenish' : 'Oddish';
}

function isAnagram(input1, input2) {
  const array1 = input1.split('').sort().join('');
  const array2 = input2.split('').sort().join('');
  
  return array1 === array2 ? true : false; 
}


function fizzBuzz(num) {
  const arrayToCheck = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arrayToCheck.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arrayToCheck.push('Buzz');
    } else if (i % 3 === 0) {
      arrayToCheck.push('Fizz');
    } else {
      arrayToCheck.push(i);
    }
  }
  return arrayToCheck;
}





function addPunctuation (str) {
  return function addSomething(string) {
    return string + str;
  };
}
// why does unshift not work?
function addFirst (str) {
  const newArr = [];
  return function addToArr (arr) {
    newArr.push(str, ...arr);
    return newArr;
  };
}




module.exports = { reverseSentence, addCapitalToWords, oddOrEven, addPunctuation, addFirst, atIndex, isAnagram };

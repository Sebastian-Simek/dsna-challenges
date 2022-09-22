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




module.exports = { reverseSentence, addCapitalToWords, oddOrEven, addPunctuation, addFirst, atIndex };

class Stack {
  #list = [];

  constructor(initialList) {

    if (initialList) this.#list = initialList;
  }

  classPush(item) {
    this.#list.push(item);
  }

  classPop() {
    return this.#list.pop();
  }

  classPeek() {
    return this.#list[this.#list.length - 1];
  }

  get readableArr() {
    return this.#list;
  }

}

function reverse (arr) {
  const resultsArray = [];
  const stackArray = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stackArray.classPush(arr[i]);
  } 
  let item;
  // eslint-disable-next-line no-cond-assign
  while (item = stackArray.classPop()) {
    resultsArray.push(item);
  }
  return resultsArray;

  

}

 


module.exports = { Stack, reverse };

const { reverseSentence, addCapitalToWords, oddOrEven, addPunctuation, addFirst, atIndex, isAnagram, fizzBuzz } = require('./index');


describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('Add capitals to words', () => {
    it('should add a capital letter to each letter', () => {
      expect(addCapitalToWords('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
  describe('Determins if its odd or even', () => {
    it('determins its odness', () => {
      expect(oddOrEven(121)).toBe('Evenish');
    });
  });
  describe('extra function', () => {
    it('adds punctionation', () => {
      expect(addPunctuation('!!!')('hello world')).toEqual('hello world!!!');
    });
  });
  describe('another function', () => {
    it('adds arrays stuff', () => {
      expect(addFirst('orange')(['red', 'blue', 'green'])).toEqual(['orange', 'red', 'blue', 'green']);
    });
  });
  describe('Prim3', () => {
    it('takes an array and an index and returns the item at corresponding index', () => {
      expect(atIndex(['a', 'b', 'c', 'd', 'e'], 1)).toEqual('b');
      expect(atIndex(['a', 'b', 'c', 'd', 'e'], -2)).toEqual('d');
    });
  });
  describe('prim4', () => {
    it('returns true or false if anagram', () => {
      expect(isAnagram('superintended', 'unpredestined')).toEqual(true);
      expect(isAnagram('pictorialness', 'documentarily')).toEqual(false);
    });
  });
  describe('prim5', () => {
    it('fizzbuzz', () => {
      expect(fizzBuzz(16)).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ]);
    });
  });
  
});

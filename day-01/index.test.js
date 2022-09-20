const { reverseSentence, addCapitalToWords, oddOrEven, addPunctuation, addFirst } = require('./index');


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
  
});

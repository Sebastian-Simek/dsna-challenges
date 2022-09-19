const { reverseSentence, addCapitalToWords } = require('./index');


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
});

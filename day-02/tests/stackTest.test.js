const { Stack, reverse } = require('../Stack');

describe('Stack Tests', () => {
  it('should add an item to an array', () => {
    const newItemArr = new Stack([]);
    newItemArr.classPush('fox');
    newItemArr.classPush('goose');
    newItemArr.classPush('lizard');
    expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
  });
  it('pop should return the array without the last item', () => {
    const newItemArr = new Stack(['fox', 'goose', 'lizard']);
    newItemArr.classPop();
    expect(newItemArr.readableArr).toEqual(['fox', 'goose']);
  });
  it('peek should return the last item in the array', () => {
    const peekedItem = new Stack(['fox', 'goose', 'lizard']);
    expect(peekedItem.classPeek()).toEqual('lizard');
  }); 
});
describe('CHO4', () => {
  it('should reverse an array', () => {
    expect(reverse([12, 3, 5, 7])).toEqual([7, 5, 3, 12]);

  });
});

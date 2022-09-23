class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(nodeObject) {
    if(nodeObject.value === this.value) { 
      this.value = nodeObject.value;
    } else if (nodeObject.value > this.value) {
      if (this.right === null) {
        this.right = nodeObject;
      } else {
        this.right.add(nodeObject);
      }
    } else if (nodeObject.value <= this.value) {
      if (this.left === null) {
        this.left = nodeObject;
      } else {
        this.left.add(nodeObject);
      }
    }
  }
}

module.exports = { BinaryTreeNode };




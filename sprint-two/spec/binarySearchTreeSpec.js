describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(50);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree

  describe("insert", function(){
    it("should not have left or right properties set to a value when nothing is inserted", function(){
      expect(binarySearchTree.left).toEqual(undefined);
      expect(binarySearchTree.right).toEqual(undefined);
    });

    it("should insert to the left when the value is lower than the parent node's value",function(){
      binarySearchTree.insert(25);
      expect(binarySearchTree.left.value).toEqual(25);
    });

    it("should insert to the right when the value is higher than the parent node's value",function(){
      binarySearchTree.insert(75);
      expect(binarySearchTree.right.value).toEqual(75);
    });

    it("should insert to the left when the value is lower than the parent node's left value",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(10);
      expect(binarySearchTree.left.left.value).toEqual(10);
    });

    it("should insert to the right when the value is higher than the parent node's left value",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(40);
      expect(binarySearchTree.left.right.value).toEqual(40);
    });

    it("should insert to the right when the value is higher than the parent node's value",function(){
      binarySearchTree.insert(75);
      expect(binarySearchTree.right.value).toEqual(75);
    });

    it("should insert to the left when the value is lower than the parent node's right value",function(){
      binarySearchTree.insert(75);
      binarySearchTree.insert(60);
      expect(binarySearchTree.right.left.value).toEqual(60);
    });

    it("should insert to the right when the value is hight than the parent node's right value",function(){
      binarySearchTree.insert(75);
      binarySearchTree.insert(90);
      expect(binarySearchTree.right.right.value).toEqual(90);
    });

    it("should not insert when the value is equal to the parent node's value",function(){
      binarySearchTree.insert(50);
      expect(binarySearchTree.left).toEqual(undefined);
      expect(binarySearchTree.right).toEqual(undefined);
    });

    it("should not insert when the value is equal to an existing node",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(75);
      binarySearchTree.insert(25);
      expect(binarySearchTree.left.left).toEqual(undefined);
      expect(binarySearchTree.left.right).toEqual(undefined);
      binarySearchTree.insert(75);
      expect(binarySearchTree.right.left).toEqual(undefined);
      expect(binarySearchTree.right.right).toEqual(undefined);
    });
  });

  describe("contains", function(){
    it("should return false if the value is not equal to the parent node's value",function(){
      expect(binarySearchTree.contains(75)).toEqual(false);
    });

    it("should return true if the value is equal to the parent node's value",function(){
      expect(binarySearchTree.contains(50)).toEqual(true);
    });

    it("should return false if the value is not in the tree which has two nodes",function(){
      binarySearchTree.insert(25);
      expect(binarySearchTree.contains(40)).toEqual(false);
    });

    it("should return true if the value is in the tree which has two nodes",function(){
      binarySearchTree.insert(25);
      expect(binarySearchTree.contains(25)).toEqual(true);
    });

    it("should return false if the value is not in the tree which has four nodes",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(40);
      binarySearchTree.insert(90);
      expect(binarySearchTree.contains(75)).toEqual(false);
    });

    it("should return true if the value is in the tree which has four nodes",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(40);
      binarySearchTree.insert(90);
      expect(binarySearchTree.contains(40)).toEqual(true);
    });
  });

  describe("depthFirstLog", function(){
    var callback = function(){
      console.log("we went to this node: "+this.value);
      this.value += 5;
    };

    it("should return the parent node's value in an array",function(){
      binarySearchTree.depthFirstLog(callback);
      expect(binarySearchTree.value).toEqual(55);
    });

    it("should return the all values in the tree in an array",function(){
      binarySearchTree.insert(25);
      binarySearchTree.depthFirstLog(callback);
      expect(binarySearchTree.value).toEqual(55);
      expect(binarySearchTree.left.value).toEqual(30);
    });

    it("should return the all values in the tree in an array",function(){
      binarySearchTree.insert(25);
      binarySearchTree.insert(40);
      binarySearchTree.insert(75);
      binarySearchTree.insert(90);
      binarySearchTree.depthFirstLog(callback);
      expect(binarySearchTree.left.value).toEqual(30);
      expect(binarySearchTree.left.right.value).toEqual(45);
      expect(binarySearchTree.right.value).toEqual(80);
      expect(binarySearchTree.right.right.value).toEqual(95);
    });
  });
});
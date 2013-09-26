describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  describe('addChild', function(){
    it("should add a child tree to the parent tree", function(){
      tree.addChild("ken");
      expect(tree.children[0].value).toEqual("ken");
    });
  });

  // Add more tests here to test the functionality of tree.
  describe('contains', function(){
    it("should determine if a single tree contains a value",function(){
      tree.addChild("ken");
      expect(tree.contains("ken")).toEqual(true);
    });

    it("should determine if a value is in the entire tree", function(){
      tree.addChild("ken");
      tree.addChild("rohaus");
      tree.addChild("marcus");
      expect(tree.contains("rohaus")).toEqual(true);
    });

    it("should determine if a value is not in the entire tree", function(){
      tree.addChild("ken");
      tree.addChild("rohaus");
      tree.addChild("marcus");
      expect(tree.contains("lee")).toEqual(false);
    });
  });
});
describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("mother");
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

    it("should determine if a grand child is in the tree", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      child.addChild("rohaus");
      var grandChild = child.children[0];
      tree.addChild("marcus");
      expect(tree.contains("rohaus")).toEqual(true);
    });

    it("should determine if a value is not in the tree with grandchildren", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      child.addChild("rohaus");
      var grandChild = child.children[0];
      tree.addChild("marcus");
      expect(tree.contains("stephanie")).toEqual(false);
    });
  });

  describe("parent", function(){
    it("should return undefined if it has no parent node", function(){
      expect(tree.parent).toEqual(undefined);
    });

    it("should return the parent node value if it has parent", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      expect(child.parent).toEqual("mother");
    });

    it("should return the parent node of grand child", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      child.addChild("rohaus");
      var grandChild = child.children[0];
      expect(grandChild.parent).toEqual("ken");
    });
  });

  describe("removeFromParent", function(){
    it("should remove destroy the relationship between the child and the parent", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      child.removeFromParent();
      expect(child.parent).toEqual(undefined);
      expect(tree.children).toEqual(undefined);
    });

    it("should remove destroy the relationship between the grandchild and the child", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      child.addChild("rohaus");
      var grandChild = child.children[0];
      grandChild.removeFromParent();
      expect(grandChild.parent).toEqual(undefined);
      expect(child.children).toEqual(undefined);
    });

    it("should remove destroy the relationship between one of the two children and the parent", function(){
      tree.addChild("ken");
      var child = tree.children[0];
      tree.addChild("rohaus");
      var brother = tree.children[1];
      child.removeFromParent();
      expect(brother.parent).toEqual("mother");
      expect(tree.children).toEqual(["rohaus"]);
      expect(child.parent).toEqual(undefined);
    });
  });
});
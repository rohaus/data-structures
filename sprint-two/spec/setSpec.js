describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  describe("add", function(){
    it("should add a value to the set", function() {
      set.add("hello");
      expect(set._storage).toEqual({"hello": true});
    });

    it("should add two values to the set", function() {
      set.add("hello");
      set.add("ken");
      expect(set._storage).toEqual({"hello": true, "ken": true});
    });

    it("should not add a value to the set if the value is already in the set", function(){
      set.add("hello");
      set.add("hello");
      expect(set._storage).toEqual({"hello": true});
    });
  });

  describe("remove", function(){
    it("should remove a value in the set", function() {
      set.add("hello");
      set.remove("hello");
      expect(set._storage).toEqual({});
    });

    it("should add two values to the set and remove the first value", function() {
      set.add("hello");
      set.add("ken");
      set.remove("hello");
      expect(set._storage).toEqual({"ken": true});
    });
  });

  describe("contains", function(){
    it("should return false for an empty set", function(){
      expect(set.contains("frogs")).toEqual(false);
    });

    it("should return true for a value in the set", function(){
      set.add("hello");
      expect(set.contains("hello")).toEqual(true);
    });

    it("should return false for a value that was removed from the set", function(){
      set.add("hello");
      set.add("bye");
      set.remove("bye");
      expect(set.contains("bye")).toEqual(false);
    });
  });

});
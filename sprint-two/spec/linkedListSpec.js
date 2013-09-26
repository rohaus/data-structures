describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should return the default value at the head when there is no head", function(){
    expect(linkedList.head).toEqual(null);
  });

  it("should take a value and add it to the end of the list", function() {
    linkedList.addToTail(1);
    expect(linkedList.tail).toEqual(0);
  });
  
  it("should return the value at the head after adding twice to the tail", function(){
    linkedList.addToTail(3);
    linkedList.addToTail(2);
    expect(linkedList.head).toEqual(0);
  });
  
  it("should add a value to the end of the list and be able to remove the first value", function(){
    linkedList.addToTail(1);
    expect(linkedList.removeHead()).toEqual(1);
  });

  it("should add two values consequtively and the remove the head", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.removeHead()).toEqual(1);
  });

  it("should return the value at the head after adding twice and removing once", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(1);
  });
});
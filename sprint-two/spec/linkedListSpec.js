
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

  it("should return true if the list contains the target value in a list of one node", function(){
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).toEqual(true);
  });

  it("should return true if the list contains the target value in a list of two nodes", function(){
    linkedList.addToTail(3);
    linkedList.addToTail(6);
    expect(linkedList.contains(3)).toEqual(true);
  });

  it("should return false if the list does not contain the target value in a list of two nodes", function(){
    linkedList.addToTail(3);
    linkedList.addToTail(6);
    expect(linkedList.contains(80)).toEqual(false);
  });

  // describe("doubly linkedLists", function(){
  //   it("should have methods named 'addToTail', 'removeHead', 'contains', addToHead, and removeTail", function() {
  //     expect(linkedList.addToTail).toEqual(jasmine.any(Function));
  //     expect(linkedList.removeHead).toEqual(jasmine.any(Function));
  //     expect(linkedList.contains).toEqual(jasmine.any(Function));
  //     expect(linkedList.addToHead).toEqual(jasmine.any(Function));
  //     expect(linkedList.removeTail).toEqual(jasmine.any(Function));
  //   });

  //   describe("addToHead", function(){
  //     it("should be able to add to the head", function(){
  //       linkedList.addToHead(3);
  //       expect(linkedList.head).toEqual(0);
  //     });

  //     it("should take a value and add it to the head, when there is already a head", function(){
  //       linkedList.addToTail(3);
  //       linkedList.addToHead(70);
  //       expect(linkedList.head).toEqual(-1);
  //     });
  //   });

  //   describe("removeTail", function(){
  //     it("should be able to remove the tail", function(){
  //       linkedList.addToHead(3);
  //       linkedlist.removeTail();
  //       expect(linkedList.tail).toEqual(0);
  //     });

  //     it("should take a value and add it to the head, when there is already a head", function(){
  //       linkedList.addToTail(3);
  //       linkedList.addToHead(70);
  //       expect(linkedList.head).toEqual(-1);
  //     });
  //   });
  // });
});
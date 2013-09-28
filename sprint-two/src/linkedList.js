
// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null; //first
  list.tail = null; //last
  list.makeNode = makeNode;

  list.addToTail = function(value){
    var newTail = list.makeNode(value);
    newTail.previous = list.tail;
    debugger;
    if (list.head === null){
      list.head = list.tail = 0;
    }
    list[list.tail] = newTail;
    list.tail++;
  };

  list.removeHead = function(){
    var temp = list[list.head].value;
    list.head++;
    return temp;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key].value === target){
        return true;
      }
    }
    return false;
  };

  list.addToHead = function(value){
    var newHead = list.makeNode(value);
    newHead.next = list.head + 1;
    newHead.previous = list.head;
    if(list.tail === null){
      list.tail--;
    }
    list.head--;
    list[list.head] = newHead;
  };

  list.removeTail = function(){
    var temp = list[list.tail].value;
    list.tail--;
    return temp;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

// var linkedList = makeLinkedList() //{head: null, tail: null, makeNode: node, addToTail: fn.., removeHead: fn.., contains: fn...}
// linkedList.addToTail(3); // {head: 3, tail: null, makeNode: node, addToTail: fn.., removeHead: fn.., contains: fn...}
// makeNode(value);

// linkedList = {
//   0: {value: value, next: 1},
//   1: {value: value, next: next}
// }
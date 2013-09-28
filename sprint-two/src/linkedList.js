
// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null; //first
  list.tail = null; //last
  list.makeNode = makeNode;

  list.addToTail = function(value){
    var newTail = list.makeNode(value);
    newTail.previous = list.tail;
    if (list.head === null){
      list.head = 0;
    }
    if (list.tail === null){
      list.tail = 0;
    }else{
      list.tail++;
      list[newTail.previous].next = list.tail;
    }
    list[list.tail] = newTail;
  };

  list.removeHead = function(){
    // Need to fix removing and element when it is the only one
    // Need to fix the list.head and list.tail value in the case above
    var temp = list[list.head].value;
    console.log("list[list.head+1] is: "+list[list.head+1]);
    if (list[list.head+1] !== undefined){
      list[list.head+1].previous = null;
      delete list[list.head];
      list.head++;
    } else {
      delete list[list.head];
      list.head = null;
      list.tail = null;
    }
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
    if(list.tail === null){
      list.tail = 0;
    }
    if(list.head === null){
      list.head = 0;
    }else{
      list[list.head].previous = list.head - 1;
      newHead.next = list.head;
      list.head--;
    }
    list[list.head] = newHead;
  };

  list.removeTail = function(){
    var temp = list[list.tail].value;
    if (list[list.tail-1]!== undefined){
      list[list.tail-1].next = null;
      delete list[list.tail];
      list.tail--;
    } else {
      delete list[list.tail];
      list.head = null;
      list.tail = null;
    }
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
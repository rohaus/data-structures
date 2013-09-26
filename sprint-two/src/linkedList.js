// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null; //first
  list.tail = null; //last
  list.makeNode = makeNode;

  list.addToTail = function(value){
    // list.makeNtail = node;
    if (list.head === null){
      list.head++;
    }
    list.tail++;
    list[list.tail] = list.makeNode(value);
  };

  list.removeHead = function(){
    var temp = list[list.head].value;
    list.head++;
    return temp;
  };

  list.contains = function(target){
    for(var key in list){
      if(list.key.value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

// var linkedList = makeLinkedList() //{head: null, tail: null, makeNode: node, addToTail: fn.., removeHead: fn.., contains: fn...}
// linkedList.addToTail(3); // {head: 3, tail: null, makeNode: node, addToTail: fn.., removeHead: fn.., contains: fn...}
// makeNode(value);

// linkedList = {
//   0: {value: value, next: 1},
//   1: {value: value, next: next}
// }
var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var last = 0;
  var temp;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[last] = value;
    last++;
    size++;
  };

  instance.dequeue = function(){
    size && size--;
    temp = storage[first];
    first++;
    return temp;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var queueMethods = {};


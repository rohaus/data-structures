var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var temp;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    temp = storage[first];
    first++;
    return temp;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

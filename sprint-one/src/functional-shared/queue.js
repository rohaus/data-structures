var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {
  // Use an object with numeric keys to store values
  storage: {},
  count: 0,
  first: 0,
  last: 0,
  temp: null
  // Implement the methods below
  };

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.last] = value;
    this.last++;
    this.count++;
  },

  dequeue: function(){
    this.count && this.count--;
    this.temp = this.storage[this.first];
    this.first++;
    return this.temp;
  },

  size: function(){
    return this.count;
  }
};


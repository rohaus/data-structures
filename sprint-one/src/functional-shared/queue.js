var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.count = 0;
  instance.first = 0;
  instance.last = 0;
  instance.temp = null;
  // Implement the methods below

  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

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


var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;
  instance.first = 0;
  instance.last = 0;
  instance.temp = null;

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


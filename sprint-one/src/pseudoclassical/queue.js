var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.first = 0;
  this.last = 0;
  this.temp = null;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
  this.count++;
};

Queue.prototype.dequeue = function(){
  this.count && this.count--;
  this.temp = this.storage[this.first];
  this.first++;
  return this.temp;
};

Queue.prototype.size = function(){
  return this.count;
};

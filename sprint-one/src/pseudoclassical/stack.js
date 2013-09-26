var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function(){
  this.count && this.count--; 
  return this.storage[this.count];
};

Stack.prototype.size = function(){
  return this.count;
};
var makeStack = function() {
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.count = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = stackMethods.push;

  instance.pop = stackMethods.pop;

  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  this.count && this.count--; 
  return this.storage[this.count];
};

stackMethods.size = function(){
  return this.count;
};


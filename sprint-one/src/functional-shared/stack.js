var makeStack = function() {
  var instance = {
    storage: {},
    count: 0
  };
  _.extend(instance, stackMethods);
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


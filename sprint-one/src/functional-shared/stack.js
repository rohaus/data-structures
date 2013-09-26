var makeStack = function() {
  var instance = {
    storage: {},
    count: 0
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function(){
    this.count && this.count--; 
    return this.storage[this.count];
  },

  size: function(){
    return this.count;
  }
};
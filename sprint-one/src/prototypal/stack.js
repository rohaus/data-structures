var makeStack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.count = 0;

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
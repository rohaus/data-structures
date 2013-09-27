var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._count = 0;
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  if(this.contains(value) === false){
    this._storage[this._count] = value;
    this._count++;
  }
  // var count = this._count;
  // for (var i=0; i < count + 1; i++){
  //   if (this._storage[i] === undefined && this._storage[i] !== value){
  //     this._count++;
  //     this._storage[i] = value;
  //   }
  // }
};

setPrototype.contains = function(value){
  for (var key in this._storage) {
    if(this._storage[key] === value){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(value){
  if (this.contains(value)){
    for (var key in this.storage){
      if (this._storage[key] === value){
        delete this._storage[key];
      }
    }
  }
};

//set = {_.storage: {}}
//set.add("hello");
